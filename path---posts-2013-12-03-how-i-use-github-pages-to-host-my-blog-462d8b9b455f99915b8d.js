webpackJsonp([19536481440333],{544:function(e,t){e.exports={data:{markdownRemark:{html:'<h1>Its Free and Easy</h1>\n<p>I have used a handful of different methods to host my personal site over the years.<br>\nEach has been fine, but my most recent port has been my favorite, and the easiest to implement / manage.  </p>\n<p>When I decided to redesign I had the following requirements:</p>\n<ol>\n<li>Hosting that is a cheap as possible</li>\n<li>Front End heavy architecture with little to no back en</li>\n<li>Quick to set up so I can start writing instead of coding</li>\n<li><strong>The ability to edit my posts in vim / save them in a git repo, so they are in effect not married to the design</strong></li>\n</ol>\n<p>There are several parts to this article:</p>\n<ol>\n<li><a href="#TheTechnologies">The Technologies</a></li>\n<li><a href="#Setup">Setup</a></li>\n<li><a href="#dns">Appendix - Namecheap DNS Settings</a></li>\n</ol>\n<h1>The Technologies</h1>\n<p>  I landed on using <a href="http://pages.github.com/">github pages</a> to host my site after some floundering with a rails app on heroku, and a wordpress app.<br>\nIt is nice because its free, and gives you a lot right out of the box if you go along with its conventions.  </p>\n<p>  Even though I have design skills, I outsourced that work, and bought a template from <a href="http://wrapbootstrap.com">wrapbootstrap</a>.<br>\nI did this because I was eager to start writing, and its an easy way to get up and running with a polished.  </p>\n<p>  <a href="http://pages.github.com/">Github Pages</a> uses <a href="http://jekyllrb.com">Jekyll</a> to generate your blog in html.</p>\n<h2>Jekyll</h2>\n<p>  <a href="http://jekyllrb.com">Jekyll</a> uses <a href="http://liquidmarkup.org/">The Liquid Templating Engine</a>, and <a href="http://yaml.org/">Yaml</a> to generate a static blog.\nIt took a bit to get used to <a href="http://jekyllrb.com">Jekyll</a>, but once I figured out a workflow it became painless to  cut the <a href="http://wrapbootstrap.com">wrapbootstrap</a> theme into it.\nSince you just write each post in a <a href="http://www.whatismarkdown.com/">Markdown</a> file, there is not much to actually getting your content loading in <a href="http://jekyllrb.com">Jekyll</a>.  </p>\n<h1>Setup</h1>\n<p>  It took some fishing to get my site setup properly, so I am going to outline what I did below.  </p>\n  <h4> Get the site up </h4>\n<ol>\n<li>Create a repo on github, make sure the name is <code>(your_unique_sitename).github.io</code> because that is how github knows to make a site from the repo.  <a href="https://help.github.com/articles/create-a-repo">(how to create a repo)</a> <a href="https://help.github.com/categories/20/articles">(github pages help)</a></li>\n<li>Clone the repo locally if you have not already</li>\n<li><code>gem install jekyll</code>  <a href="http://jekyllrb.com/docs/installation/">(how to)</a></li>\n<li>cd into the repo foler and run <code>jekyll new</code></li>\n<li><code>git add .; git push origin HEAD</code></li>\n<li>navigate to <code>(your_unique_sitename).github.io</code>, and you should see the jekyll project.</li>\n<li>Add a CNAME file to the root of your project with the domain name in it, so github can route the subdomain properly <a href="https://github.com/richsoni/richsoni.github.com/blob/master/CNAME">see mine</a></li>\n<li>When you are ready get point a URL to this page from your DNS provider <a href="&#x27;#a1&#x27;">(see A1 for my settings)</a>.  I found the IP address that my page should point to (<code>204.232.175.78</code>) on <a href="https://help.github.com/articles/setting-up-a-custom-domain-with-pages">this page</a>.</li>\n</ol>\n<h4> Configure Your Jekyll Site </h4>\n<ol>\n<li>\n<p>Open <em>config.yml, and edit its contents.  If you want to copy mine [its here](<a href="https://github.com/richsoni/richsoni.github.com/blob/master/">https://github.com/richsoni/richsoni.github.com/blob/master/</a></em>config.yml)</p>\n</li>\n<li>\n<p>Start jekyll by running <code>jekyll serve -w</code> the <code>-w</code> tells it to regenerate the files when you save.  Note: all files are generated in the _publish folder which is in the .gitignore file by default when you run <code>jekyll new</code> (i.e. they are only for development)</p>\n</li>\n<li>\n<p>Navigate to localhost:4000 to view your site</p>\n</li>\n<li>\n<p>Cut up your template into Jekyll.  I used <a href="http://jekyllrb.com/docs/home/">the documentation</a>, but here are some quick tips to get started.</p>\n<p>  a. The _layouts folder contains templates that will wrap around all files that use it (declared in the YAML <a href="http://jekyllrb.com/docs/frontmatter/">Front Matter</a>\nyou render the page content in liquid by putting <code>{ {content} }</code>\nb. To generate partials, create a file in the _includes folder, and put <code>{ % include filename % }</code>\nc. You can declare any variable in the <a href="http://jekyllrb.com/docs/frontmatter/">Front Matter</a>, and use it in the template.  It is not reserved for Jekyll only vars\nd. Use _data to declare static data in yaml.  I used this for my Project blurb section.\ne. If you want to use markdown but not in a blog post, you can.  Just write it and Jekyll will compile it to html.  For example, <code></code>projects/carbon.md => projects/carbon.html\' which can be navigated to in the browser.\nThese files also can leverage <a href="http://jekyllrb.com/docs/frontmatter/">Front Matter</a>, so slap a layout around it.</p>\n</li>\n</ol>\n<hr>\n<h3 id=\'a1\'>A1) My Namecheap DNS Settings</h3>\n<pre><code>Host Name: @\n  IP:  204.232.175.78\n  Type: A (Address)\nHost Name: www\n  IP:  richsoni.github.io.\n  Type: CNAME (Alias)\n</code></pre>',frontmatter:{title:"Using Github Pages To Host Your Blog"},fields:{date:"2013-12-03"}}},pathContext:{slug:"/posts/2013-12-03-how-i-use-github-pages-to-host-my-blog/"}}}});
//# sourceMappingURL=path---posts-2013-12-03-how-i-use-github-pages-to-host-my-blog-462d8b9b455f99915b8d.js.map