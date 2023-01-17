Installera graphql && apollo

`npm install @apollo/server graphql`

Skapa en fil som heter `index.ts` under `src` mappen

```bash
mkdir src
touch src/index.ts
```

Installera @types/node om ni inte har gjort det

`npm install --save-dev typescript @types/node`

Lägg till denna configuration i tsconfig.json

```json
{
  "compilerOptions": {
    "rootDirs": ["src"],
    "outDir": "dist",
    "lib": ["es2020"],
    "target": "es2020",
    "module": "esnext",
    "moduleResolution": "node",
    "esModuleInterop": true,
    "types": ["node"]
  }
}
```

Lägg till dessa "scripts" i package.json filen

```json
  "scripts": {
    "compile": "tsc",
    "start": "ts-node ./src/index.ts"
  },
```