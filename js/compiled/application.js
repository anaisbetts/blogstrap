(function() {

  $(document).ready(function() {
    $('#github').mouseover(function() {
      return $('.alt-text').text("GitHub");
    });
    $('#github').mouseout(function() {
      return $('.alt-text').html("&nbsp;");
    });
    $('#twitter').mouseover(function() {
      return $('.alt-text').text("Twitter");
    });
    $('#twitter').mouseout(function() {
      return $('.alt-text').html("&nbsp;");
    });
    $('#rss').mouseover(function() {
      return $('.alt-text').text("RSS");
    });
    return $('#rss').mouseout(function() {
      return $('.alt-text').html("&nbsp;");
    });
  });

}).call(this);
