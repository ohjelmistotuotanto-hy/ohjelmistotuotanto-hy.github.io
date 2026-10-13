# The proxy serves the site under a base path (e.g. /ohtu) and strips it
# before passing requests on, so root-absolute URLs in the built site
# (href="/osa1", src="/images/...", search.json urls) get the base path prefixed.

site, base = ARGV

Dir.glob("#{site}/**/*.{html,xml,json,css}").each do |file|
  text = File.read(file, encoding: "UTF-8")
  text = text.gsub(%r{((?:href|src|action|data-index)=\\?["'])/(?!/)}) { "#{$1}#{base}/" }
  text = text.gsub(%r{("url": ")/(?!/)}) { "#{$1}#{base}/" }
  text = text.gsub(%r{(url\(["']?)/(?!/)}) { "#{$1}#{base}/" }
  File.write(file, text)
end
