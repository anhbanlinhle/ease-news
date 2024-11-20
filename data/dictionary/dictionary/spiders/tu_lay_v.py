import scrapy


class TuLaySpider(scrapy.Spider):
    name = "tu_lay_v"
    allowed_domains = ["loigiaihay.com"]
    start_urls = [
      "https://loigiaihay.com/tu-lay-co-am-dau-la-v-e37595.html"
    ]

    def parse(self, response):
        words_links = set(response.css('a.n-exercise ::attr(href)').getall())

        for word_link in words_links:
            yield response.follow(word_link, callback=self.parse_word)

    def parse_word(self, response):

        def trim_whitespace(word):
            return ' '.join(word.strip().split())

        word = trim_whitespace(response.css('h1 a ::text').get()[:-1])
        meta_data = response.css('div#box-content p')
        type = meta_data[0].css('::text').get()
        semantic = ''.join(meta_data[2].css('::text').getall())
        examples_raw = response.css('div#box-content li')

        examples = []
        for example in examples_raw:
            examples.append(''.join(example.css('::text').getall()))

        yield {
            'word': word,
            'type': type,
            'semantic': semantic,
            'examples': examples
        }
