import { Grid } from "@mui/material";
import ActiviyList from "./ActiviyList";

export default function ActivityDashboard() {
  return (
    <Grid container spacing={3}>
      <Grid size={7}>
        <ActiviyList />
      </Grid>
      <Grid size={5}>Activity filters go here</Grid>
    </Grid>
  );
}
