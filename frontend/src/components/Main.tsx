import React, { useState } from "react";
import { Container, Typography, TextField, Button } from "@mui/material";

const Main = () => {
  const [wordCount, setWordCount] = useState(0);
  const [essay, setEssay] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = () => {
    if (essay.length === 0) {
      setError(true);
      return;
    }
    setWordCount(essay.split(/[,\s+]/).length);
  };

  return (
    <div>
      <Container style={{ marginTop: 50 }}>
        <Typography variant="h4" component="h1" gutterBottom align="center">
          Word Count
        </Typography>
        <TextField
          value={essay}
          onChange={(e) => setEssay(e.target.value)}
          multiline
          rows={10}
          variant="outlined"
          placeholder="Once upon a time..."
          fullWidth
        />
        <Button
          variant="contained"
          color="primary"
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "20px 0",
          }}
          onClick={handleSubmit}
        >
          Submit
        </Button>
        {wordCount > 0 && (
          <Typography variant="h4" color={error ? "error" : "primary"}>
            {error
              ? "ERROR: You need to type some text"
              : `Word Count: ${wordCount}`}
          </Typography>
        )}
      </Container>
    </div>
  );
};

export default Main;
