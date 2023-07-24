import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { Question } from "../../../state/modules/questions";
import { formatDate } from "../../../state/utils/helpers";
import PageRoutes from "../../../state/types/page_routes";

export interface IPollCardProps {
  question: Question;
}

export default function PollCard(props: IPollCardProps) {
  const { question } = props;
  const { author, optionOne, optionTwo, timestamp, id } = question;

  const date = formatDate(timestamp);
  return (
    <Card elevation={2} sx={{ display: "flex" }}>
      <CardMedia
        sx={{
          display: { xs: "none", sm: "block" },
          width: "7rem",
          height: "7rem",
          pt: 2,
          pl: 2,
        }}
      >
        <Avatar
          sx={{
            width: "auto",
            height: "100%",
          }}
        ></Avatar>
      </CardMedia>
      <CardContent sx={{ flex: 1, display: "block" }}>
        <Box display="flex" justifyContent="space-between" flexWrap="wrap">
          <Box>
            <Typography component="span" color="primary">
              @{author}
            </Typography>
            <Typography component="span"> asks</Typography>
          </Box>
          <Typography color="text.secondary" variant="body2">
            {date}
          </Typography>
        </Box>

        <Typography variant="h5" pb={1.5} pt={1}>
          Would you rather
        </Typography>
        <Typography textOverflow="ellipsis">{optionOne.text}</Typography>
        <Typography
          py={0.5}
          px="3rem"
          sx={{ textAlign: { lg: "center" } }}
          color="text.secondary"
        >
          or
        </Typography>

        <Typography pb={2} textOverflow="ellipsis">
          {optionTwo.text}
        </Typography>
        <Button
          component={Link}
          to={`question/${id}`}
          fullWidth
          variant="contained"
        >
          Vote
        </Button>
      </CardContent>
    </Card>
  );
}