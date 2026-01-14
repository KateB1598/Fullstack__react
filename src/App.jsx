import "./App.css";
import Button from "@mui/material/Button";
//import { Typography } from "@mui/material";
import Typography from "@mui/material/Typography";
import { width } from "@mui/system";

function App() {
  return (
    <>
      <Typography variant="h2">Heading</Typography>
      <Button sx={{ width: 300 }} variant="contained">
        Contained
      </Button>
    </>
  );
}

export default App;
