import dict from "../../../data/dict.json";

export let checkReduplication = async (req, res) => {
    try {
        let reduplications = dict.map((item) => item.word.toLowerCase());
        let text = req.body.text.trim();

        let results = [];
        let currentIndex = 0;

        while (currentIndex < text.length) {
            let matchFound = false;

            for (let reduplication of reduplications) {
                if (text.startsWith(reduplication, currentIndex)) {
                    results.push({
                        phrase: reduplication,
                        reduplication: true,
                    });
                    currentIndex += reduplication.length;

                    while (text[currentIndex] === " ") {
                        currentIndex++;
                    }

                    matchFound = true;
                    break;
                }
            }

            if (!matchFound) {
                let nextSpaceIndex = text.indexOf(" ", currentIndex);

                if (nextSpaceIndex === -1) {
                    nextSpaceIndex = text.length;
                }

                let phrase = text.slice(currentIndex, nextSpaceIndex);
                results.push({
                    phrase: phrase,
                    reduplication: false,
                });

                currentIndex = nextSpaceIndex + 1;

                while (text[currentIndex] === " ") {
                    currentIndex++;
                }
            }
        }

        let mergedResults = [];
        for (let i = 0; i < results.length; i++) {
            if (
                mergedResults.length > 0 &&
                !results[i].reduplication &&
                !mergedResults[mergedResults.length - 1].reduplication
            ) {
                mergedResults[mergedResults.length - 1].phrase +=
                    " " + results[i].phrase;
            } else {
                mergedResults.push(results[i]);
            }
        }

        return res.status(200).send({ results: mergedResults });
    } catch (error) {
        return res.status(500).send({ Error: error.message });
    }
};
