import Container from '@mui/material/Container';
import { useOneMedalQuery } from '../../graphql/generated';
import MedalComponent from '../../components/Medal';
import { useRouter } from 'next/router';
import { CircularProgress, Typography } from '@mui/material';

export default function Home() {
  const router = useRouter();
  const id = Number.parseInt(router.query.id as string);
  const { data, loading } = useOneMedalQuery({ variables: { id: id } });
  if (loading) {
    return (
      <CircularProgress />
    )
  }

  if (!data?.medal) {
    return (
      <h1>Medal not found</h1>
    )
  }

  return (
    <Container maxWidth="lg">
      <MedalComponent medal={data.medal} />
      <Typography>För få den här medaljen behöver du: {data.medal.requirement}</Typography>
    </Container>
  );
}
