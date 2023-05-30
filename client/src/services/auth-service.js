const users = [
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
]

export default class AuthService {
  
  getUser() {
    return {
      fullName: 'user',
      role: 'admin'
    }
  }

  signIn(payload) {
    const user = users.find(u => u.email === payload.email && u.password === payload.password)

    return user ? {
      email: user.email,
      role: user.role,
      username: user.username,
    } : user;
  }
}