import express from 'express';
import path from 'path';

import { OpenAI } from "langchain/llms/openai";

const PORT = process.env.PORT || 8080;

const app = express();
const model = new OpenAI({
  temperature: 0.7,
})

app.use(express.static(path.join(__dirname, '../public')));

app.get('/', (_, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.get('/ask', async (_, res) => {
  const text = await model.call('Tell me a joke about artificial intelligence.')

  res.send(text)
});

const server = app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT} 🚀`);
});

process.on('SIGINT', () => {
  console.log('\nReceived SIGINT. Shutting down gracefully...');

  server.close((error) => {
    if (error) {
      console.error(error);
      process.exit(1);
    }
  });

  console.log('Server closed successfully.');
  process.exit(0);
});
