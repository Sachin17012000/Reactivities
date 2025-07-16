import { Grid } from "@mui/material";
import ActiviyList from "./ActiviyList";

type Props = {
  activities: Activity[];
};
export default function ActivityDashboard({ activities }: Props) {
  return (
    <Grid container>
      <Grid size={9}>
        <ActiviyList activities={activities} />
      </Grid>
    </Grid>
  );
}
