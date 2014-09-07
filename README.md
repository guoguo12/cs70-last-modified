cs70-last-modified
==================

Script for adding last-modified information to the [CS 70 homepage](https://inst.eecs.berkeley.edu/~cs70/fa14/).

* **add-last-modified.min.js** is the production/minified version.
* **add-last-modified.js** is the development/unminified version.

Instructions
------------

# Server-side (for the instructors)

Copy the contents of [add-last-modified.min.js](https://github.com/guoguo12/cs70-last-modified/blob/master/add-last-modified.min.js) into the CS 70 homepage HTML file.

# Client-side (to try out the script)

Navigate to the CS 70 homepage, type `javascript:` into the URL bar, then paste the following and press Enter:

```var script=document.createElement("script");script.src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js",script.type="text/javascript",document.getElementsByTagName("head")[0].appendChild(script);```

Then, type `javascript:` into the URL bar (again), paste the following, and press Enter:

```$.get("notes",function(e){for(var n=[],t=[],a=e.split("\n"),r=0;r<a.length;r++){var o=a[r],p=new RegExp('.pdf">(.*?)</a>').exec(o);if(p){var f=p[1],i=new RegExp('align="right">(.*?)  </td>').exec(o);n.push(f),t.push(i[1])}}for(var r=0;r<n.length;r++){var f=n[r],s=t[r],g=$('a[href="notes/'+f);g&&g.append(' <b style="color: #F37;font-size:12px">Last Modified '+s+"</b>")}});```

Credits
-------
