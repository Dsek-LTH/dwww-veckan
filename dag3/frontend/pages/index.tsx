import Container from '@mui/material/Container';
import { useAllMedalsQuery } from '../graphql/generated';
import MedalComponent from '../components/Medal';

export default function Home() {
  const { data } = useAllMedalsQuery();
  console.log(data);
  return (
    <Container maxWidth="lg">
      {data?.medals.map((medal) => (
        <MedalComponent medal={medal} />
      ))}
    </Container>
  );
}
