source "https://rubygems.org"

gem "jekyll", "~> 4.3.2"

group :jekyll_plugins do
  gem "jekyll-asciidoc"
  gem "asciidoctor"
  gem "asciidoctor-html5s"
  gem "jekyll-feed", "~> 0.12"
end

platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end

gem "wdm", "~> 0.1.1", :platforms => [:mingw, :x64_mingw, :mswin]

gem "http_parser.rb", "~> 0.6.0", :platforms => [:jruby]

# For Asciidoc templating
gem "slim", "~> 5.2"
gem 'thread_safe'

# For syntax highlighting
gem 'rouge'
