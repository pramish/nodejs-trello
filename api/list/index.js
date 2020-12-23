const fetch = require('node-fetch')

const TRELLO_GET_CARD_LIST_ENDPOINT = `https://api.trello.com/1/boards/${process.env.TRELLO_BOARD_ID}`
const TRELLO_GET_ONE_LIST_ENDPOINT = `https://api.trello.com/1`

const getAllList = async () => {
    try {
        const URL = `${TRELLO_GET_CARD_LIST_ENDPOINT}/lists?key=${process.env.API_KEY}&token=${process.env.API_TOKEN}`
        const getCardListResult = await fetch(URL, {
            method: 'GET',
            headers: {
                'Accept': 'application/json'
            }
        })
        return getCardListResult.text();
    } catch (error) {
        throw new Error(error)
    }
}
const getAllCards = async () => {
    try {
        const URL = `${TRELLO_GET_CARD_LIST_ENDPOINT}/cards?key=${process.env.API_KEY}&token=${process.env.API_TOKEN}`
        const getCardListResult = await fetch(URL, {
            method: 'GET',
            headers: {
                'Accept': 'application/json'
            }
        })
        return getCardListResult.text();
    } catch (error) {
        throw new Error(error)
    }
}
const getOneCardList = async (cardId) => {
    try {
        const URL = `${TRELLO_GET_CARD_LIST_ENDPOINT}/cards/${cardId}?key=${process.env.API_KEY}&token=${process.env.API_TOKEN}`
        const getOneCardResult = await fetch(URL, {
            method: 'GET',
            headers: {
                'Accept': 'application/json'
            }
        })
        return getOneCardResult.text();
    } catch (error) {
        throw new Error(error)
    }
}
const getOneList = async (listId) => {
    try {
        const URL = `${TRELLO_GET_ONE_LIST_ENDPOINT}/lists/${listId}?key=${process.env.API_KEY}&token=${process.env.API_TOKEN}`
        const getOneCardResult = await fetch(URL, {
            method: 'GET',
            headers: {
                'Accept': 'application/json'
            }
        })
        return getOneCardResult.text();
    } catch (error) {
        throw new Error(error)
    }
}
const deleteOneList = async (listId) => {
    try {
        const URL = `${TRELLO_GET_ONE_LIST_ENDPOINT}/lists/${listId}/closed?key=${process.env.API_KEY}&token=${process.env.API_TOKEN}`
        const getOneCardResult = await fetch(URL, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json'
            }
        })
        return getOneCardResult.text();
    } catch (error) {
        throw new Error(error)
    }
}

module.exports = {
    getAllList,
    getAllCards,
    getOneCardList,
    getOneList,
    deleteOneList
}