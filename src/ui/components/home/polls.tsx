import { Question } from "../../../state/modules/questions";
import { Grid } from "@mui/material";
import PollCard from "./poll_card";

export interface IPollsProps {
  polls: Question[];
}

export default function QuestionPolls(props: IPollsProps) {
  const { polls } = props;

  return (
    <Grid container spacing={2} direction="row" justifyContent="center">
      {polls.map((poll) => {
        return (
          <Grid item key={poll.id} xs={12} lg={6}>
            <PollCard question={poll} />
          </Grid>
        );
      })}
    </Grid>
  );
}
