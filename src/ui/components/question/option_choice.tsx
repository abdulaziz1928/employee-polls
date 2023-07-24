import { Box, Paper, Typography, Button } from "@mui/material";
import { Option } from "../../../state/modules/questions";

export interface IOptionChoiceProps {
  option: Option;
  submitChoice: (option: Option) => void;
}

export default function OptionChoice(props: IOptionChoiceProps) {
  const { option, submitChoice } = props;

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
      <Button
        variant="contained"
        sx={{ py: 1.5 }}
        fullWidth
        onClick={() => submitChoice(option)}
      >
        <Typography>Click</Typography>
      </Button>
    </>
  );
}
