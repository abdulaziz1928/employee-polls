import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./hooks";
import { handleInitialData } from "../../state/modules/shared/actions";
import Header from "../layout/header/header";
import { CssBaseline } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import PageRoutes from "../../state/types/page_routes";
import HomePage from "../pages/home_page";
import LeaderboardPage from "../pages/leaderboard_page";
import NewQuestionPage from "../pages/new_question_page";
import QuestionPage from "../pages/question_page";
import Signin from "../pages/login_page";
import PrivateRoutes from "../components/common/private_routes";

export default function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(handleInitialData());
  }, [dispatch]);
  return (
    <>
      <CssBaseline />
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route path={PageRoutes.Home} element={<HomePage />} />
          <Route path={PageRoutes.Leaderboard} element={<LeaderboardPage />} />
          <Route path={PageRoutes.Question} element={<QuestionPage />} />
          <Route path={PageRoutes.New} element={<NewQuestionPage />} />
        </Route>
        <Route path={PageRoutes.Login} element={<Signin />} />
      </Routes>
    </>
  );
}
