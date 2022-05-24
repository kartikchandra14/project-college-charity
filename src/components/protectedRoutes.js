import { Redirect, Route } from "react-router-dom";
import useAuth from 'Authentic';

const protectedRoute = props => {
  const {user} = useAuth();

  if (!user) {
    return <Redirect to="/" />
  }
}
export default protectedRoute