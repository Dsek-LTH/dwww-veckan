# Apollo setup

Installera graphql && apollo

`npm install @apollo/server graphql`

Skapa en fil som heter `index.ts` under `src` mappen

```bash
mkdir src
touch src/index.ts
```

Installera @types/node om ni inte har gjort det

`npm install --save-dev typescript @types/node`

Lägg till dessa "scripts" i package.json filen

```json
  "scripts": {
    "compile": "tsc",
    "start": "ts-node ./src/index.ts"
  },
```

Skapa en fil som heter `schema.graphql` i `src` mappen

Fyll i vårt graphql schema

# GraphQL Codegen

Installera dependencies för att generera typer från schemat

`npm install -D @graphql-codegen/cli @graphql-codegen/typescript @graphql-codegen/typescript-resolvers`

Kör kommandot för att sätta igång med graphql-codegen

`npx graphql-code-generator init`

