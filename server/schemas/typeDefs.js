const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String
    bookCount: Int
    savedBooks: [Book]
  }
  type Book {
    bookId: ID!
    title: String
    authors: [String]
    description: String!
    image: String
    link: String
  }
# accepts a book author's array, description, title, bookId, image, and link as parameters; 
  input BookInput {
    authors: [String]
    description: String
    title: String
    bookId: ID!
    image: String
    link: String

  type Query {
    me: User
  }

  type Auth {
    token: ID!
    user: User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String): Auth
    saveBook(bookData: BookInput):User
    removeBook(bookId: ID): User
  }
`;

module.exports = typeDefs;



// * `login`: Accepts an email and password as parameters; returns an `Auth` type.

// * `addUser`: Accepts a username, email, and password as parameters; returns an `Auth` type.

// * `saveBook`: Accepts a book author's array, description, title, bookId, image, and link as parameters; returns a `User` type. (Look into creating what's known as an `input` type to handle all of these parameters!)

// * `removeBook`: Accepts a book's `bookId` as a parameter; returns a `User` type.