import {
  Container,
  TextField,
  MenuItem,
  Typography,
  Avatar,
  Stack,
  Paper,
  Button,
  Box,
  FormControl,
} from "@mui/material";
import { useAppSelector, useAppDispatch } from "../..";
import { FormEvent, useState } from "react";
import Title from "../components/title";
import { setAuthedUser } from "../../state/modules/authedUser";
import { useNavigate } from "react-router-dom";
import PageRoutes from "../../state/types/page_routes";

export default function Signin() {
  const users = useAppSelector((state) => Object.values(state.users.entities));
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const username = data.get("username")?.toString();
    if (username) {
      dispatch(setAuthedUser(username));
      navigate(PageRoutes.Home, { replace: true });
    }
  };

  return (
    <Container
      component={Paper}
      maxWidth="sm"
      sx={{
        my: 6,
        py: 3,
        display: "flex",
        flexDirection: "column",
        borderRadius: 1,
        gap: 4,
      }}
    >
      <Title title="Sign in" />
      <Box component="form" onSubmit={onSubmit}>
        <FormControl fullWidth>
          <Stack gap={2}>
            <Box>
              <TextField
                id="username"
                label="username"
                name="username"
                fullWidth
                required
                select
                sx={{ mb: 0.5 }}
              >
                {users.map((u) => {
                  return (
                    <MenuItem key={u.id} value={u.id}>
                      <Stack gap={1} direction="row" alignItems="center">
                        <Avatar />
                        <Typography>{u.name}</Typography>
                      </Stack>
                    </MenuItem>
                  );
                })}
              </TextField>
              <Typography color="text.secondary" variant="body2" gutterBottom>
                This is a demo app so feel free to choose one of the predefined
                user accounts
              </Typography>
            </Box>

            <Button variant="contained" color="primary" type="submit">
              <Typography variant="h6">Sign in</Typography>
            </Button>
          </Stack>
        </FormControl>
      </Box>
    </Container>
  );
}
