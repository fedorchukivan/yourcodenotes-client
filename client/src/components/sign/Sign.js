import SignInForm from "../sign-in/Sign-in-form";
import { useLocation } from "react-router-dom"
import AppRoute from "../../common/enums/app-route";
import SignUpForm from "../sign-up/Sign-up-form";

const Sign = () => {
  const { pathname } = useLocation();

  return (
  <main className={pathname === AppRoute.SIGNIN ? "sign-in-page" : "sign-up-page"}>
    <h1 className="visually-hidden">YourCodeNotes</h1>
    { pathname === AppRoute.SIGNIN ? <SignInForm /> : <SignUpForm /> }
  </main>);
}

export default Sign;