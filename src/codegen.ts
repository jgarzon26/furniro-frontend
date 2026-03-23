import { CodegenConfig } from '@graphql-codegen/cli';
import { GraphQLURL } from './lib/api';

const config: CodegenConfig = {
  overwrite: true,
  schema: GraphQLURL,
  documents: ["src/lib/documents/*.{ts,tsx}"],
  ignoreNoDocuments: true,
  generates: {
    'src/types/generated/graphql.ts': {
      plugins: ["typescript", "typescript-operations"],
      config: {
        avoidOptionals: {
          field: true,
          inputValue: false,
        },
        defaultScalarType: 'unknown',
        nonOptionalTypename: true,
        skipTypeNameForRoot: true,
      },
    },
  },
};

export default config;