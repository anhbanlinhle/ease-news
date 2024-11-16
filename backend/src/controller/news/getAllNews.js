import news from '../../../data/mockNews.json'

let allNews = async (req, res) => {
    try {
        return res.status(200).send(news);
    } catch (error) {
        return res.status(500).send({ Error: error });
    }
}

module.exports = {
    allNews
}