const fs = require('fs');
const path = require('path');

const origem = path.join(__dirname, '..', '.env.example');
const destino = path.join(__dirname, '..', '.env');

if (fs.existsSync(destino)) {
  console.log('.env já existe. Nada foi sobrescrito.');
} else {
  fs.copyFileSync(origem, destino);
  console.log('.env criado com sucesso a partir de .env.example');
}
