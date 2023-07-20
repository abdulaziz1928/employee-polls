import {
  Box,
  Container,
  Typography,
  Grid,
  TextField,
  Button,
} from "@mui/material";
import { FormEvent } from "react";
export default function NewQuestionPage() {
  const handleOnSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    console.log(event);
  };

  return (
    <Container maxWidth="sm" sx={{ my: 3, p: 1 }}>
      <Box sx={{ display: "flex", flexDirection: "column", p: 3, gap: 3 }}>
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
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                id="optionOne"
                label="Option One"
                name="optionOne"
                multiline
                required
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="optionTwo"
                label="Option Two"
                name="optionTwo"
                multiline
                required
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" sx={{ my: 1 }} fullWidth>
                <Typography variant="h6">Submit</Typography>
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
