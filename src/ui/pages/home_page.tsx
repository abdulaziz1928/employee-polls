import {
  Container,
  Tabs,
  Tab,
  Paper,
  Box,
  LinearProgress,
} from "@mui/material";
import { useState } from "react";
import TabPanel from "../components/home/tab_panel";
import { useAppSelector } from "../app/hooks";
import { sortQuestions, splitQuestions } from "../../state/utils/helpers";
import QuestionPolls from "../components/home/polls";
import Title from "../components/common/title";
import LoadingStatus from "../../state/types/loading_status";

export default function HomePage() {
  const [value, setValue] = useState(0);

  const { entities: questions, loading } = useAppSelector(
    (state) => state.questions
  );
  const userAnswers = useAppSelector((state) => {
    const authedUser = state.authedUser.entities;
    const userAnswers = state.users.entities[authedUser!].answers;
    return userAnswers;
  });

  const sortedQuestions = sortQuestions(questions);
  const [answered, unAnswered] = splitQuestions(sortedQuestions, userAnswers);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  if (loading === LoadingStatus.idle) {
    return <LinearProgress />;
  }

  return (
    <Container
      sx={{
        maxWidth: { md: "md", lg: "lg" },
        my: 3,
        py: 3,
        display: "flex",
        flexDirection: "column",
        gap: 3,
        borderRadius: "1rem",
      }}
    >
      <Title title="Home" />

      <Box
        component={Paper}
        sx={{
          background: (theme) =>
            theme.palette.mode === "dark" ? "#1B1B1B" : "#FAFAFA",
        }}
      >
        <Tabs value={value} onChange={handleChange} variant="fullWidth">
          <Tab label="Unanswered Questions" />
          <Tab label="Answered Questions" />
        </Tabs>

        <TabPanel value={value} index={0}>
          <QuestionPolls polls={unAnswered} />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <QuestionPolls polls={answered} isAnswered />
        </TabPanel>
      </Box>
    </Container>
  );
}
