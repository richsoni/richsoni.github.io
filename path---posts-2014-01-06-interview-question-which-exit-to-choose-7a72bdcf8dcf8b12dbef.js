webpackJsonp([59033191583830],{753:function(e,o){e.exports={data:{markdownRemark:{html:"<h1>The Problem</h1>\n<p>Here's an interesting interview question I thought of on my way home from a party recently.</p>\n<ol>\n<li>You are parked at some starting point <code>SP</code> which is between 2 exits <code>E1 and E2</code></li>\n<li>We were at a cross road with Road 1 <code>R1</code> at our <code>SP</code></li>\n<li>Our starting point is set between exit 1 and exit 2 on the highway <code>E1 and E2</code> of road 2 <code>R2</code></li>\n<li>To reach our destination we must reach exit 4 <code>E4</code> which is past <code>E2</code></li>\n<li>Speed limit of <code>R1</code> = 25, <code>R2</code> = 50 (double)</li>\n</ol>\n<h3>??? When will going to E1 be faster ???</h3>\n<p>From <code>SP</code> at which distance is it faster to go back to <code>E1</code> instead of going forward to <code>E2</code>.</p>\n<h1>The Solution</h1>\n<p><button onclick=\"document.getElementById('answer').style.display = 'block'\"> Show Answer </button></p>\n<div id='answer' style='display:none'>\n  <i>If `D2` is > 1/4 of `D3` then ``E1`` is faster.</i>\n  <img class='img-responsive' src='/images/posts/road.png'/>\n<h3>Note that:</h3>\n<ol>\n<li><code>D1 = D3 - D2</code> (i.e. D2 is always a shorter distance)</li>\n<li><code>D2</code> and <code>D1</code> both have the same speed (<code>R1</code>), <code>D3</code> is double ( or .5 the distance )</li>\n<li>Since <code>R2</code> is 2x the speed of <code>R1</code> it will take half as long to travel</li>\n<li>If <code>S1</code> is closer than half way then <code>D1</code> will always be faster than <code>D3</code> alone.  Meaning the faster route is determined before the car arrives at <code>E1</code></li>\n<li>In the same vein, for <code>E1</code> to be faster the car needs to arrive before it would have reached <code>1/2 * D3</code>)</li>\n<li>Since they travel at the same speed if <code>S1</code> if 1/4 of the way between <code>E1</code> and <code>E2</code>, and it would reach <code>E1</code> at the same time that it would reach <code>1/2 * D3</code> (i.e. <code>&#x3C; 1/4 of D3</code>)</li>\n</ol>\n</div>\n<h1>In Conclusion</h1>\n<p>Its about how the interviewee answers the question, not the answer they give.<br>\nSo, take note of the interviewees thought process while solving the problem.  </p>\n<p><strong>Remember:</strong> The question is better when you word it like I did.<br>\nDo not say <em>Which route is faster</em>.<br>\nThat is not the question, it is <em>When is going backward faster</em>.<br>\nThis will force the interviewee to use a logical thought instead of a geometrical.</p>",frontmatter:{title:"Interview Question: Which Exit To Choose"},fields:{date:"2014-01-06"}}},pathContext:{url:"/posts/2014-01-06-interview-question-which-exit-to-choose/"}}}});
//# sourceMappingURL=path---posts-2014-01-06-interview-question-which-exit-to-choose-7a72bdcf8dcf8b12dbef.js.map