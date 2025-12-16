import Grid from '@mui/material/Grid';
import HairCutCard from '../components/HairCutCard';
import gallery from '../data/gallery';

export default function Gallery() {
  return (
     <Grid container spacing={2} justifyContent="center" paddingTop={"20px"}>
      {gallery.map(cut => (
        <Grid item key={cut.id}>
          <HairCutCard {...cut} />
        </Grid>
      ))}
    </Grid>
  );
}
