import { useNavigate, useParams } from "react-router-dom";
import { Box, LinearProgress } from "@mui/material";
import { Question } from "../../state/modules/questions";
import LoadingStatus from "../../state/types/loading_status";
import AnswerQuestion from "../components/question/answer_question";
import { useAppSelector } from "../app/hooks";
import { shallowEqual } from "react-redux";
import QuestionResults from "../components/question/question_results";
import { User } from "../../state/modules/users";
import PageRoutes from "../../state/types/page_routes";
import { useEffect } from "react";

export default function QuestionPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const loading = useAppSelector((state) => state.questions.loading);

  const [question, poster, isAnswered] = useAppSelector((state) => {
    const authedUser = state.authedUser.entities!;
    let question: Question | null = null;
    let poster: User | null = null;
    let isAnswered: boolean = false;
    question = state.questions.entities[id!];
    if (question) {
      poster = state.users.entities[question.author];
      isAnswered =
        question?.optionOne.votes.includes(authedUser) ||
        question?.optionTwo.votes.includes(authedUser);
    }
    return [question, poster, isAnswered];
  }, shallowEqual);

  const isLoading = loading === LoadingStatus.pending;

  useEffect(() => {
    if (!question) {
      if (loading === LoadingStatus.succeeded) {
        navigate(PageRoutes.NotFound, { replace: true });
      }
    }
  });

  if (!question) {
    return (
      <Box sx={{ width: "100%" }}>
        <LinearProgress color="secondary" />
      </Box>
    );
  }

  return (
    <>
      {isLoading && <LinearProgress color="secondary" />}
      {isAnswered ? (
        <QuestionResults question={question} poster={poster} />
      ) : (
        <AnswerQuestion question={question} poster={poster} loading={loading} />
      )}
    </>
  );
}
