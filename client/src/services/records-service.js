const records = [
  {
    id: 'amsdwdejwasdcnjnfjvhnr',
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
    creator: {
      email: 'test@at.ua',      
      username: 'testerforever'
    },
    isPublic: true,
    sectionId: null
  },
  {
    id: 'amsdwdejwcdfsnjnfjvhnr',
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
    creator: {
      email: 'test@at.ua',      
      username: 'testerforever'
    },
    isPublic: true,
    sectionId: null
  },
  {
    id: 'amsdwdejwcnjvdfvnfjvhnr',
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
    creator: {
      email: 'test@at.ua',      
      username: 'testerforever'
    },
    isPublic: true,
    sectionId: null
  },
  {
    id: 'dakcjasjclkajcackl',
    title: 'New Card',
    problemDescription: `Some quick example text to build on the card title and make up the bulk of the card's content.`,
    solutionDescription: `As akdsfljnva sjbs ahe j wnm qwn  qw nmnm nqn qn rnq n rnb erw bnr qwbe rbn wqrb rbqwe bnwe b ewmf qnm bnfqfbn webf qbnf bnqw fb qwbf bnq ebf qbnw fb qf`,
    sources: [
      {
        id: 'dasdvvwsdvsfvewwv',
        link: 'localhost:3000/records',
        name: 'YourCodeNotes'
      },
      {
        id: 'odjbtenjknvjkdvknv',
        link: 'localhost:3000/records',
        name: 'First'
      }
    ],
    tags: ['c#', 'backend', '.net'],
    creator: {
      email: 'test@at.ua',      
      username: 'testerforever'
    },
    isPublic: false,
    sectionId: 'section1'
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
    creator: {
      email: 'abc@d.t',      
      username: 'Pastor Luke'
    },
    isPublic: true,
    sectionId: null
  }
];

export default class RecordsService {

  getUserRecords(payload) {
    return records.filter(record => 
      record.creator.email === payload.email && !record.sectionId
    );
  }

  getPublicRecords() {
    return records.filter(record => record.isPublic);
  }

  addRecord(payload) {
    payload.id = Math.random().toString();
    records.push(payload);
    return payload;
  }
}