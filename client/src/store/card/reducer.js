import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  cards: [
    {
      id: 'amsdwdejwcnjnfjvhnr',
      title: 'Card Title',
      problemDescription: `Some quick example text to build on the card title and make up the bulk of the card's content.`,
      solutionDescription: `As akdsfljnva sjbs ahe j wnm qwn  qw nmnm nqn qn rnq n rnb erw bnr qwbe rbn wqrb rbqwe bnwe b ewmf qnm bnfqfbn webf qbnf bnqw fb qwbf bnq ebf qbnw fb qf`,
      sources: [
        {
          id: 'dasdvvwsdvsfvewwv',
          link: 'localhost:3000/',
          name: 'YourCodeNotes'
        },
        {
          id: 'odjbtenjknvjkdvknv',
          link: 'localhost:3000/',
          name: 'First'
        }
      ],
      tags: ['c#', 'backend', '.net'],
      creator: 'Sullivan Smith'
    },
    {
      id: 'askd2jnjnkjenwkjf',
      title: 'How to add info card',
      problemDescription: `Some quick example text to build on the card title and make up the bulk of the card's content.`,
      solutionDescription: `As akdsfljnva sjbs ahe j wnm qwn  qw nmnm nqn qn rnq n rnb erw bnr qwbe rbn wqrb rbqwe bnwe b ewmf qnm bnfqfbn webf qbnf bnqw fb qwbf bnq ebf qbnw fb qf`,
      sources: [
        {
          id: 'jwnvionqvjqnudvndvksjnv',
          link: 'https://mdbootstrap.com/docs/react/components/cards/',
          name: 'MDB Card component'
        }
      ],
      tags: ['react', 'mdb', 'frontend'],
      creator: 'Pastor Luke'
    }
  ]
}

const reducer = createReducer(initialState, (builder) => {});

export { reducer };