import { client } from './client';

// 1st example
async function firstExample() {
  const response = await client['/character'].get();
  const characters = await response.json();

  console.log('\n ~ mod ~ characters:', characters.info);
  console.log('\n ~ mod ~ characters:', characters.info.count);
}

firstExample();

// 2nd example
async function secondExample() {
  const response = await client['/character/{id}'].get({
    params: {
      id: '1',
    },
  });
  const character = await response.json();

  console.log('\n ~ mod ~ character:', character);
}

secondExample();
