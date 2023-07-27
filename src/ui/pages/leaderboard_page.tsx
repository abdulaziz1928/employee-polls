import { Container, LinearProgress } from "@mui/material";
import { useAppSelector } from "../..";
import LoadingStatus from "../../state/types/loading_status";
import { sortUsers } from "../../state/utils/helpers";

import LeaderboardTable from "../components/leaderboard/leaderboard_table";
import Title from "../components/title";

export default function LeaderboardPage() {
  const [users, loading] = useAppSelector((state) => [
    state.users.entities,
    state.users.loading,
  ]);
  const sortedUsers = sortUsers(users);

  if (loading === LoadingStatus.idle) {
    return <LinearProgress />;
  }
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
      <LeaderboardTable users={sortedUsers} />
    </Container>
  );
}
