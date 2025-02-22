import news from '../../../data/mockNews.json'

let allCategories = async (req, res) => {
  try {
    let categories = news.flatMap((item) => item.categories)
    let excludeCategories = ['Xu Hướng', 'Gợi Ý']
    categories = categories.filter((item) => !excludeCategories.includes(item))
    let uniqueCategories = [...new Set(categories)]
    return res.status(200).send(uniqueCategories.sort())
  }
  catch (error) {
    return res.status(500).send({ Error: error })
  }
}

module.exports = {
  allCategories
}