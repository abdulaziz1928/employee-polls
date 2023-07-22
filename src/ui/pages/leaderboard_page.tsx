import { Container, Typography } from "@mui/material";

import LeaderboardTable from "../components/leaderboard/leaderboard_table";

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
      <Typography component="h1" variant="h3" align="center">
        Leaderboard
      </Typography>
      <LeaderboardTable />
    </Container>
  );
}
