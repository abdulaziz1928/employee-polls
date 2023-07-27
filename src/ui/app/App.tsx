import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../..";
import { handleInitialData } from "../../state/modules/shared/actions";
import Header from "../layout/header/header";
import { CssBaseline, LinearProgress } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import PageRoutes from "../../state/types/page_routes";
import HomePage from "../pages/home_page";
import LeaderboardPage from "../pages/leaderboard_page";
import NewQuestionPage from "../pages/new_question_page";
import QuestionPage from "../pages/question_page";
import LoadingStatus from "../../state/types/loading_status";

export default function App() {
  const dispatch = useAppDispatch();
  const [authedUser, loading] = useAppSelector((state) => [
    state.authedUser.entities,
    state.authedUser.loading,
  ]);
  const isLoading = loading === LoadingStatus.idle;
  useEffect(() => {
    dispatch(handleInitialData());
  }, [dispatch]);
  return (
    <>
      <CssBaseline />
      {authedUser && <Header />}
      {isLoading && <LinearProgress />}
      <Routes>
        <Route path={PageRoutes.Home} element={authedUser && <HomePage />} />
        <Route
          path={PageRoutes.Leaderboard}
          element={authedUser && <LeaderboardPage />}
        />
        <Route
          path={PageRoutes.Question}
          element={authedUser && <QuestionPage />}
        />
        <Route
          path={PageRoutes.New}
          element={authedUser && <NewQuestionPage />}
        />
      </Routes>
    </>
  );
}
