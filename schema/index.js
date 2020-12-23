const { buildSchema } = require("graphql");

module.exports = schema = buildSchema(`

    type Card{
        name:String!
    }

    input CardInput{
        name:String!
    }

    type Board{
        name:String!
        description:String!
        id:String!
    }
    type List{
        name:String!
        id:String!
    }
    type OneCard{
        name:String!
        id:String!
    }
    type OneList{
        name:String!
        id:String!
    }

    type CardList{
        name:String!
        id:String!
        idBoard:String!
        idList:String!
    }

    input BoardInput{
        name:String!
    }

    type RootQuery{
        getAllCards: [Card!]
        getBoard: Board!
        getAllList: [List!]
        getAllCardList: [CardList!]
        getOneCard(cardId:String): OneCard!
        getOneList(listId:String): OneList!
        deleteOneList(listId:String): OneList!
    }
    type RootMutation{
        createCard(cardInput: CardInput): Card
        createBoard(boardInput: BoardInput): Board
    }
    schema {
        query:RootQuery,
        mutation:RootMutation
    }
`);
