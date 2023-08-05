import {
  Container,
  LinearProgress,
  Paper,
  SelectChangeEvent,
} from "@mui/material";
import { FormEvent, useState } from "react";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import Title from "../common/title";
import { setAuthedUser } from "../../../state/modules/authedUser";
import { useLocation, useNavigate } from "react-router-dom";
import PageRoutes from "../../../state/types/page_routes";
import LoadingStatus from "../../../state/types/loading_status";
import LoginForm from "./components/login_form";
interface LocationState {
  prevRoute: string;
}
export default function Login() {
  const [user, setUser] = useState<string | null>();
  const { entities: users, loading } = useAppSelector((state) => state.users);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const { prevRoute: route } = (location.state as LocationState) || {
    prevRoute: PageRoutes.Home,
  };

  const isLoading = loading === LoadingStatus.idle;

  const handleChange = (event: SelectChangeEvent) =>
    setUser(event.target.value as string);

  const handleOnSubmit = async (event: FormEvent<HTMLFormElement>) => {
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
        <LoginForm
          user={user}
          users={users}
          onChange={handleChange}
          onSubmit={handleOnSubmit}
          isLoading={isLoading}
        />
      </Container>
    </>
  );
}
