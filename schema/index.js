const { buildSchema } = require("graphql");

module.exports = schema = buildSchema(`

    type Card{
        name:String!
    }

    input CardInput{
        name:String!
    }

    type RootQuery{
        getAllCards: [Card!]
    }
    type RootMutation{
        createCard(cardInput: CardInput): Card
    }
    schema {
        query:RootQuery,
        mutation:RootMutation
    }
`);
