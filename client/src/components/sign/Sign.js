import SignInForm from "../sign-in/Sign-in-form";
import { useLocation } from "react-router-dom"
import AppRoute from "../../common/enums/app-route";
import SignUpForm from "../sign-up/Sign-up-form";

const Sign = () => {
  const { pathname } = useLocation();

  return (
  <main className={pathname === AppRoute.SIGN_IN ? "sign-in-page" : "sign-up-page"}>
    <h1 className="visually-hidden">YourCodeNotes</h1>
    { pathname === AppRoute.SIGN_IN ? <SignInForm /> : <SignUpForm /> }
  </main>);
}

export default Sign;