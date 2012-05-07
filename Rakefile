require 'rubygems'
require 'rake'

desc "Compile CoffeeScript, SCSS, and all of the above."
task :compile do
  sh "coffee -o js/compiled -c js/coffeescript/*.coffee"
  sh "sass css/scss/base.scss css/compiled/base.css --scss"
  sh "sass css/scss/iphone.scss css/compiled/iphone.css --scss"
end