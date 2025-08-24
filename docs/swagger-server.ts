import express from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerFile from './swagger-output.json'; // importa o JSON gerado

const app = express();

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.listen(3000, () => {
  console.log('🚀 Swagger rodando em http://localhost:3000/api-docs');
});
