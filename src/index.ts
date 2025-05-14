import 'dotenv/config';
import { mastra } from './mastra';

async function main() {
  const agent = await mastra.getAgent('analyticsAgent');

  const result = await agent.generate('Show me page views for today');

  console.log('Agent response:', result.text);
}

main();
