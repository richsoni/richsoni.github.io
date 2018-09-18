webpackJsonp([0xfaad817677f],{562:function(e,t){e.exports={data:{markdownRemark:{html:'<h1>Goodbye Comfort</h1>\n<blockquote>\n<p>"Playfully doing something difficult, whether useful or not, that is hacking"\n~ Richard Stallman</p>\n</blockquote>\n<p>Leaving your comfort zone is a muscle that grows with training.\nThe effort is worthwhile as there are many advantages when comfort is abandoned.\n<a href="http://lifehacker.com/the-science-of-breaking-out-of-your-comfort-zone-and-w-656426705">This lifehacker article</a> outlines a handful of benefits attributed to pushing your comfort level:</p>\n<ol>\n<li><em>"You\'ll be more productive"</em></li>\n<li><em>"You\'ll have an easier time dealing with new and unexpected changes"</em></li>\n<li><em>"You\'ll find it easier to push your boundaries in the future"</em></li>\n<li><em>"You\'ll find it easier to brainstorm and harness your creativity"</em></li>\n</ol>\n<p>I keep my eyes open for opportunities to step out of my comfort zone.\nWhen exposed to the idea of changing keyboard layouts, a signal flashed in my mind.\n<em>As a programmer, typing occupies a large portion of my day.</em>\nAs such, learning a new layout costs virtually no time.</p>\n<p>I began learning Dvorak in late 2015.\n<em>I expected comfort and speed to increase, but the speed increase was negligable.</em>\nDespite its failure to improve speed, it still was a great exercise in learning a new skill, and obtaining a new perspective.</p>\n<p>This article shares the insights gained during the exercise.</p>\n<h1>Choosing The Right Thing To Learn</h1>\n<p>Dvorak is not the only competition to qwerty.\nWhen I started to read about the layout, I learned that there are other keyboard layouts.\nEach claims its own advantage over the others, and I found myself in a loop of decidophobia\nI was considering the following layouts:</p>\n<ol>\n<li>colmark</li>\n<li>dvorak</li>\n<li>programmers dvorak</li>\n<li>workman</li>\n<li>qwerty</li>\n</ol>\n<p>This widget compares each of these layouts.</p>\n<iframe height=230 width=\'100%\' src=\'/misc/keyboardLayout.html\'></iframe>\n<h2>Quantifiers</h2>\n<p>To get clarity, I quantified my decision.\nI broke out each layout into the following elements:</p>\n<ul>\n<li><a href="#Availability">Availability</a></li>\n<li><a href="#Ergonomicality">Ergonomicality</a></li>\n<li><a href="#Familiarity">Familiarity</a></li>\n<li><a href="#Usability">Usability</a></li>\n</ul>\n<h3>Availability</h3>\n<p>Some layouts are easier to enable than others.\nAs an example, <em>Dvorak and Qwerty are both ANSI certified.</em>\nThis means switching to the layout typically takes about 30 seconds.\nOther layouts prove more difficult.\nHowever, <em>more exotic layouts claim more efficiency and comfort.</em></p>\n<h3>Ergonomicality</h3>\n<p>A layout that is more ergonomic provides <em>improved comfort, efficiency, and speed</em>.\nIt also <em>reduces the risk of typing related diseases</em> like carpel tunnel.\nMost layouts claim to be more ergonomic than qwerty.</p>\n<p>As an example, Programmer\'s Dvorak tends to be the most ergonomic layout for developers.\nHowever its availability is more rare than other alternatives, and it is one of the least familiar when transitioning from qwerty.</p>\n<h3>Familiarity</h3>\n<p>Most people are qwerty users.\n<em>Some layouts share more keys with qwerty than others</em>.\nThis makes the layout more familiar, and easier to learn.\n<em>Since qwerty is the least ergonomic, many of these layouts compromise ergonomicality for familiarity</em>.</p>\n<p>I strongly considered colemark before settling on dvorak due to its familiarity.\nColemark differs in 17 keys from qwerty while dvorak differs in 33 keys.\nI still think Colemark is the most practical solution for most users.\nHowever, in my circumstance, had low usability.</p>\n<h3>Usability</h3>\n<p>Consider the applications you use most frequently.\nIn my case, its the vim text editor.\nThe Colemark layout is not as comfortable for me in the vim text editor, so I crossed it off my list despite its appeal.</p>\n<p><em>Just because a layout is generally more ergonomic does not mean it suits your specific needs.</em></p>\n<h2>Analysis</h2>\n<p>Here is a table, of my evaluations of each layout:</p>\n<table>\n<thead>\n<tr>\n<th></th>\n<th>windows</th>\n<th>osx</th>\n<th>linux</th>\n<th>ergonomicality</th>\n<th>different keys from qwerty</th>\n<th>vim comfort</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>colmark</td>\n<td>install</td>\n<td>yes</td>\n<td>yes</td>\n<td>4</td>\n<td>17</td>\n<td>4</td>\n</tr>\n<tr>\n<td>dvorak</td>\n<td>yes</td>\n<td>yes</td>\n<td>yes</td>\n<td>2</td>\n<td>33</td>\n<td>3</td>\n</tr>\n<tr>\n<td>programmers dvorak</td>\n<td>install</td>\n<td>install</td>\n<td>yes</td>\n<td>1</td>\n<td>44</td>\n<td>2</td>\n</tr>\n<tr>\n<td>workman</td>\n<td>install</td>\n<td>install</td>\n<td>yes</td>\n<td>3</td>\n<td>21</td>\n<td>5</td>\n</tr>\n<tr>\n<td>qwerty</td>\n<td>yes</td>\n<td>yes</td>\n<td>yes</td>\n<td>5</td>\n<td>0</td>\n<td>1</td>\n</tr>\n</tbody>\n</table>\n<p>After considering these points, <em>I decided that dvorak was the best choice</em>.</p>\n<h1>Learning</h1>\n<h2>Stages</h2>\n<p>In my experience, learning a new layout cascaded through the following stages:</p>\n<ul>\n<li><a href="#Dabbling">Dabbling</a></li>\n<li><a href="#Commitment">Commitment</a></li>\n<li><a href="#Regret">Regret</a></li>\n<li><a href="#Appreciation">Appreciation</a></li>\n<li><a href="#ComplacencyFinalThoughts">Complacency</a></li>\n</ul>\n<p>Each stage had its own challenges and rewards.\nThese can be seen in the data that I logged during the process.</p>\n<h2>Data Collection</h2>\n<p>I wanted my experiment to answer 4 questions:</p>\n<ol>\n<li>Is dvorak better than qwerty?</li>\n<li>How long does it take to learn dvorak?</li>\n<li>Does learning dvorak hinder already learned layouts e.g. qwerty?</li>\n<li>Can I apply these lessons to learning in the future?</li>\n</ol>\n<p>I collected 4 data points to answer these questions:</p>\n<ol>\n<li>qwerty speed</li>\n<li>qwerty error</li>\n<li>dvorak speed</li>\n<li>dvorak error</li>\n</ol>\n<p>Here is the result:</p>\n<div class=\'col-xs-6 image inline\' style=\'float:right; margin:auto auto\'>\n  <img class=\'img-responsive\'  src=\'/blog/images/typing_error.png\' />\n  <div class=\'caption\'>Typing Speed Error</div>\n</div>\n<div class=\'col-xs-6 image inline\' style=\'float:right; margin:auto auto\'>\n  <img class=\'img-responsive\'  src=\'/blog/images/typing_progress.png\' />\n  <div class=\'caption\'>Typing Speed Progress</div>\n</div>\n<p>Reading the graph shows many interesting things.\nThe next sections outline what I found at each stage.</p>\n<h2>Dabbling</h2>\n<p>Taking the first steps in learning the layout was interesting.\nIt brought new intrigue to old tasks that I performed on a daily basis.\nTyping words was extremely difficult, and nearly impossible.</p>\n<p>Here is a generalized version of the tasks I set out to accomplish during this stage:</p>\n<ol>\n<li>decide how you can get your feet wet</li>\n<li>find quick wins</li>\n<li>gain some leverage</li>\n<li>prepare to commit</li>\n</ol>\n<p>These mapped out to these in learning the layout:</p>\n<ol>\n<li>add the layout</li>\n<li>add a shortcut to toggle between qwerty and the new layout</li>\n<li>download a copy of the layout</li>\n<li>evaluate shared keys</li>\n<li>learn your computers password</li>\n<li>learn commonly used system shortcuts</li>\n<li>memorize the rest of the layout</li>\n</ol>\n<p>Here are some special considerations from this list.</p>\n<h3>Freebies</h3>\n<p>Cross examine the layout with qwerty, and remember which keys are shared between both layouts.\nConsidering only the alphabet keys: dvorak shares only 2 and colemark shares 9.\nThese keys require no memorization.</p>\n<h3>Dont Lock The Door</h3>\n<p>Before learning anything else, <em>memorize your computer password in the new layout</em>.\nThis will save aggrevation, and time.\nIt is annoying to get locked out in the alternate layout without knowing the password.\nAlso, it will be the thing you type most frequently, especially if you frequestly use sudo.</p>\n<h3>Control The Ship</h3>\n<p>At this point actually writing words in an alternate layout is hard.\n<em>Let yourself fall back to write code, and prose</em>.\nHave no shame in switching back to qwerty at any point.\nEase into adding more keys to your repertoire over the first few days.</p>\n<p>The quickest, and easiest way to expand your vocabulary is to learn frequently used shortcuts:</p>\n<ol>\n<li>ctrl-c</li>\n<li>ctrl-v</li>\n<li>ctrl-x</li>\n<li>ctrl-w</li>\n<li>ctrl-n</li>\n<li>ctrl-q</li>\n<li>ctrl-t</li>\n</ol>\n<p>All of this should only take a few days.\n<em>At this point you should know about half of the keyboard</em>.\nBefore committing, you need to learn the whole thing.</p>\n<h2>Commitment</h2>\n<p>Commit and vow to only switch back in emergencies.\nFocus on training muscle memory in the new layout.\nAfter several weeks, it will become second nature.\n<em>Accept that you will be a slow typer during the beginning of this stage</em>, but toward the end you may even be quicker than you where at qwerty.</p>\n<p>I found it essential to modify my keyboard during this stage.\nYou are committing to avoid switching back to qwerty.\nHaving <em>a visual aid on the keyboard will immensely help</em> in the beginning.\nAt first, I put hand made stickers on a cheap keyboard which I could cheat with.\nLater, I actually re-purposed the keys on my laptop to be in dvorak.</p>\n<p>During this time, I found typing training to be of great use.\nA few minutes on a practice site could work out kinks around certain key areas.\nI mostly used these:</p>\n<h2>Regret</h2>\n<p>During the previous stage, my progress rapidly increased, and it was exciting and gratifying.\nAt some point when <em>the progress plateaued</em>, I entered a stage of regret.\nMy progress was stuck at a speed less than my original qwerty speed.</p>\n<p>I tried to switch back to qwerty, but my speed was too slow.\nI regretted the decision I made to choose a new layout.\nI now liked dvorak better, and had invested a lot of effort into learning it.\nBut, <em>it did not pay off</em> yet.</p>\n<p>I got out of this rut by <em>focusing on minimizing error instead of increasing speed</em>.\nThis increased my speed and broke the plateau.</p>\n<h2>Appreciation</h2>\n<p>At a certain point I <em>reached my initial qwerty speed in dvorak</em>.\nThis was a very exciting time.\nNow instead of regretting my decision, I appreciated the things that initially attracted me to the layout: mainly the comfort.</p>\n<p>I could now continue to focus on minimizing error to get minor speed increases over time.</p>\n<h2>Complacency / Final Thoughts</h2>\n<p>At the point I am at now, I am complacent with my typing.\nI am <em>~20wpm faster</em> than I was with qwerty, and have a great <em>appreciation for the comfort</em> of the layout.\nI do not see myself switching back at this time.</p>\n<p>When using other peoples computers, I struggle a bit, but it is not a huge issue.\nIf it becomes one, I simple add the layout quickly and continue to work.</p>\n<p>I mentioned in the beginning the benefits of stepping out of your comfort zone.\nWhile writing this post I had an interesting revelation: <em>after a year, dvorak is my comfort zone</em>.</p>\n<p>Now, I have been switching my layout every few days.\nThis helps keep things interesting.</p>\n<h1>Resources</h1>',frontmatter:{title:"Faster Fingertips: Changing Your Keyboard Layout and Learning Techniques"},fields:{date:"2015-05-04"}}},pathContext:{slug:"/posts/2015-05-04-dvorak/"}}}});
//# sourceMappingURL=path---posts-2015-05-04-dvorak-ab3ddab1001e75cf3279.js.map