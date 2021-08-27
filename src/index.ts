import Bot from './bot';

async function main() {
  const bot = new Bot();
  await bot.start();
}

main().catch(console.error);
