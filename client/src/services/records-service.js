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
    sectionId: 's2'
  },
  {
    id: 'askd2jnjnkjdsaadenwkjf',
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
      email: 'test@at.ua',      
      username: 'testerforever'
    },
    isPublic: true,
    sectionId: 'section1'
  }
];

export default class RecordsService {

  getUserRecords(payload) {
    return records.filter(record => 
      record.creator.email === payload.user.email &&
      !record.sectionId &&
      record.title.includes(payload.titleFilter) &&
      (payload.tagFilter ? record.tags.includes(payload.tagFilter) : true)
    );
  }

  getPublicRecords(payload) {
    return records.filter(record =>
      record.isPublic &&
      record.title.includes(payload.titleFilter) &&
      (payload.tagFilter ? record.tags.includes(payload.tagFilter) : true)
    );
  }

  getSectionRecords(payload) {
    return records.filter(r => r.sectionId === payload.sectionId).filter(record => 
      record.title.includes(payload.titleFilter) &&
      (payload.tagFilter ? record.tags.includes(payload.tagFilter) : true)
    );
  }

  addRecord(payload) {
    payload.id = Math.random().toString();
    records.push(payload);
    return payload;
  }

  removeRecord(id) {
    const i = records.map(r => r.id).indexOf(id);
    const removed = records.splice(i, 1)[0];
    return removed;
  }

  unpublishRecord(id) {
    const i = records.map(r => r.id).indexOf(id);
    const upd = {...records[i], isPublic: false};
    records.splice(i, 1, upd);
    return records.filter(record => record.isPublic);
  }
}