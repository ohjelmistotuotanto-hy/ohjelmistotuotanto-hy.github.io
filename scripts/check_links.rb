# Checks that internal links in the built site point to existing pages and
# heading ids. Usage: ruby scripts/check_links.rb [_site]
# Exits with status 1 if broken links are found.

require "cgi"
require "set"

site = ARGV[0] || "_site"
pages = {}

Dir.glob("#{site}/**/*.html").each do |file|
  url = "/" + file.delete_prefix("#{site}/")
  url = url.delete_suffix("index.html")
  pages[url] = File.read(file, encoding: "UTF-8")
end

ids = pages.transform_values do |html|
  html.scan(/\sid=["']([^"']+)["']/).flatten.map { |id| CGI.unescapeHTML(id) }.to_set
end

def resolve(pages, path)
  [path, path.end_with?("/") ? nil : "#{path}/", path.sub(/\.html\z/, "") + "/", "#{path.chomp("/")}.html"]
    .compact.find { |p| pages.key?(p) }
end

broken = []
pages.each do |url, html|
  html.scan(/href=["']([^"']+)["']/).flatten.each do |href|
    href = CGI.unescapeHTML(href)
    next if href =~ %r{\A([a-z]+:|//)}i
    path, anchor = href.split("#", 2)
    path = url if path.nil? || path.empty?
    next unless path.start_with?("/")
    next if path =~ /\.(png|jpe?g|gif|svg|pdf|xml|json|css|js|ico|zip|txt)\z/i
    target = resolve(pages, CGI.unescape(path))
    if target.nil?
      broken << [url, href, "no such page"]
    elsif anchor && !anchor.empty? && !ids[target].include?(CGI.unescape(anchor))
      broken << [url, href, "no such anchor"]
    end
  end
end

broken.uniq.sort.each { |from, href, why| puts "#{from}: #{href} (#{why})" }
puts "#{broken.uniq.size} broken internal links"
exit(broken.empty? ? 0 : 1)
