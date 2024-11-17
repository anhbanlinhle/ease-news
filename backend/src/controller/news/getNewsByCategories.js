import news from '../../../data/mockNews.json'

let getNewsByCategories = async (req, res) => {
  try {
      let category = req.body.category
      console.log(category);
      
      let newsByCategory = news.filter((item) => item.categories.includes(category))
      return res.status(200).send(newsByCategory)
  } catch (error) {
      return res.status(500).send({ Error: error })
  }
}

module.exports = {
  getNewsByCategories
}