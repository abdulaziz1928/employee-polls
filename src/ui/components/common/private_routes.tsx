import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import PageRoutes from "../../../state/types/page_routes";
import Header from "../../layout/header/header";

export default function PrivateRoutes() {
  const authedUser = useAppSelector((state) => state.authedUser.entities);

  return authedUser ? (
    <>
      <Header />
      <Outlet />
    </>
  ) : (
    <Navigate to={PageRoutes.Login} />
  );
}
