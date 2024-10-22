import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: {
    [process.env.GRAPHQL_ENDPOINT || 'http://localhost:4000/graphql']: {
      headers: {
        Cookie: "introspection=true",
      },
    },
  },
  documents: ['**/*.{ts,tsx}'], 
  generates: {
    './__generated__/': {
      preset: 'client',
      plugins: [],
      presetConfig: {
        gqlTagName: 'gql',
      }
    }
  },
  ignoreNoDocuments: false,
};

export default config;
