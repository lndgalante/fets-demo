import { createClient, Mutable } from 'fets';

// read schema from file
import schema from './schema';

// constants
const RICK_AND_MORTY_API = 'https://rickandmortyapi.com/api/';

// schema type definition
type ApiSchema = typeof schema;

// create and export feTS client
export const client = createClient<Mutable<ApiSchema>>({
  endpoint: RICK_AND_MORTY_API,
});
