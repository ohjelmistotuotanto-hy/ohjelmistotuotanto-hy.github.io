# Translates Finnish #anchors in links of the English pages (en/, _includes/en/)
# to the English heading ids. The English and Finnish versions of a page have
# the same headings in the same order, so ids are mapped by position.
# Build the site first. Usage: ruby scripts/fix_en_anchors.rb [_site]

require "cgi"

site = ARGV[0] || "_site"

def heading_ids(file)
  html = File.read(file, encoding: "UTF-8")
  html.scan(/<h[1-6][^>]*\sid="([^"]+)"/).flatten.map { |id| CGI.unescapeHTML(id) }
end

def built_file(site, url)
  ["#{site}#{url}index.html", "#{site}#{url.chomp('/')}.html"].find { |f| File.exist?(f) }
end

# url of the Finnish page (e.g. "/osa1/") => { finnish id => english id }
maps = {}
Dir.glob("en/**/*.md").each do |md|
  permalink = File.read(md, encoding: "UTF-8")[/^permalink: *(\S+)/, 1] or next
  fi_url = permalink.sub(%r{\A/en}, "")
  en_file = built_file(site, permalink)
  fi_file = built_file(site, fi_url)
  next unless en_file && fi_file
  fi_ids = heading_ids(fi_file)
  en_ids = heading_ids(en_file)
  if fi_ids.size != en_ids.size
    warn "#{md}: #{fi_ids.size} headings in Finnish, #{en_ids.size} in English, skipped"
    next
  end
  maps[fi_url] = fi_ids.zip(en_ids).to_h
  maps[fi_url.chomp("/")] = maps[fi_url]
end

all = maps.values.reduce({}) { |acc, m| m.merge(acc) }
changed = 0

(Dir.glob("en/**/*.md") + Dir.glob("_includes/en/*.md")).each do |md|
  text = File.read(md, encoding: "UTF-8")
  own = text[/^permalink: *\/en(\S+)/, 1]
  new_text = text.gsub(%r{(\]\(|href=["'])(/en(/[^)"'#\s]*)?)?#([^)"'\s]+)}) do
    prefix, link_path, fi_path, anchor = $1, $2, $3, $4
    page = link_path ? (fi_path || "/") : own
    map = (page && (maps[page] || maps[page.chomp("/")])) || (link_path ? {} : all)
    decoded = CGI.unescape(anchor)
    target = map[decoded]
    if target && target != decoded
      changed += 1
      "#{prefix}#{link_path}##{target}"
    else
      $&
    end
  end
  File.write(md, new_text) if new_text != text
end

puts "#{changed} anchors translated"
