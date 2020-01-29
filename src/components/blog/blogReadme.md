##  blog as a page 
* blog.js maps through all blogs and calls "blogById for each" with ID
* blogById handles clicks. Calls 'blog query' for each instance providing ID


Single blog post on landing page involves
* get blog
* getblogdate
* getblogtitle

blog page
main page /blog.js
* calls blogbyid(id) // handles clicks and formating
* * calls blog query(id) // handles query / map
