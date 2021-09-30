//const Joi = require('joi');
const express = require('express');
const http = require('http');
const jwt = require('express-jwt');
const JwksRsa = require('jwks-rsa');
const app = express();
app.use(express.json());
const routes = require('./routes');
//const jwt = require('jsonwebtoken');
const server =  http.createServer(app)


var checkJwt = jwt({

  secret: JwksRsa.expressJwtSecret({

    cache: true,

    rateLimit: true,

    jwksRequestsPerMinute: 5,

    jwksUri: 'https://your-tenant.auth0.com/.well-known/jwks.json',

  }),

  audience: 'https://api.c0der.io/v1/',

  issuer: 'https://your-tenant.auth0.com/',

  algorithms: ['RS256']

})
  
  
  app.use(express.json())
  
  app.use(
    '/api',
    checkJwt,
    (err, req, res, next) => {
      if (err.name === 'UnauthorizedError') {
        console.log(res.body)
        res.status(401).json(err)
      } else {
        next()
      }
    },
    routes
  )


const port = process.env.PORT || 8001;
server.listen(port, () =>{
    console.log(`port listening at ${port}`);
});