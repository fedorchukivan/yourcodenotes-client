import { useState } from 'react';
import AppRoute from '../../common/enums/app-route';
import TextInput from '../input/Input';
import { Link } from 'react-router-dom';

const SignUpForm = () => {
  
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <>
      <form className="sign-in-form" onSubmit={handleSubmit} autoComplete="off">
        <h2 className="sign-in-form__title">Sign Up</h2>
        <TextInput
          title='Full Name' name='full-name' type='text' value={fullName} onChange={setFullName}
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
        <Link to={AppRoute.SIGNIN} className="sign-in-form__link">Sign In</Link>
      </span>
    </>);
}

export default SignUpForm;