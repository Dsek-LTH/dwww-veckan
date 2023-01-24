import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Medal, useAllMedalsQuery, useDeleteMedalMutation } from '../graphql/generated';
import Link from 'next/link';

export default function MedalComponent({ medal }: { medal: Medal }) {
  const { refetch } = useAllMedalsQuery();
  const [deleteMedal] = useDeleteMedalMutation();
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={medal.image}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {medal.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {medal.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Link href={`/medaljer/${medal.id}`}>
          <Button size="small" variant="contained">Read more</Button>
        </Link>
        <Button size="small" variant="outlined">Edit</Button>
        <Button size="small" color="error" variant="contained" onClick={() => {
          deleteMedal({ variables: { id: medal.id } })
            .then(() => refetch());
        }} >Delete</Button>
      </CardActions>
    </Card>
  );
}
