import { Avatar, Grid, Stack, Typography, Container } from "@mui/material";
import Answer from "../../../state/types/answer";
import { handleAnswerQuestion } from "../../../state/modules/questions/thunks/answer_question";
import { Question, Option } from "../../../state/modules/questions";
import LoadingStatus from "../../../state/types/loading_status";
import OptionChoice from "./option_choice";
import { useAppDispatch } from "../../..";

export interface IAnswerQuestionProps {
  question: Question;
  loading: LoadingStatus;
}

export default function AnswerQuestion(props: IAnswerQuestionProps) {
  const { question, loading } = props;
  const { id, author, optionOne, optionTwo } = question;
  const isLoading = loading === LoadingStatus.pending;

  const dispatch = useAppDispatch();

  const handleSubmitChoice = (option: Option) => {
    const answer = option === optionOne ? Answer.optionOne : Answer.optionTwo;
    dispatch(handleAnswerQuestion({ qid: id!, answer: answer }));
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
              isLoading={isLoading}
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
              isLoading={isLoading}
              submitChoice={handleSubmitChoice}
            />
          </Grid>
        </Grid>
      </Stack>
    </Container>
  );
}
