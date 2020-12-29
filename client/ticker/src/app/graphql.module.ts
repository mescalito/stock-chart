import { NgModule } from '@angular/core';
import { WebSocketLink } from '@apollo/client/link/ws';
import { APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { split, ApolloClientOptions, InMemoryCache } from '@apollo/client/core';
import { getMainDefinition } from '@apollo/client/utilities';
import { environment } from '../environments/environment';

const { production } = environment;

@NgModule({
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory(httpLink: HttpLink): ApolloClientOptions<any> {
        // Create an http link:
        const http = httpLink.create({
          uri: 'http://localhost:3000/graphql',
        });

        // Create a WebSocket link:
        const ws = new WebSocketLink({
          uri: `ws://localhost:3000/graphql`,
          options: {
            reconnect: true,
          },
        });
        const cache = new InMemoryCache();
        const link = split(
          ({ query }) => {
            let definition = getMainDefinition(query);
            return (
              definition.kind === 'OperationDefinition' &&
              definition.operation === 'subscription'
            );
          },
          ws,
          http,
        );

        return {
          link,
          cache,
          connectToDevTools: !production,
        };
      },
      deps: [HttpLink],
    },
  ],
})
export class GraphQLModule {}
