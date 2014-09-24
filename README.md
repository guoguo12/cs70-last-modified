cs70-last-modified
==================

Script for adding last-modified information to the [CS 70 homepage](https://inst.eecs.berkeley.edu/~cs70/fa14/).
**This is a work in progress!**

* **add-last-modified.min.js** is the production/minified version.
* **add-last-modified.js** is the development/unminified version.

Instructions
------------

### Server-side (for the instructors)

This is for if the CS 70 instructors want to add this feature for all viewers.

Copy the contents of [add-last-modified.min.js](https://github.com/guoguo12/cs70-last-modified/blob/master/add-last-modified.min.js) into the CS 70 homepage HTML file.

### Client-side (to try out the script)

Navigate to the CS 70 homepage, type `javascript:` into the URL bar, then paste the following and press Enter:

```
var script=document.createElement("script");script.src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js",script.type="text/javascript",document.getElementsByTagName("head")[0].appendChild(script);
```

Then, type `javascript:` into the URL bar (again), paste the following, and press Enter:

```
$.get("notes",function(e){for(var t=[],a=[],n=e.split("\n"),p=0;p<n.length;p++){var r=n[p],i=new RegExp('.pdf">(.*?)</a>').exec(r);if(i){var o=i[1],f=new RegExp('align="right">(.*?)  </td>').exec(r);t.push(o),a.push(f[1])}}for(var p=0;p<t.length;p++){var o=t[p],s=a[p],d=$('a[href="notes/'+o+'"]');d&&d.parent().append((new Date).getTime()-Date.parse(s)<6048e5?'<br><b style="padding-left:10px;color:#F37;font-size:11px">Last Modified: '+s+"</b>":'<br><b style="padding-left:10px;color:#555;font-size:11px">Last Modified: '+s+"</b>")}});
```

The last-modified information should now be visible in the "Notes" section!

Screenshot
-------

Here's what the result should look like:

![Screenshot](https://i.imgur.com/obbh8RR.png)

Development
-------

Feel free to contribute and send pull requests.

Script doesn't work? Email me at allenguo [at] berkeley.edu or create a new issue.

Credits and license
-------

Built using [jQuery](https://jquery.com/).

Created by Allen Guo. Released under the [MIT License](http://opensource.org/licenses/MIT).
