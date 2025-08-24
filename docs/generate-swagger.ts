import fs from 'fs';
import swaggerAutogen from 'swagger-autogen';

const outputFile = './swagger-output.json'; // gera dentro de docs/
const endpointsFiles = ['./swagger-helper.ts']; // helper na mesma pasta

const doc = {
  info: {
    title: 'API Playwright Tests',
    description: 'Documentação da API testada pelo Playwright',
    version: '1.0.0',
  },
  host: 'jsonplaceholder.typicode.com',
  schemes: ['https'],
};

// Garante que a pasta existe (opcional)
if (!fs.existsSync('./')) {
  fs.mkdirSync('./', { recursive: true });
}

async function generate() {
  try {
    const result = await swaggerAutogen(outputFile, endpointsFiles, doc);
    console.log('✅ Swagger JSON gerado com sucesso!', result);
  } catch (err) {
    console.error('❌ Erro durante a geração do Swagger:', err);
  }
}

generate();
