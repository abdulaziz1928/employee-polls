import { Box, Container, Typography } from "@mui/material";
export default function NewQuestionPage() {
  return (
    <Box sx={{ p: 3 }}>
      <Container maxWidth="md">
        <Typography
          component="h1"
          variant="h3"
          align="center"
          color="text.primary"
        >
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
      </Container>
    </Box>
  );
}
