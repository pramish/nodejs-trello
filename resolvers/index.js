const { getAllBoards, createBoard } = require("../api/board");
const { getAllList, getAllCards, getOneCardList, getOneList, deleteOneList } = require("../api/list");

module.exports = RootValue = {
  getBoard: async () => {
    try {
      const allBoards = await getAllBoards()
      const allBoardsResult = JSON.parse(allBoards)
      return {
        name: allBoardsResult.name,
        description: allBoardsResult.desc,
        id: allBoardsResult.id
      }
    } catch (error) {
      console.log(error);
    }
  },
  createBoard: async (args) => {
    try {
      const boardName = args.boardInput.name
      const a = await createBoard(boardName)
    } catch (error) {

    }
  },
  getAllList: async () => {
    try {
      const allCards = await getAllList()
      return JSON.parse(allCards)
    } catch (error) {
      throw new Error(error)
    }
  },
  getAllCardList: async (args) => {
    try {
      // const cardID = args.cardId
      const getCardList = await getAllCards(args.cardId)
      console.log(JSON.parse(getCardList));
      return JSON.parse(getCardList)
    } catch (error) {
      throw new Error(error)
    }
  },
  getOneCard: async (args) => {
    try {
      const oneCard = await getOneCardList(args.cardId)
      return JSON.parse(oneCard)
    } catch (error) {
      throw new Error(error)
    }
  },
  getOneList: async (args) => {
    try {
      const oneList = await getOneList(args.listId)
      return JSON.parse(oneList)
    } catch (error) {
      throw new Error(error)
    }
  },
  deleteOneList: async (args) => {
    try {
      const deleteList = await deleteOneList(args.listId)
      console.log(deleteList);
      return JSON.parse(oneList)
    } catch (error) {
      throw new Error(error)
    }
  }
};
