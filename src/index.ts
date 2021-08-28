import Bot from './bot';

async function main() {
  const bot = new Bot();
  await bot.start();
}

// eslint-disable-next-line no-console
main().catch(console.error);
