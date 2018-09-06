import React from 'react';
import Table from '../Table/';
import {sortASC, sortDESC} from '../Table/dateSort';
import Content from '../content/';
import {Breadcrumbs} from '../Breadcrumbs/';
import {Breadcrumb} from '../Breadcrumbs/';

export default (props) => {
  return <Content>
    <Breadcrumbs>
      <Breadcrumb>Upcoming Events</Breadcrumb>
    </Breadcrumbs>
    <Table
       fields={[{
         title: 'Date',
         key: 'dateString',
         sortASC,
         sortDESC,
       }, {
         title: 'Start',
         key: 'startTime',
       }, {
         title: 'Venue',
         key: 'venueString',
       }, {
         title: 'Type',
         key: 'typeString',
       }, {
       }, {
         title: 'Location',
         key: 'locationString',
       }]}
       items={props.upcomingShows}
       sortDefaultKey='dateString'
    />
    <div style={{marginTop: '2em'}} />
    <Breadcrumbs>
      <Breadcrumb>Past Shows</Breadcrumb>
    </Breadcrumbs>
    <Table
       fields={[{
         title: 'Date',
         key: 'dateString',
         sortASC,
         sortDESC,
       }, {
         title: 'Venue',
         key: 'venueString',
       }, {
       }, {
         title: 'Type',
         key: 'typeString',
       }, {
         title: 'Location',
         key: 'locationString',
       }]}
       items={props.pastShows}
       sortDefaultKey='dateString'
       sortDefaultDirection='DESC'
    />
  </Content>
}