import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Stack,
  FormControl,
} from "@mui/material";
import { FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../..";
import { handleAddQuestion } from "../../state/modules/questions/thunks/add_question";
import PageRoutes from "../../state/types/page_routes";
export default function NewQuestionPage() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const handleOnSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const optionOneText = data.get("optionOne")?.toString();
    const optionTwoText = data.get("optionTwo")?.toString();
    dispatch(
      handleAddQuestion({
        optionOneText: optionOneText!,
        optionTwoText: optionTwoText!,
      })
    );
    navigate(PageRoutes.Home);
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

        <Box component="form" onSubmit={handleOnSubmit}>
          <FormControl fullWidth>
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
            </Stack>
            <Button variant="contained" sx={{ my: 1 }} fullWidth type="submit">
              <Typography variant="h6">Submit</Typography>
            </Button>
          </FormControl>
        </Box>
      </Stack>
    </Container>
  );
}
