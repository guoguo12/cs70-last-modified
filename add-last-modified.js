<script src="//ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
<script>
$.get('notes', function(data) {
  // Get names and last-modified dates for files
  var names = [];
  var dates = [];
  var lines = data.split('\n');
  for (var i = 0; i < lines.length; i++) {
    var line = lines[i];
    var nameMatch = new RegExp('.pdf">(.*?)</a>').exec(line);
    if (nameMatch) {
      var name = nameMatch[1];
      var dateMatch = new RegExp('align="right">(.*?)  </td>').exec(line);
      names.push(name);
      dates.push(dateMatch[1]);
    }
  }
  // Add information to page
  for (var i = 0; i < names.length; i++) {
    var name = names[i];
    var date = dates[i];
    var fileLine = $('a[href="notes/' + name + '"]');
    if (fileLine) {
      if (new Date().getTime() - Date.parse(date) < 7 * 24 * 60 * 60 * 1000) {
        fileLine.parent().append('<br><b style="padding-left:10px;color:#F37;font-size:11px">Last Modified: ' + date + '</b>');
      } else {
        fileLine.parent().append('<br><b style="padding-left:10px;color:#555;font-size:11px">Last Modified: ' + date + '</b>');
      }
    }
  }
});
</script>