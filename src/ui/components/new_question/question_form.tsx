import { LoadingButton } from "@mui/lab";
import { Box, FormControl, Stack, TextField, Typography } from "@mui/material";
import { FormEvent } from "react";

export interface IQuestionFormProps {
  onSubmit: (event: FormEvent<HTMLFormElement>) => Promise<void>;
  isLoading: boolean;
}

export default function QuestionForm(props: IQuestionFormProps) {
  const { onSubmit, isLoading } = props;

  return (
    <Box component="form" onSubmit={onSubmit}>
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
        <LoadingButton
          variant="contained"
          sx={{ my: 1 }}
          fullWidth
          type="submit"
          loading={isLoading}
          loadingPosition="center"
        >
          <Typography variant="h6">Submit</Typography>
        </LoadingButton>
      </FormControl>
    </Box>
  );
}
