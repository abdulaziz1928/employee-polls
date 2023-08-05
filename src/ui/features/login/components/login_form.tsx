import {
  Avatar,
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
  Typography,
} from "@mui/material";
import { FormEvent } from "react";
import { User } from "../../../../state/modules/users";

export interface ILoginFormProps {
  user?: string | null;
  users: Record<string, User>;
  isLoading: boolean;
  onChange: (event: SelectChangeEvent) => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => Promise<void>;
}

export default function LoginForm(props: ILoginFormProps) {
  const { user, users, isLoading, onChange, onSubmit } = props;

  return (
    <Box component="form" onSubmit={onSubmit}>
      <FormControl fullWidth>
        <Stack gap={2}>
          <Box>
            <InputLabel id="username">Username</InputLabel>
            <Select
              inputProps={{ "data-testid": "username-select-menu" }}
              labelId="username"
              label="username"
              name="username"
              value={user ?? ""}
              fullWidth
              disabled={isLoading}
              required
              onChange={onChange}
              sx={{ mb: 0.5 }}
            >
              {users &&
                Object.values(users).map((u) => {
                  return (
                    <MenuItem key={u.id} value={u.id} aria-label={u.name}>
                      <Stack gap={1} direction="row" alignItems="center">
                        <Avatar src={u.avatarURL} alt={u.name} />
                        <Typography>{u.name}</Typography>
                      </Stack>
                    </MenuItem>
                  );
                })}
            </Select>
            <Typography color="text.secondary" variant="body2" gutterBottom>
              This is a demo app so feel free to choose one of the predefined
              user accounts
            </Typography>
          </Box>

          <Button
            data-testid="login-button"
            variant="contained"
            color="primary"
            type="submit"
          >
            <Typography variant="h6">Sign in</Typography>
          </Button>
        </Stack>
      </FormControl>
    </Box>
  );
}
