import { Button } from "@mui/material";
import { Link } from "react-router-dom";

function NoMatch() {
  return (
    <>
      <h2>Nothing to see here!</h2>
      <Button variant="contained" component={Link} to="/">
        Go to the home page
      </Button>
    </>
  );
}

export default NoMatch