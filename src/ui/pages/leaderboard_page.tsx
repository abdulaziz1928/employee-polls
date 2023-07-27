import { Container } from "@mui/material";

import LeaderboardTable from "../components/leaderboard/leaderboard_table";
import Title from "../components/title";

export default function LeaderboardPage() {
  return (  
    <Container
      maxWidth="md"
      sx={{
        my: 3,
        py: 3,
        display: "flex",
        flexDirection: "column",
        gap: 3,
        borderRadius: "1rem",
      }}
    >
      <Title title="Leaderboard" />
      <LeaderboardTable />
    </Container>
  );
}
