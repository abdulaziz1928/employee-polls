import {
  Container,
  LinearProgress,
  MenuItem,
  Typography,
  Avatar,
  Stack,
  Paper,
  Button,
  Box,
  FormControl,
  SelectChangeEvent,
  Select,
  InputLabel,
} from "@mui/material";
import { FormEvent, useState } from "react";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import Title from "../common/title";
import { setAuthedUser } from "../../../state/modules/authedUser";
import { useLocation, useNavigate } from "react-router-dom";
import PageRoutes from "../../../state/types/page_routes";
import LoadingStatus from "../../../state/types/loading_status";
interface LocationState {
  prevRoute: string;
}
export default function Signin() {
  const [user, setUser] = useState<string | null>();
  const { entities: users, loading } = useAppSelector((state) => state.users);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const { prevRoute: route } = (location.state as LocationState) || {
    prevRoute: PageRoutes.Home,
  };

  const isLoading = loading === LoadingStatus.idle;

  const handleChange = (event: SelectChangeEvent) => {
    setUser(event.target.value as string);
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (user) {
      dispatch(setAuthedUser(user));
      navigate(route, { replace: true });
    }
  };

  return (
    <>
      {isLoading && <LinearProgress />}
      <Container
        component={Paper}
        maxWidth="sm"
        data-testid="login-container"
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
                <InputLabel id="username">Username</InputLabel>
                <Select
                  labelId="username"
                  label="username"
                  name="username"
                  value={user ?? ""}
                  fullWidth
                  disabled={isLoading}
                  required
                  onChange={handleChange}
                  sx={{ mb: 0.5 }}
                >
                  {users &&
                    Object.values(users).map((u) => {
                      return (
                        <MenuItem key={u.id} value={u.id}>
                          <Stack gap={1} direction="row" alignItems="center">
                            <Avatar src={u.avatarURL} alt={u.name} />
                            <Typography>{u.name}</Typography>
                          </Stack>
                        </MenuItem>
                      );
                    })}
                </Select>
                <Typography color="text.secondary" variant="body2" gutterBottom>
                  This is a demo app so feel free to choose one of the
                  predefined user accounts
                </Typography>
              </Box>

              <Button variant="contained" color="primary" type="submit">
                <Typography variant="h6">Sign in</Typography>
              </Button>
            </Stack>
          </FormControl>
        </Box>
      </Container>
    </>
  );
}
