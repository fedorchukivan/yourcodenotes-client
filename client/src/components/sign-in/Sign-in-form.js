import { useCallback, useState } from "react";
import TextInput from "../input/Input";
import { Link, Navigate } from "react-router-dom";
import AppRoute from "../../common/enums/app-route";
import { useDispatch, useSelector } from "react-redux";
import { authActionCreator } from "../../store/actions";

export default function SignInForm() {
  const user = useSelector(({ auth }) => auth.user);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = useCallback((e) => {
    dispatch(authActionCreator.signIn({ email, password }))
    e.preventDefault();
  }, [dispatch, email, password]);
  
  if (user) return <Navigate to={AppRoute.ROOT} />

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