import express from 'express';
const jwt = require('jsonwebtoken');
require('dotenv').config({ path: 'variables.env' });
import{ ApolloServer}  from 'apollo-server-express';
import {typeDefs} from './data/schema';
import { resolvers } from "./data/resolvers";

const app= express();
const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: async({req}) => {
      const token = req.headers['authorization'];

      if (token !== "null") {
         try {
            const usuarioActual = await jwt.verify(token,  process.env.SECRETO, '24h' );

            console.log(usuarioActual);
            req.usuarioActual = usuarioActual
            return {
              usuarioActual
            }
         } catch (err) {
           console.error(err);
         }
      }
    }
  });



server.applyMiddleware({app});

app.listen({port: 4000}, () => console.log(`http://localhost:400${server.graphqlPath}`));

