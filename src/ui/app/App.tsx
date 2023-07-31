import { useEffect } from "react";
import { useAppDispatch } from "./hooks";
import { handleInitialData } from "../../state/modules/shared/actions";
import { CssBaseline } from "@mui/material";
import { Routes, Route, Navigate } from "react-router-dom";
import PageRoutes from "../../state/types/page_routes";
import HomePage from "../pages/home_page";
import LeaderboardPage from "../pages/leaderboard_page";
import NewPollPage from "../pages/new_poll_page";
import PollPage from "../pages/poll_page";
import Signin from "../pages/login_page";
import PrivateRoutes from "../components/common/private_routes";
import SuccessSnackbar from "../components/common/success_snackbar";
import NotFoundPage from "../pages/not_found_page";

export default function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(handleInitialData());
  }, [dispatch]);
  return (
    <>
      <CssBaseline />
      <SuccessSnackbar />
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route path={PageRoutes.Home} element={<HomePage />} />
          <Route path={PageRoutes.Leaderboard} element={<LeaderboardPage />} />
          <Route path={PageRoutes.Question} element={<PollPage />} />
          <Route path={PageRoutes.New} element={<NewPollPage />} />
          <Route path={PageRoutes.NotFound} element={<NotFoundPage />} />
          <Route path="*" element={<Navigate to={PageRoutes.NotFound} />} />
        </Route>
        <Route path={PageRoutes.Login} element={<Signin />} />
      </Routes>
    </>
  );
}
