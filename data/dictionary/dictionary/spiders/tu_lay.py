import scrapy


class TuLaySpider(scrapy.Spider):
    name = "tu_lay"
    allowed_domains = ["loigiaihay.com"]
    start_urls = [
        "https://loigiaihay.com/tu-lay-co-am-dau-la-a-a-a-e37576.html",
        "https://loigiaihay.com/tu-lay-co-am-dau-la-b-e37577.html",
        "https://loigiaihay.com/tu-lay-co-am-dau-la-c-e37578.html",
        "https://loigiaihay.com/tu-lay-co-am-dau-la-d-d-e37579.html",
        "https://loigiaihay.com/tu-lay-co-am-dau-la-e-e-e37580.html",
        "https://loigiaihay.com/tu-lay-co-am-dau-la-g-e37581.html",
        "https://loigiaihay.com/tu-lay-co-am-dau-la-h-e37582.html",
        "https://loigiaihay.com/tu-lay-co-am-dau-la-i-e37583.html",
        "https://loigiaihay.com/tu-lay-co-am-dau-la-k-e37584.html",
        "https://loigiaihay.com/tu-lay-co-am-dau-la-l-e37585.html",
        "https://loigiaihay.com/tu-lay-co-am-dau-la-m-e37586.html",
        "https://loigiaihay.com/tu-lay-co-am-dau-la-n-e37587.html",
        "https://loigiaihay.com/tu-lay-co-am-dau-la-o-o-o-e37588.html",
        "https://loigiaihay.com/tu-lay-co-am-dau-la-p-e37589.html",
        "https://loigiaihay.com/tu-lay-co-am-dau-la-q-e37590.html",
        "https://loigiaihay.com/tu-lay-co-am-dau-la-r-e37591.html",
        "https://loigiaihay.com/tu-lay-co-am-dau-la-s-e37592.html",
        "https://loigiaihay.com/tu-lay-co-am-dau-la-t-e37593.html",
        "https://loigiaihay.com/tu-lay-co-am-dau-la-u-u-e37594.html",
        "https://loigiaihay.com/tu-lay-co-am-dau-la-x-e37596.html"
    ]

    def parse(self, response):
        words_links = response.css('div.wiki-article a ::attr(href)').getall()

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
