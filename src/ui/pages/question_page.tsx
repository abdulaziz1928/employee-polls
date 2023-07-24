import { useParams } from "react-router-dom";
import Container from "@mui/material/Container";
import { Avatar, Grid, Stack, Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../..";
import { Option, Question } from "../../state/modules/questions";
import LoadingStatus from "../../state/types/loading_status";
import OptionChoice from "../components/question/option_choice";
import { shallowEqual } from "react-redux";
import { handleAnswerQuestion } from "../../state/modules/questions/thunks/answer_question";
import Answer from "../../state/types/answer";

export default function QuestionPage() {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const [question, loading] = useAppSelector((state) => {
    let question: Question | null = null;
    if (id) question = state.questions.entities[id];
    return [question, state.questions.loading];
  }, shallowEqual);
  if (!question && loading === LoadingStatus.succeeded) {
    return (
      <Container maxWidth="sm">
        <Typography variant="h2" py={4}>
          Poll doesn't exist
        </Typography>
      </Container>
    );
  }

  const { author, optionOne, optionTwo } = question!;

  const handleSubmitChoice = (option: Option) => {
    const answer = option === optionOne ? Answer.optionOne : Answer.optionTwo;
    dispatch(handleAnswerQuestion({ qid: id!, answer: answer }));
    console.log(option);
  };

  return (
    <Container
      sx={{
        maxWidth: { md: "md", lg: "lg", xl: "xl" },
        my: 3,
        py: 3,
        display: "flex",
        flexDirection: "column",

        gap: 3,
      }}
    >
      <Stack alignItems="center" gap={4}>
        <Typography component="h1" variant="h3" align="center">
          Poll By {author}
        </Typography>
        <Avatar
          sx={{
            width: { lg: "12rem", md: "8rem", xs: "6rem" },
            height: { lg: "12rem", md: "8rem", xs: "6rem" },
          }}
        />
        <Typography component="h1" variant="h3" align="center">
          Would You Rather
        </Typography>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} lg={5.5}>
            <OptionChoice
              option={optionOne}
              submitChoice={handleSubmitChoice}
            />
          </Grid>
          <Grid item xs={12} lg={1}>
            <Typography
              variant="h6"
              fontWeight="bold"
              color="text.secondary"
              align="center"
            >
              OR
            </Typography>
          </Grid>
          <Grid item xs={12} lg={5.5}>
            <OptionChoice
              option={optionTwo}
              submitChoice={handleSubmitChoice}
            />
          </Grid>
        </Grid>
      </Stack>
    </Container>
  );
}
