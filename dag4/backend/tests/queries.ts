export const readAllMedals = `
query {
  medals {
    name
    description
    image
    requirement
  }
}
`;

export const createMedal = `
mutation CreateMedal ($name: String!, $description: String!, $image: String!, $requirement: String!) {
  createMedal(name: $name, description: $description, image: $image, requirement: $requirement) {
    name
    description
    image
    requirement
  }
}
`;

export const updateMedal = `
mutation($id: Int!, $input: UpdateMedal!) {
  updateMedal(id: $id, input: $input) {
    name
    description
    image
    requirement
  }
}
`;

export const deleteMedal = `
mutation DeleteMedal ($id: Int!) {
  deleteMedal(id: $id) {
    name
    description
    image
    requirement
  }
} 
`;
