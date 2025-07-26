import { Grid } from "@mui/material";
import ActiviyList from "./ActiviyList";
import ActivityFilters from "./ActivityFilters";

export default function ActivityDashboard() {
  return (
    <Grid container spacing={3}>
      <Grid size={8}>
        <ActiviyList />
      </Grid>
      <Grid
        size={4}
        sx={{ position: "sticky", top: 112, alignSelf: "flex-start" }}
      >
        <ActivityFilters />
      </Grid>
    </Grid>
  );
}
