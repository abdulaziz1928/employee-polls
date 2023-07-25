import { Typography, Container, Avatar, Stack, Paper } from "@mui/material";
import { Question } from "../../../state/modules/questions";

import OptionResults from "./option_results";

export interface IQuestionResultsProps {
  question: Question;
}

export default function QuestionResults(props: IQuestionResultsProps) {
  const { question } = props;
  const { optionOne, optionTwo, author } = question;
  const overallVotes = optionOne.votes.length + optionTwo.votes.length;
  return (
    <Container
      maxWidth="md"
      sx={{
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

        <Stack component={Paper} p={2} width="100%" gap={2}>
          <OptionResults option={optionOne} overallVotes={overallVotes} />
          <OptionResults option={optionTwo} overallVotes={overallVotes} />
        </Stack>
      </Stack>
    </Container>
  );
}
