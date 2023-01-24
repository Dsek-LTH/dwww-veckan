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
