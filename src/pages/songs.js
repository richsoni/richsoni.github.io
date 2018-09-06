import React from "react";
import Link from 'gatsby-link';
import styles from './style.module.css';
import Table from '../components/Table/';
import Tabs from '../components/Tabs/';
import {sortObjMomentASC, sortObjMomentDESC} from '../utils/sorting';
import momentify from '../utils/momentify';
import {showsBySong} from '../utils/data';
import Content from '../components/content/';
import {Breadcrumbs} from '../components/Breadcrumbs/';
import {Breadcrumb} from '../components/Breadcrumbs/';

const tableFields = [
  {
    title: 'Song',
    key: 'title',
  },
  {
    title: 'Artists',
    key: 'artists',
  },
  {
    title: 'Date Composed',
    key: 'composedAt',
    sortASC: sortObjMomentASC('composedAtMoment'),
    sortDESC: sortObjMomentDESC('composedAtMoment'),
  },
  {
    title: "Times Played",
    key: "performanceCount",
  },
  {
    title: 'First Performed',
    key: 'firstPerformance',
    sortASC: sortObjMomentASC('firstPerformanceMoment'),
    sortDESC: sortObjMomentDESC('firstPerformanceMoment'),
  },
  {
    title: 'Last Performed',
    key: 'lastPerformance',
    sortASC: sortObjMomentASC('lastPerformanceMoment'),
    sortDESC: sortObjMomentDESC('lastPerformanceMoment'),
  },
];

const parseSongs = (props) => {
  const songs = props.data.songs.edges.map((s) => s.node)
  const _showsBySong = showsBySong(props.data.shows, props.data.songs);
  return songs.map((song) => {
    const artists = song.frontmatter.artists.sort().join(', ')
    const composedAtMoment = momentify(song.frontmatter.composed_at);
    const shows = _showsBySong[song.fields.basename] || [];
    const firstPerformance = shows[shows.length - 1];
    const firstPerformanceMoment = momentify(firstPerformance)
    const lastPerformance = shows[0];
    const lastPerformanceMoment = momentify(lastPerformance)
    return {
      title: song.frontmatter.title,
      composedAt: composedAtMoment ? composedAtMoment.format('YYYY-MM-DD') : null,
      artists: artists,
      isMine: !!artists.match('Rich Soni'),
      composedAtMoment: composedAtMoment,
      url: song.fields.url,
      performanceCount: shows.length,
      firstPerformanceMoment,
      firstPerformance,
      lastPerformanceMoment,
      lastPerformance,
      key: song.id,
    }
  });
}
export default class SongIndex extends React.Component {

  render(){
    return (
      <Content>
        <Breadcrumbs>
          <Breadcrumb>Songs</Breadcrumb>
        </Breadcrumbs>
        <Tabs tabs={this.tabs()} />
      </Content>
    );
  }

  tabs() {
    const songs = parseSongs(this.props);
    return [{
      content: () => <Table
        fields={tableFields}
        items={songs}
      />,
      title: "All",
    }, {
      content: () => <Table
        fields={tableFields}
        items={songs.filter((s) => s.isMine)}
      />,
      title: "Originals",
    }, {
      content: () => <Table
        fields={tableFields}
        items={songs.filter((s) => !s.isMine)}
      />,
      title: "Covers",
    },
    ];
  }
};

export const query = graphql`
  query SongIndex {
    songs: allMarkdownRemark(
      sort: { order: DESC, fields: [fields___date] }
      filter: { fields: { relativeDirectory: {eq: "songs"}  }}
      ) {
        edges {
          node {
            id
            frontmatter {
              title
              date(formatString: "YYYY-MM-DD")
              hero
              composed_at(formatString: "YYYY-MM-DD")
              artists
            }
            fields {
              url
              basename
              date
            }
            excerpt
          }
        }
      }

    shows: allMarkdownRemark(
      sort: { order: DESC, fields: [fields___date] }
      filter: { fields: { relativeDirectory: {eq: "shows"}  }}
    ) {
      edges {
        node {
          id
          fields {
            date(formatString: "YYYY-MM-DD")
          }
          frontmatter {
            setlist
          }
        }
      }
    }
  }
`