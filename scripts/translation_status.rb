# Lists English translations that are behind their Finnish source, and
# Finnish pages and includes that have no translation.
# Usage: ruby scripts/translation_status.rb

def git(*args)
  IO.popen(["git", *args], &:read).strip
end

translations = Dir.glob("en/**/*.md") + Dir.glob("_includes/en/*.md")
translated_sources = []

puts "Outdated translations:"
translations.sort.each do |file|
  text = File.read(file, encoding: "UTF-8")
  source = text[/^source: *(\S+)/, 1] || text[/\{% comment %\}source: *(\S+)/, 1]
  sha = text[/source_commit: *([0-9a-f]+)/, 1]
  next puts("  #{file}: no source/source_commit") unless source && sha
  translated_sources << source
  commits = git("log", "--oneline", "#{sha}..HEAD", "--", source)
  dirty = !git("status", "--porcelain", "--", source).empty?
  next if commits.empty? && !dirty
  n = commits.lines.size
  puts "  #{file} <- #{source}: #{n} commit(s) since #{sha}#{dirty ? ', uncommitted changes' : ''}"
end

puts "Untranslated:"
(Dir.glob("*.md") + Dir.glob("_includes/*.md")).sort.each do |file|
  next if translated_sources.include?(file)
  next if %w[README.md CLAUDE.md huomiot.md].include?(file)
  puts "  #{file}"
end
