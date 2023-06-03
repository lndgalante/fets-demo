import { promises as fs } from 'fs';
import prettier from 'prettier';
import { createClient, Mutable } from 'fets';

// Links
// https://github.com/OAI/OpenAPI-Specification

// 1. Download OpenAPI schema from API and save it to fs
async function getOpenApiSchema(schemaJsonUrl: string) {
  // const response = await fetch(schemaJsonUrl);
  // const json = await response.json();

  // TODO: Remove this when we could fetch the Schema
  const schema = await fs.readFile('schema.json', 'utf-8');
  console.log('\n ~ getOpenApiSchema ~ schema:', schema);
  const json = JSON.parse(schema);

  // until here -------------

  const jsonWithExport = `export default ${JSON.stringify(json, null, 2)} as const`;
  const content = prettier.format(jsonWithExport, { parser: 'typescript' });

  await fs.writeFile('schema.ts', content);
}

// 3. Run the demo
async function mod() {
  const schemaJsonUrl = 'blob:https://app.swaggerhub.com/7adedd9a-597e-4f4d-9bfa-06434e26d3e5';

  await getOpenApiSchema(schemaJsonUrl);
}

mod();
