import fs from 'fs'
export

let mockNews = async (req, res) => {
    try {
        let file = fs.readFileSync('data/mockNews.json');
        let data = JSON.parse(file);

        return res.status(200).send(data);
    } catch (error) {
        return res.status(500).send({ Error: error });
    }
}

module.exports = {
    mockNews
}