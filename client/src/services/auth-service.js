export default class AuthService {
  
  getUser() {
    return {
      fullName: 'user',
      role: 'admin'
    }
  }

  signIn(payload) {
    return {
      fullName: 'user',
      email: payload.email,
      role: 'admin'
    }
  }
}