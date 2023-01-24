import { Button, Stack, TextField } from '@mui/material';
import { useState } from 'react';
import { useCreateMedalMutation, useAllMedalsQuery } from '../graphql/generated';

export default function CreateMedal() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [requirement, setRequirement] = useState('');

  const [createMedal] = useCreateMedalMutation();

  const { refetch } = useAllMedalsQuery();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    createMedal({
      variables: {
        name,
        description,
        image,
        requirement,
      },
    }).then(() => refetch());
  }

  return (
    <Stack spacing={1}>
      <h1>Skapa en medalj!</h1>
      <TextField label="Namn" type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} />
      <TextField label="Description" type="text" id="description" name="description" value={description} onChange={(e) => setDescription(e.target.value)} />
      <TextField type="text" label="Bild" id="image" name="image" value={image} onChange={(e) => setImage(e.target.value)} />
      <TextField label="Krav" type="text" id="requirement" name="requirement" value={requirement} onChange={(e) => setRequirement(e.target.value)} />
      <Button type="submit" variant="contained" onClick={handleSubmit}>Skapa</Button>
    </Stack>
  )
}
