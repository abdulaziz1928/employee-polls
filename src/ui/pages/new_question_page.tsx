import { Container, Stack, LinearProgress } from "@mui/material";
import { FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { handleAddQuestion } from "../../state/modules/questions/thunks/add_question";
import LoadingStatus from "../../state/types/loading_status";
import PageRoutes from "../../state/types/page_routes";
import QuestionForm from "../components/new_question/question_form";
import Title from "../components/common/title";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { setSnackbar } from "../../state/modules/snackbar/snackbarSlice";
export default function NewQuestionPage() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { loading, error } = useAppSelector((state) => state.questions);

  const isLoading = loading === LoadingStatus.pending;

  const handleOnSubmit = async (
    event: FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const optionOneText = data.get("optionOne")?.toString();
    const optionTwoText = data.get("optionTwo")?.toString();
    await dispatch(
      handleAddQuestion({
        optionOneText: optionOneText!,
        optionTwoText: optionTwoText!,
      })
    );
    if (loading === LoadingStatus.failed) {
      console.error(error);
    } else {
      dispatch(setSnackbar("Poll submitted successfully!"));
      navigate(PageRoutes.Home);
    }
  };

  return (
    <>
      {isLoading && <LinearProgress color="secondary" />}
      <Container maxWidth="md" sx={{ my: 6 }}>
        <Stack spacing={3}>
          <Title title="Would You Rather" subTitle="Create Your Own Poll" />
          <QuestionForm onSubmit={handleOnSubmit} isLoading={isLoading} />
        </Stack>
      </Container>
    </>
  );
}
