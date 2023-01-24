export const readAllMedals = `
query {
  medals {
    id
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
    id
    name
    description
    image
    requirement
  }
}
`;
