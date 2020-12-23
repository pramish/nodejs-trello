const fetch = require('node-fetch')

const TRELLO_GET_CARD_ENDPOINT = `https://api.trello.com/1/cards`


const getCardInList = async (cardID) => {
    try {
        const URL = `${TRELLO_GET_CARD_ENDPOINT}/${cardID}/list?key=${process.env.API_KEY}&token=${process.env.API_TOKEN}`
        const getCardResult = await fetch(URL, {
            method: 'GET',
            headers: {
                'Accept': 'application/json'
            }
        })
        return getCardResult.text();
    } catch (error) {
        throw new Error(error)
    }
}

// const createCard = async () => {
//     try {

//     } catch (error) {
//         throw new Error(error)
//     }
// }
module.exports = {
    getCardInList
}