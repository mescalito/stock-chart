import { GraphQLDefinitionsFactory } from '@nestjs/graphql';
import { join } from 'path';

const definitionsFactory = new GraphQLDefinitionsFactory();
definitionsFactory.generate({
  typePaths: ['server/**/*.graphql'],
  path: join(process.cwd(), 'server/graphql.schema.ts'),
  outputAs: 'class',
});
