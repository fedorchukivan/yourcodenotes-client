import { useState } from "react";
import TextInput from "../input/Input";
import { Link } from "react-router-dom";
import AppRoute from "../../common/enums/app-route";

export default function SignInForm() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  }

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