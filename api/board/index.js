const fetch = require('node-fetch')

const TRELLO_GETBOARD_ENDPOINT = `https://api.trello.com/1/boards/${process.env.TRELLO_BOARD_ID}?key=${process.env.API_KEY}&token=${process.env.API_TOKEN}`
const TRELLO_CREATEBOARD_ENDPOINT = `https://api.trello.com/1/boards?key=${process.env.API_KEY}&token=${process.env.API_TOKEN}`

const getAllBoards = async () => {
    try {
        const allResult = await fetch(TRELLO_GETBOARD_ENDPOINT, {
            method: 'GET',
            headers: {
                'Accept': 'application/json'
            }
        })
        return allResult.text()
    } catch (error) {
        throw new Error(error)
    }
}

const createBoard = async (boardName) => {
    try {
        const createBoardResult = await fetch(`${TRELLO_CREATEBOARD_ENDPOINT}&name=${boardName}`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json'
            }
        })
        return createBoardResult.text()
    } catch (error) {

    }
}

module.exports = {
    getAllBoards,
    createBoard
}