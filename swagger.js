// swagger.js
const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Contacts API',
    description: 'API documentation for Temple routes',
  },
  host: 'localhost:3000', 
  schemes: ['https'],
};

const outputFile = './swagger.json'; 
const endpointsFiles = ['./routes/index.js', ]; 


swaggerAutogen(outputFile, endpointsFiles, doc);
