%w{open-uri nokogiri json}.each {|gem| require gem}


class FilmHtml
  
  attr_accessor :uuid, :title, :year, :index, :synopsis
  
  def initialize(attrs = {})
    self.uuid = attrs[:uuid]
    self.title = attrs[:title]
    self.year = attrs[:year]
    self.index = attrs[:index]
    return self
  end
  

  def html
    @html ||= Nokogiri::HTML(open("films/#{self.index}.html"))  
  end
  
  def credits_dom
    @credits_dom ||= (html/'table.infobox')
  end
  
  def credits_cells
    (credits_dom/'th[@scope="row"]').map {|credit| 
      credit.text.strip
    }
  end
  
  def people_cells
    people = (credits_dom/'td').map {|person| person.text.strip}
    people.shift
    people
  end
  
  def description_cells
    (html/'div#mw-content-text/p').map {|paragraph| paragraph.text.gsub(/\[.\]/, '')}
  end
  
  def synopsis
    self.description_cells[0]
  end
  
  def description
    self.description_cells
  end
  
  def credits
    (0...credits_cells.size).map do |index|
      {:credit => credits_cells[index], :value => people_cells[index]}
    end
  end
  
  def image_urls
    (html/'a.image/img').map {|img| 'http:' + (img["src"])}
  end
  
  def image
    begin    
      `curl #{image_urls[0]} > ../html/img/files/#{self.uuid}`
    rescue Exception => e
      nil
    end
  end
  
  def to_hash
    {
      :uuid => self.uuid,
      :title => self.title,
      :year => self.year,
      :image => image,
      :credits => credits,
      :synopsis => synopsis
    }
  end
  
end


films = [
    	{:uuid => "5ABC",  :title => "Alphaville",             :year => "1965", :index => 0},
    	{:uuid => "4E32",  :title => "Goodfellas",             :year => "1990", :index => 1},
    	{:uuid => "7780",  :title => "Laura",                  :year => "1944", :index => 2},
    	{:uuid => "F140",  :title => "Le Samourai",            :year => "1967", :index => 3},
    	{:uuid => "11A4",  :title => "Mildred Pierce",         :year => "1945", :index => 4},
    	{:uuid => "F001",  :title => "Miller's Crossing",      :year => "1990", :index => 5},
    	{:uuid => "339A",  :title => "Murder by Contract",     :year => "1958", :index => 6},
    	{:uuid => "2522",  :title => "Pickup On South Street", :year => "1953", :index => 7},
    	{:uuid => "569C",  :title => "Point Blank",            :year => "1967", :index => 8},
    	{:uuid => "D44E",  :title => "The Big Sleep",          :year => "1946", :index => 9}
]
puts "["

films.each do |film| 
  html = FilmHtml.new(film)
    
  puts html.to_hash.to_json
  puts ","
end

puts "]"

