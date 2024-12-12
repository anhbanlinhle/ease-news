import {config} from 'dotenv'

config()

import {dbHealth} from './health/dbHealth'
import {allNews} from './news/getAllNews'
import {allCategories} from './news/getAllCategories'
import {getNewsByCategories} from './news/getNewsByCategories'
import {checkReduplication} from './dictionary/checkReduplication'
import {searchReduplication} from './dictionary/searchReduplication'

let homepage = async (req, res) => {
    console.log(
        req.session.id === undefined ? `Session: ` : `\x1b[4mSession\x1b[0m: `,
        req.session.id
    )
    console.log(
        req.session.userid === undefined ? `UserId: ` : `\x1b[4mUserid\x1b[0m: `,
        req.session.userid
    )
    console.log(
        req.session.token === undefined ? `Token: ` : `\x1b[4mToken\x1b[0m: `,
        req.session.token
    )

    return res.send([
        {
            session: req.session.id,
            userid: req.session.userid,
            token: req.session.token,
        },
    ])
}

module.exports = {
    homepage,
    dbHealth,
    allNews,
    allCategories,
    getNewsByCategories,
    checkReduplication,
    searchReduplication
}