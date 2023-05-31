import { getUsers } from "./users";


export default class AuthService {
  
  getUser() {
    return {
      fullName: 'user',
      role: 'admin'
    }
  }

  signIn(payload) {
    const users = getUsers();
    const user = users.find(u => u.email === payload.email && u.password === payload.password)

    return user ? {
      email: user.email,
      role: user.role,
      username: user.username,
    } : user;
  }
}