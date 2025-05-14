import { Mastra } from '@mastra/core';
import { weatherAgent } from './agents/weather';
import { analyticsAgent } from './agents/analytics';

export const mastra = new Mastra({
  agents: { weatherAgent, analyticsAgent },
});
