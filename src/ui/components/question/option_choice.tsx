import { Box, Paper, Typography } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { Option } from "../../../state/modules/questions";
import { useState } from "react";

export interface IOptionChoiceProps {
  option: Option;
  isLoading: boolean;
  submitChoice: (option: Option) => void;
}

export default function OptionChoice(props: IOptionChoiceProps) {
  const { option, isLoading, submitChoice } = props;
  const [voted, setVoted] = useState<boolean>(false);
  return (
    <>
      <Box
        component={Paper}
        sx={{
          width: "100%",
          height: "auto",
          flex: 1,
          flexGrow: 1,
          borderTopLeftRadius: 2.5,
          borderTopRightRadius: 2.5,

          p: 2.5,
        }}
      >
        <Typography variant="h6" align="center">
          {option.text}
        </Typography>
      </Box>
      <LoadingButton
        variant="contained"
        sx={{ py: 1.5 }}
        fullWidth
        onClick={() => {
          setVoted(true);
          submitChoice(option);
        }}
        loading={voted && isLoading}
        disabled={isLoading}
        loadingPosition="center"
      >
        <Typography>Click</Typography>
      </LoadingButton>
    </>
  );
}
