import { useEffect, useState } from 'react';
import AppRoute from '../../common/enums/app-route';
import TextInput from '../input/Input';
import { Link, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { authActionCreator } from '../../store/actions';
import MD5 from 'crypto-js/md5';

const SignUpForm = () => {
  const user = useSelector(({ auth }) => auth.user);
  
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password.length >= 6) {
      dispatch(authActionCreator.signUp({
        email,
        password: MD5(password).toString(),
        username
      }));
    }
    else {
      alert('Password must be at least 6 characters long');
    }
  }

  const token = window.sessionStorage.getItem('token');
  useEffect(() => {
    if (!user && token) dispatch(authActionCreator.getUser());
  }, [dispatch, user]);

  if (user) return <Navigate to={user.role === 'admin' ? AppRoute.OPEN_DB : AppRoute.ROOT} />

  return (
    <>
      <form className="sign-in-form" onSubmit={handleSubmit} autoComplete="off">
        <h2 className="sign-in-form__title">Sign Up</h2>
        <TextInput
          title='Username' name='username' type='text' value={username} onChange={setUsername}
        />
        <TextInput
          title='Email' name='email' type='email' value={email} onChange={setEmail}
        />
        <TextInput
          title='Password' name='password' type='password' value={password} onChange={setPassword}
        />
        <button className="button" type="submit">Sign Up</button>
      </form>
      <span>
        Already have an account?
        <Link to={AppRoute.SIGN_IN} className="sign-in-form__link">Sign In</Link>
      </span>
    </>);
}

export default SignUpForm;