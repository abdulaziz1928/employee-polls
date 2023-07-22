import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Stack,
} from "@mui/material";
import { FormEvent } from "react";
export default function NewQuestionPage() {
  const handleOnSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    console.log(event);
  };

  return (
    <Container maxWidth="md" sx={{ my: 6 }}>
      <Stack spacing={3}>
        <Box>
          <Typography component="h1" variant="h3" align="center">
            Would You Rather
          </Typography>
          <Typography
            component="h2"
            variant="h4"
            align="center"
            color="text.secondary"
            gutterBottom
          >
            Create Your Own Poll
          </Typography>
        </Box>

        <Box component="form" noValidate onSubmit={handleOnSubmit}>
          <Stack spacing={2}>
            <TextField
              id="optionOne"
              label="Option One"
              name="optionOne"
              multiline
              required
              fullWidth
            />
            <TextField
              id="optionTwo"
              label="Option Two"
              name="optionTwo"
              multiline
              required
              fullWidth
            />
            <Button variant="contained" sx={{ my: 1 }} fullWidth>
              <Typography variant="h6">Submit</Typography>
            </Button>
          </Stack>
        </Box>
      </Stack>
    </Container>
  );
}
