import { useSelector } from "react-redux";
import Navigation from "../navigation/Navigation";
import { Navigate } from "react-router-dom";
import AppRoute from "../../common/enums/app-route";

export default function Record() {
  const user = useSelector(({ auth }) => auth.user);

  if (!user) return <Navigate to={AppRoute.SIGNIN} />

  return (
  <>
    <Navigation />
  
  </>);
}