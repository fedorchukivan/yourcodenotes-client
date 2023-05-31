let users = [
  {
    email: 'abc@d.t',
    role: '',
    username: 'Pastor Luke',
    password: 'abc'
  },
  {
    email: 'test@at.ua',
    role: '',
    username: 'testerforever',
    password: 'test'
  },
  {
    email: 'admin@at.ua',
    role: 'admin',
    username: 'Administrator1',
    password: 'admin'
  }
];

const getUsers = () => users;
const setUsers = (us) => users = us;

export { getUsers, setUsers };