webpackJsonp([0xeedca13539d7],{745:function(e,t){e.exports={data:{markdownRemark:{html:'<p><em>This article has be revised!!! <a href="2014-03-17-10-skills-every-developer-should-master-revisited.md">The updated version can be found here</a></em></p>\n<hr>\n<p>There are some things you just have to know.<br>\nThese are the things all developers need to know.<br>\nWith this toolset mastered, you should be in good shape to gracefully navigate through any typical development environment.  </p>\n<ol>\n<li>Vi</li>\n<li>Regex</li>\n<li>GNU Tools</li>\n<li>Bash</li>\n<li>Javascript</li>\n<li>Emacs</li>\n<li>SQL</li>\n<li>Markdown</li>\n<li>Tmux</li>\n<li>R</li>\n</ol>\n<p><strong>Bonus</strong> Git</p>\n<h1>Vi</h1>\n<p><strong>Fact</strong> Any reasonable developer should know the basics of vi.  </p>\n<p><strong>Opinion</strong> Vi is better than emacs.  </p>\n<p>Just to get that straightened out.  This article is not about vi vs emacs (they are both on the list!).  </p>\n<p>Vi is listed first because it is the standard.  Log into any *nix server and you will have vi.<br>\nEvery developer should be able to login to a fresh system, and edit files.<br>\nLets face it, even emacs users can agree that nano is for n00bs.<br>\nAfter all, its called visudo, not nanosudo.  </p>\n<p>If you are not a vimmer, I recommend you learn the basics.  This means just editing a file, and save/quitting.<br>\nIf you prefer a GUI editor, or emacs, thats cool for normal usage, but in emergencies vi should available in your toolbelt.  </p>\n<p><strong>Recommended Reading</strong>  </p>\n<ol>\n<li>Open your terminal and complete the first quarter of <code>$ vitutor</code></li>\n<li>Use vi to edit config files in the terminal to get used to the commands.</li>\n</ol>\n<h1>Regex</h1>\n<p>In addition to vi, regular expressions are universally available.<br>\nFor many developers, their programming career can be broken into <em>before-regex</em> and <em>after-regex</em>.<br>\nThat is because your workflow will vastly increase once you can use regexes in your find and replace operations.  </p>\n<p>This will be applicable in your code as well.  You cannot master half of the tools listed in this article without regex expertise, so if you dont know how to write regexes stop and learn right now.  </p>\n<p><strong>Recommended Reading</strong></p>\n<ol>\n<li><a href="%22http://www.amazon.com/gp/product/1449319432/ref=as_li_ss_tl?ie=UTF8&#x26;camp=1789&#x26;creative=390957&#x26;creativeASIN=1449319432&#x26;linkCode=as2&#x26;tag=richsonicom-20%22">Regular Expressions Cookbook</a> is how I started learning regex, but it is a bit slow for beginners.</li>\n<li><a href="http://www.amazon.com/gp/product/097873923X/ref=as_li_ss_tl?ie=UTF8&#x26;camp=1789&#x26;creative=390957&#x26;creativeASIN=097873923X&#x26;linkCode=as2&#x26;tag=richsonicom-20">Textmate: Power Editing for the Mac</a> was the book that actually taught me regex.  Specifically the search chapter.</li>\n</ol>\n<h1>GNU Tools</h1>\n<p>Just like regex, GNU tools will change your life.<br>\nThey liberate you from language specific IDE environments, and allow you to get good at something universal.<br>\nEven experts continue to marvel at the power bestowed upon a properly crafted chain of GNU Commands.  </p>\n<p><strong>Recommended Reading</strong>  </p>\n<ol>\n<li>All developers must own <a href="http://www.amazon.com/gp/product/0596003307/ref=as_li_ss_tl?ie=UTF8&#x26;camp=1789&#x26;creative=390957&#x26;creativeASIN=0596003307&#x26;linkCode=as2&#x26;tag=richsonicom-20">Unix Power Tools</a></li>\n<li>Taco Bell Coding</li>\n<li>Read man pages, you will be surprised at the power some commands have (e.g. man find; man curl; man grep)</li>\n</ol>\n<h1>Bash</h1>\n<p>Unlike the formerly mentioned tools shell scripting is something gradually pays off.<br>\nFor me it started with writing small scripts to automate tmux, and make my work easier.<br>\nI mastered bash when I wrote my own customized bash prompt while on a trip in Ireland.  </p>\n<p>There are many alternatives to bash out there, and I tried many of them extensively, but have to say that it is not worth the headache.  </p>\n<p>Bash has many features that other shells dont, and like vi, bash is usually the standard.<br>\nIt is nice to not have to install Zshell.  Trust me on this.  With my current set up, all I have to do is wget my dotfiles, and run the install script.<br>\nWith a clean up script, you can even do this on a buddy\'s computer without zapping out his or her files.  </p>\n<p>As far as features go, <code>$ set</code> was the command that made me leave zshell.<br>\nMy prompt port is also way faster in bash.  </p>\n<p><strong>Recommended Reading</strong></p>\n<ol>\n<li>The <a href="http://www.amazon.com/gp/product/0596526784/ref=as_li_ss_tl?ie=UTF8&#x26;camp=1789&#x26;creative=390957&#x26;creativeASIN=0596526784&#x26;linkCode=as2&#x26;tag=richsonicom-20">Bash Cookbook</a> really sharpened my skills in a logical order.</li>\n</ol>\n<h1>Javascript</h1>\n<p>Javascript is everywhere.  That is why every programmer should master it.  It is like the PERL of the modern time.  Using a friends Windows computer, but you need to do a little rat-tat-tat-tat in a console?  That is where Javascript shines.<br>\nIn addition to its portability, using javascript to do a quick page scrape can save you tons of time.  </p>\n<p>I would like to add that you should be using jQuery because it provides a higher level syntax, which is better for rat-tat-tat-tatting.  </p>\n<p><strong>Recommended Reading</strong></p>\n<ol>\n<li>Javascript, the good parts</li>\n<li>Functional Javascript</li>\n</ol>\n<h1>Emacs</h1>\n<p>Emacs is the other of the big two text editors, but holds another special value:  Command line shortcuts, are defaulted to emacs.<br>\nAlthough you can change your inputrc file to use vim mode, it is a little bit janky.  </p>\n<p>I ended up customizing myself a hybrid of both.  In short, all master developers need to know both vi and emacs, no exceptions.  </p>\n<p>Vimmers, if you want the respect of emacs users, know how to use their editor when you are pairring.<br>\nThe same goes for emacs users.  </p>\n<p><strong>Recommended Reading</strong></p>\n<h1>SQL</h1>\n<p>SQL is one common denominator that spreads across almost all application domains.<br>\nMaster SQL, and master it early.  It will pay off in the long run, I promise.<br>\nI noticed that many senior level developers can join a team, and scale up their ability to contribute, and debug an existing project by poking around in the database.  </p>\n<p>Most databases use SQL, so if you learn one you will be able to ramp up quickly in another.  </p>\n<p><strong>Recommended Reading</strong></p>\n<ol>\n<li>unfortunately none.  Learning SQL is something I learned in a college class, and I am very happy I did.  Fortunately the basics are easy to pick up. Just ask a colleage to teach you, and practice a lot.</li>\n</ol>\n<h1>Markdown</h1>\n<p>Markdown is the newest tool on my own belt, but one of the most useful.<br>\nIt is so awesome that once you learn it, you will begin to insist that your workplace integrates it into its project management software.<br>\nI write my meeting notes, readmes, code documentation, and even my blog posts in markdown.  </p>\n<p>It is the solution to the plaintext, no syntax highlight problem.<br>\nThe only problem is there is no quick way to just pick up markdown.  </p>\n<p>I suggest you start with headings and lists, and then slowly add the features you need.  </p>\n<p><strong>Recommended Reading</strong>  </p>\n<h1>Tmux</h1>\n<p>For some reason Tmux is a hard sell, but it is so awesome.<br>\nI dont use the terminal without it.<br>\nI will just list why I like it, and how to learn it.<br>\nUnderstand that it is on this list, and when you learn it, you will be so surprised that no one wants to learn it.  </p>\n<p>Tmux lets you:  save ssh sessions, remote pair via ssh, split panes, use vimux, organize and automate you development environment, rapidly switch context.  </p>\n<p><strong>Recommended Reading</strong>  </p>\n<h1>R</h1>\n<p>R is another tool I learned in college.  In my opinion, it has the steepest learning curve out of all the tools in this article.<br>\nHowever, it saves you the headache of using Excel.  </p>\n<p>I mostly use it to dynamically generate graphs.  I use this to monitor personal stats (e.g. progress and error of transitioning from qwerty to dvorak)  </p>\n<p><strong>Recommended Reading</strong></p>\n<h1>Git</h1>\n<p>Lastly I would recommend learning git, but I would not go as far as saying you have to learn it.<br>\nI have used most of the popular SVN systems, and I find git to be the most complete, and simple once understood.<br>\n<strong>Recommended Reading</strong>  </p>',frontmatter:{title:"10 Skills Every Developer Should Master"},fields:{date:"2013-12-02"}}},pathContext:{url:"/posts/2013-12-02-10-skills-every-developer-should-master/"}}}});
//# sourceMappingURL=path---posts-2013-12-02-10-skills-every-developer-should-master-efe333f4eadab1ca8685.js.map