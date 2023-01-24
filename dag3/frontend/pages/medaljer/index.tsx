import Container from '@mui/material/Container';
import { useAllMedalsQuery } from '../../graphql/generated';
import MedalComponent from '../../components/Medal';
import CreateMedal from '../../components/CreateMedal';
import { Stack } from '@mui/material';

export default function Home() {
  const { data } = useAllMedalsQuery();
  console.log(data);
  return (
    <Container maxWidth="lg">
      <Stack direction="row" flexWrap="wrap">

        {data?.medals.map((medal) => (
          <MedalComponent medal={medal} />
        ))}
      </Stack>
      <CreateMedal />
    </Container>
  );
}
