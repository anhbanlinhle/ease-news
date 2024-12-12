import dict from "../../../data/dict.json";

export let searchReduplication = async (req, res) => {
    try {
        const reduplications = dict.map((item) => item);
        const word = req.body.word;

        let results = [];
        for (let i = 0; i < reduplications.length; i++) {
            if (reduplications[i].word.toLowerCase().includes(word.toLowerCase())) {
                results.push(reduplications[i]);
            }
        }

        return res.status(200).send({ results });
    }
    catch (error) {
        return res.status(500).send({ Error: error.message });
    }
}