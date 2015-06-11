require 'faker'

HIPSTER_WORDS = [
    "etsy", "twee", "hoodie", "Banksy", "retro", "synth", "single-origin coffee",
    "art", "party", "cliche", "artisan", "Williamsburg", "squid",
    "helvetica", "keytar", "American Apparel", "craft beer", "food truck",
    "you probably haven't heard of them", "cardigan", "aesthetic", "raw denim",
    "sartorial", "gentrify", "lomo", "vice", "Pitchfork", "Austin",
    "sustainable", "salvia", "organic", "thundercats", "PBR", "iPhone",
    "lo-fi", "skateboard", "jean shorts", "next level", "beard", "tattooed",
    "trust fund", "Four Loko", "master cleanse", "ethical", "high life",
    "wolf", "moon", "fanny pack", "Rerry Richardson", "8-bit", "Carles",
    "Shoreditch", "seitan", "freegan", "keffiyeh", "biodiesel", "quinoa",
    "farm-to-table", "fixie", "viral", "chambray", "scenester", "leggings",
    "readymade", "Brooklyn", "Wayfarers", "Marfa", "put a bird on it",
    "dreamcatcher", "photo booth", "tofu", "mlkshk", "vegan", "vinyl", "DIY",
    "banh mi", "bicycle rights", "before they sold out", "gluten-free", "yr",
    "butcher", "blog", "whatever", "+1", "Cosby Sweater", "VHS", "messenger bag",
    "cred", "locavore", "mustache", "tumblr", "Portland", "mixtape", "fap",
    "letterpress", "McSweeney's", "stumptown", "brunch", "Wes Anderson",
    "irony", "echo park"
  ]

def word
  HIPSTER_WORDS.shuffle.first
end

def words(num = 3)
  HIPSTER_WORDS.shuffle.first(20).join(" ")
end

20.times do
  Post.create(title: word, body: words, author: Faker::Name.name)
end
