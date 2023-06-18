import { login, mastodon } from 'masto';
import { NewStatusHandlers } from './Handlers/NewStatusHandlers.ts';
import path from 'node:path';

console.info('Starting Deep State Mastodon Bot...');
console.debug(`${process.env["INSTANCE"]} instance. ${process.env["TOKEN"]} access token.`)

const masto = await login({
  url: process.env["INSTANCE"] as string,
  accessToken: process.env["TOKEN"] as string,
});

const stream = await masto.v1.stream.streamCommunityTimeline();

stream.on('update', (status: mastodon.v1.Status)=>{
  NewStatusHandlers.MalarkeyLevel(status, masto);
});
