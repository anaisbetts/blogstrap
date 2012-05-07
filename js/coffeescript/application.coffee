#
# It's JavaScript for this blog.
#

$(document).ready () ->
  $('#github').mouseover () ->
    $('.alt-text').text("GitHub")

  $('#github').mouseout () ->
    $('.alt-text').html("&nbsp;")

  $('#twitter').mouseover () ->
    $('.alt-text').text("Twitter")

  $('#twitter').mouseout () ->
    $('.alt-text').html("&nbsp;")

  $('#rss').mouseover () ->
    $('.alt-text').text("RSS")

  $('#rss').mouseout () ->
    $('.alt-text').html("&nbsp;")
