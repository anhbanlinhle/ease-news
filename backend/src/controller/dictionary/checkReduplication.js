import dict from "../../../data/dict.json";

export let checkReduplication = async (req, res) => {
    try {
        const reduplications = dict.map((item) => item.word.toLowerCase());
        const text = req.body.text;

        const words = text.match(/[\p{L}\p{N}]+|[^\p{L}\p{N}\s]+/gu);

        let results = [];
        for (let i = 0; i < words.length; i++) {
            let matched = false;
            for (let j = i + 1; j <= words.length; j++) {
                const phrase = words.slice(i, j).join(" ");

                if (reduplications.includes(phrase.toLowerCase().trim())) {
                    const word = phrase.trim();
                    results.push({ word, reduplication: true });
                    i = j - 1;
                    matched = true;
                    break;
                }
            }

            if (!matched) {
                results.push({ phrase: words[i].trim(), reduplication: false });
            }
        }

        let mergedResults = [];
        for (let i = 0; i < results.length; i++) {
            if (
                mergedResults.length > 0 &&
                !results[i].reduplication &&
                !mergedResults[mergedResults.length - 1].reduplication
            ) {
                mergedResults[mergedResults.length - 1].phrase += " " + results[i].phrase;
                mergedResults[mergedResults.length - 1].phrase = mergedResults[mergedResults.length - 1].phrase.trim();
            } else {
                mergedResults.push({
                    ...results[i],
                    phrase: results[i].phrase?.trim()
                });
            }
        }

        return res.status(200).send({ results: mergedResults });
    } catch (error) {
        return res.status(500).send({ Error: error.message });
    }
};
