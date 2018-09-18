webpackJsonp([0x8daf75f564ec],{754:function(e,t){e.exports={data:{markdownRemark:{html:"<p>Tmux is one of the <a href=\"/10-skills-every-developer-should-master/\">10 skills every developer should master</a>.\nIt takes <a href=\"https://www.bitcast.io/b/tmux-tunes-week-1\">one week</a> to get started, and saves hours of work and frustration.</p>\n<p>Tmux is a modern incarnation of the GNU Screen program.\nBetween the two, tmux has a more active group of developers.\nAs such, most open tmux bugs are usually fixed faster.\nGreater development activity, and added features are why I use tmux over Screen.\nHowever, this article mostly showcases basic features which both technologies include.</p>\n<p>Feel free to give either program a try.\nBoth improve a workflow in essentially the same way.\nIt's easy to switch between using either program because they are very similar.</p>\n<h1>Why use tmux?</h1>\n<p>Answer the following questions to evaluate if tmux can benefit you:</p>\n<div height='1px'></div>\n<ul style='list-style:none; border-left: 0px'>\n  <li><label style='font-weight:normal'><input type='checkbox'/> I often ssh into another box from the terminal</label></li>\n  <li><label style='font-weight:normal'><input type='checkbox'/> I have more than three terminal tabs open on a regular basis</label></li>\n  <li><label style='font-weight:normal'><input type='checkbox'/> I like to look at two terminal windows side by side</label></li>\n  <li><label style='font-weight:normal'><input type='checkbox'/> I use ( or want to learn ) vi, vim, gvim, or MacVim</label></li>\n  <li><label style='font-weight:normal'><input type='checkbox'/> My project workflows are complicated to set up, and should be automated</label></li>\n</ul>\n<p>If you answered <strong>yes to any</strong> of those questions, then tmux will be useful to you.</p>\n<ol>\n<li>It can improve the stability, and increase the execution speed of workflows.</li>\n<li>It enables visualization of problems in a new way.</li>\n<li>It is easy to install, and works on most *nix platforms.</li>\n</ol>\n<h1>How does it work?</h1>\n<p>Tmux stands for terminal multiplexer.</p>\n<blockquote>\n<p>tmux = <em>t<span style='color:#7f7f7f'>erminal</span> mu<span style='color:#7f7f7f'>ltiple</span>x<span style='color:#7f7f7f'>er</span></em></p>\n</blockquote>\n<p>A terminal multiplexer is a program that can load many terminal windows within one.\nDon't let this complex verbiage discourage you!!!\nUsing tmux is not very complicated, I promise.</p>\n<p>The tmux man page (<code>$ man tmux</code>) explains the features that tmux offers.</p>\n<blockquote>\n<p><span style='color:#7f7f7f'>(tmux) enables a</span> number of terminals <span style='color:#7f7f7f'>to be created,\naccessed, and controlled from a</span> single screen.  <span style='color:#7f7f7f'>tmux may be detached from a\nscreen and continue </span> running in the background, <span style='color:#7f7f7f'>then later </span>reattached.</p>\n</blockquote>\n<p>Tmux is a service that runs in the background.\nWhen attached to a tmux session, it enables interaction with the windows it controls.\nWhen the attached shell exits; tmux <em>detaches</em>, but remains running in the background.\nAs such, a separate shell can <em>reattach</em> back into the tmux session.\nThe session will continue in tmux with or without attached users.\nAny running programs in the session operate as if they were active the whole time.</p>\n<p>Tmux can manage multiple sessions at the same time.\nWithin each session, any number of windows can be created.\nWindows can also be split into both vertical and horizontal panes.\nTmux can be controlled by scripts, and automate repetitive workflow tasks.</p>\n<p><strong>Go Learn It</strong>:\n<a href=\"#WhatToDo\">Skip down to a list of next steps</a> if you are sold on giving tmux a try.</p>\n<h1>Use Cases</h1>\n<p>Here are a few example use cases for tmux.\nThey highlight some ways that tmux can be used to improve day to day workflows.\nPlease share your own use cases in the <a href=\"#Comments\">comments</a> section.</p>\n<h2>Debugging</h2>\n<p>A certain workflow is more efficient with two windows aligned next to each other e.g. code and server, code and console ect.</p>\n<h3>Without Tmux</h3>\n<ol>\n<li>Manually arrange windows next to each other.</li>\n<li>During the day resize them, and continually realign them.</li>\n</ol>\n<h3>With Tmux</h3>\n<ol>\n<li>Split the current tmux window into two panes</li>\n<li>resize the terminal window, and tmux will proportinally resize the panes</li>\n</ol>\n<img class=\"img-responsive media-object\" src='/images/posts/tmux_split.gif' alt=\"miniature-article\">\n<h2>SSH</h2>\n<p>An external box needs to run a long script ( like an install script )</p>\n<h3>Without Tmux</h3>\n<ol>\n<li>SSH into the machine and start the script</li>\n<li>Keep the session open because ending it will close all processes, and the script will fail.</li>\n</ol>\n<h3>With Tmux</h3>\n<ol>\n<li>SSH into the machine and start tmux</li>\n<li>Start the script and feel free to disconnect ( on purpose, or accidentally)</li>\n<li>Later on, ssh back in and attach to the tmux session to check on the progress</li>\n</ol>\n<img class=\"img-responsive media-object\" src='/images/posts/tmux_ssh.gif' alt=\"miniature-article\">\n<h2>Accidentally Closing A Bunch Of Tabs</h2>\n<p>There are a bunch of terminal tabs and windows open.\nAt some point another app needs to be closed.\nHowever, the terminal application gets closed by accident.\nNow, the lost terminal windows need to be restored.</p>\n<h3>Without Tmux</h3>\n<ol>\n<li>Individually open each tab again, and be extra careful next time</li>\n</ol>\n<h3>With Tmux</h3>\n<ol>\n<li>Open a new terminal window and attach to the tmux session, everything is still there.</li>\n</ol>\n<img class=\"img-responsive media-object\" src='/images/posts/tmux_accident.gif' alt=\"miniature-article\">\n<h2>Morning set up</h2>\n<p>On a certain project, several tasks need to be completed before work can begin e.g.</p>\n<pre><code>$ cd project\n$ git pull\n$ start server\n[Open a new tab]\n$ cd project\n$ start db\n[Open a new tab]\n$ cd project\n$ start console\n[Open a new tab]\n$ cd project\n$ vim .\n</code></pre>\n<h3>Without Tmux</h3>\n<ol>\n<li>Individually open each tab, and run each command in sequence</li>\n</ol>\n<h3>With Tmux</h3>\n<ol>\n<li>Write a tmux script that opens all the tabs, and executes commands in sequence</li>\n<li>Meanwhile, go and talk with a buddy about how awesome Bob Dylan is.</li>\n</ol>\n<img class=\"img-responsive media-object\" src='/images/posts/tmux_scripted.gif' alt=\"miniature-article\">\n<h1>What to do</h1>\n<p>This article intentionally does not show how to use tmux.\nThat topic is a bit too long and confusing to condense into a single post.\nAs such, here is a high level guide of the next steps that can be taken to learn tmux.</p>\n<p><strong>get tmux</strong> before doing anything else.\nInstall it with a package manager: <code>sudo [yum|apt-get|brew] install tmux]</code></p>\n<p>Then choose one or all of these ways to learn:</p>\n<ol>\n<li><a href=\"https://www.bitcast.io/b/tmux-tunes-week-1\">My videos</a> which will let you start using tmux immediately, and gradually show more features as time goes on.</li>\n<li>Purchase <a href=\"http://www.amazon.com/gp/product/B00A4I3ZVY/ref=as_li_ss_tl?ie=UTF8&#x26;camp=1789&#x26;creative=390957&#x26;creativeASIN=B00A4I3ZVY&#x26;linkCode=as2&#x26;tag=richsonicom-20\">this book</a> that takes about two weeks to read / get up to speed ( this is how I learned tmux )</li>\n<li>Reading <code>$ man tmux</code> will get experienced unix users up to speed for free</li>\n</ol>\n<h1>Further Reading</h1>\n<ol>\n<li><a href=\"http://undeadly.org/cgi?action=article&#x26;sid=20090712190402\">Interview with the author of tmux</a></li>\n<li>Movies:  <a href=\"https://www.bitcast.io/b/tmux-tunes-week-1\">tmux Tunes by codriffs</a></li>\n<li>Book:  <a href=\"http://www.amazon.com/gp/product/B00A4I3ZVY/ref=as_li_ss_tl?ie=UTF8&#x26;camp=1789&#x26;creative=390957&#x26;creativeASIN=B00A4I3ZVY&#x26;linkCode=as2&#x26;tag=richsonicom-20\">tmux: Productive Mouse-Free Development</a></li>\n</ol>",frontmatter:{title:"Why You May Be Missing Out If You Dont Use TMUX"},fields:{date:"2014-02-04"}}},pathContext:{url:"/posts/2014-02-04-why-you-may-be-missing-out-if-you-dont-use-tmux/"}}}});
//# sourceMappingURL=path---posts-2014-02-04-why-you-may-be-missing-out-if-you-dont-use-tmux-9af646afdd5eb9d9bc58.js.map