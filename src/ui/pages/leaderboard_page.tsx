import {
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableCell,
  Container,
  TableRow,
  TableBody,
  Typography,
  Box,
  Avatar,
} from "@mui/material";
import { useAppSelector } from "../..";

export default function LeaderboardPage() {
  const users = useAppSelector((state) => state.users.entities);
  return (
    <Container
      maxWidth="md"
      sx={{
        my: 3,
        py: 4,
        px: 1,
        display: "flex",
        flexDirection: "column",
        gap: 3,
      }}
    >
      <Typography component="h1" variant="h3" align="center">
        Leaderboard
      </Typography>
      <TableContainer component={Paper} sx={{ overflow: "auto" }}>
        <Box sx={{ width: "100%", display: "table", tableLayout: "fixed" }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell colSpan={2}>Users</TableCell>
                <TableCell align="center">Answers</TableCell>
                <TableCell align="center">Created</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {Object.keys(users).map((id) => {
                return (
                  <TableRow key={id}>
                    <TableCell colSpan={2}>
                      <Box sx={{ display: "flex", gap: 1 }}>
                        <Avatar></Avatar>
                        <Box sx={{ flexDirection: "column" }}>
                          <Typography variant="body1">
                            {users[id].name}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {users[id].id}
                          </Typography>
                        </Box>
                      </Box>
                    </TableCell>
                    <TableCell align="center">
                      {Object.keys(users[id].answers).length}
                    </TableCell>
                    <TableCell align="center">
                      {users[id].questions.length}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Box>
      </TableContainer>
    </Container>
  );
}
