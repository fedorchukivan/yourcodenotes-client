import { useCallback, useEffect, useState } from "react";
import TextInput from "../input/Input";
import { Link, Navigate } from "react-router-dom";
import AppRoute from "../../common/enums/app-route";
import { useDispatch, useSelector } from "react-redux";
import { authActionCreator } from "../../store/actions";
import MD5 from 'crypto-js/md5';


export default function SignInForm() {
  const user = useSelector(({ auth }) => auth.user);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    dispatch(authActionCreator.signIn({
      email,
      password: MD5(password).toString()
    }));
  }, [dispatch, email, password]);

  const token = window.sessionStorage.getItem('token');
  useEffect(() => {
    if (!user && token) dispatch(authActionCreator.getUser());
  }, [dispatch, user]);
  
  if (user) return <Navigate to={user.role === 'admin' ? AppRoute.OPEN_DB : AppRoute.ROOT} />

  return (
    <>
      <form className="sign-in-form" onSubmit={handleSubmit} autoComplete="off">
        <h2 className="sign-in-form__title">Sign In</h2>
        <TextInput
          title='Email' name='email' type='email' value={email} onChange={setEmail}
        />
        <TextInput
          title='Password' name='password' type='password' value={password} onChange={setPassword}
        />
        <button className="button" type="submit">Sign In</button>
      </form>
      <span>
        Already have an account?
        <Link to={AppRoute.SIGNUP} className="sign-in-form__link">Sign Up</Link>
      </span>
    </>);
}