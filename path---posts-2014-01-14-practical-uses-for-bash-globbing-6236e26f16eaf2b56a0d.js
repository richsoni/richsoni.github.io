webpackJsonp([0x87d96d71ff42],{761:function(e,o){e.exports={data:{markdownRemark:{html:"<p><em>The first half of this article discusses <a href='#whatGlobbingIs'>What Globbing is</a>, how to <a href='#enableGlobbing'>Enable Globbing</a>, and <a href='#seeGlobbingInAction'>How it works</a>.</em>\n<strong>If you are more experienced feel free to skip to <a href='#theTips'>The Tips</a></strong>.</p>\n<h1>What Globbing Is</h1>\n<p>Globbing lets you be more ambiguous with the way you specify input to your computer.\nTo glob an input use the <code>*</code> operator in place of more specific text.</p>\n<p>Make sure you have globbing enabled in your shell ( See Next Section ) before delving into <em><a href='#seeGlobbingInAction'>Seeing globbing in Action</a></em> .</p>\n<h1 id='enableGlobbing'>Enable Globbing</h1>\n<p>By default your bash instance should have an option called globbing enabled.\nTo check run the following command:</p>\n<pre><code>$ set -o | grep glob\n  noglob      off\n</code></pre>\n<p>The examples in this article rely on that option to be set, so make sure globbing is enabled ( <code>noglob off</code> ).\nIf it says <code>noglob on</code> you will need to enable globbing.\nThere are two ways to do this.</p>\n<pre><code>## Temporary Method\n$  set -o noglob\n$  set -o | grep glob\n  noglob      off\n</code></pre>\n<p>A more permanent solution is to add this line to your bashrc:</p>\n<pre><code>shopt -s extglob\n</code></pre>\n<h1 id='seeGlobbingInAction'>See Globbing In Action</h1>\n<p>To get a feel for how globbing works, just give it a try.</p>\n<p>As an example lets use some globbing in my Blog Posts folder:</p>\n<pre><code>$  echo *\n2013-12-02-10-skills-every-developer-should-master.md 2013-12-02-practical-vim.md 2013-12-03-how-i-use-github-pages-to-host-my-blog.md 2013-12-04-the-red-queen.md 2013-12-13-vagabonding.md 2013-12-28-4-stereotypical-technology-users-(starwars-edition).md 2013-12-29-how-to-boost-productivity-with-symlinks.md 2014-01-06-interview-question-which-exit-to-choose.md 2014-01-14-practical-uses-for-bash-globbing.md 2014-vim-tips.txt vimstuff.txt c.txt\n</code></pre>\n<p>In the previous example the <code>*</code> is expanded to every file in the folder.</p>\n<pre><code>$ echo 2014*\n2014-01-06-interview-question-which-exit-to-choose.md 2014-01-14-practical-uses-for-bash-globbing.md 2014-vim-tips.txt\n</code></pre>\n<p>Notice how the glob worked in the previous command.  It told the <code>echo</code> command to print all the files that start with <code>2014</code>.</p>\n<!-- more -->\n<pre><code>$ echo *.txt\n2014-vim-tips.txt vimstuff.txt c.txt\n</code></pre>\n<p>Putting the <code>*</code> first switches the way the glob works.  Instead of matching the beginning, the command grabs all the files that end with the text after the <code>*</code>.</p>\n<pre><code>$ echo *vim*\n2013-12-02-practical-vim.md 2014-vim-tips.txt vimstuff.txt\n</code></pre>\n<p>Using a <code>*</code> around some text will look for it anywhere in the input.\nNotice that the <code>*</code> will match <code>vimstuff.txt</code>, this shows that the star can match nothing as well as something.</p>\n<pre><code>$ echo 20*vim*\n2013-12-02-practical-vim.md 2014-vim-tips.txt\n</code></pre>\n<p>Finally, you can use as many <code>*</code>'s as you want to refine your globs.</p>\n<h1 id='theTips'>The Tips</h1>\n<p>Here are some of my favorite ways to use globbing.\nYou will find your own unique ways as well, but this will be a good handful to get your feet wet with.</p>\n<h2>Perform Filetype Specific Move / Copy</h2>\n<pre><code>$ mv *.txt ~/Documents/Notes\n$ mv *.css stylesheets/\n$ cp ~/SomeProject/*.html* .\n$ ls *.html*\nindex.html\nnav.html.erb\nsidebar.html.haml\n</code></pre>\n<h2>Grab All Folders</h2>\n<pre><code>$  echo */\n</code></pre>\n<h2>Hone in on a file quickly</h2>\n<p><strong>This tip is my absolute favorite, and the reason I wrote this article.</strong></p>\n<pre><code>$ echo *\n2013-12-02-10-skills-every-developer-should-master.md 2013-12-02-practical-vim.md 2013-12-03-how-i-use-github-pages-to-host-my-blog.md 2013-12-04-the-red-queen.md 2013-12-13-vagabonding.md 2013-12-28-4-stereotypical-technology-users-(starwars-edition).md 2013-12-29-how-to-boost-productivity-with-symlinks.md 2014-01-06-interview-question-which-exit-to-choose.md 2014-01-14-practical-uses-for-bash-globbing.md 2014-vim-tips.txt vimstuff.txt c.txt\n$ echo *master*\n2013-12-02-10-skills-every-developer-should-master.md\n$ mv *master* 2014-01-01-skills-every-developer-should-master.md\n$ vim *master*\n$ rm *master*\n</code></pre>\n<pre><code>$ ls\njquery-1.0.10.min.js\n$ vim *jquery*\n</code></pre>\n<p>I USUALLY DON'T EVEN BOTHER TO LS IN THAT CASE</p>\n<p>This tip even works for commands like cd.</p>\n<pre><code>$ cd *ox*\n$ pwd\n/Users/rich/Dropbox\n</code></pre>\n<hr>\n<p>That is all I am going to offer up now, but feel free to post your own favorites / discoveries in the comments.</p>",frontmatter:{title:"Practical Uses For Bash Globbing",hero:null},fields:{date:"2014-01-14"}}},pathContext:{url:"/posts/2014-01-14-practical-uses-for-bash-globbing/"}}}});
//# sourceMappingURL=path---posts-2014-01-14-practical-uses-for-bash-globbing-6236e26f16eaf2b56a0d.js.map