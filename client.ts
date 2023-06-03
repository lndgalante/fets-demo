import { createClient, Mutable } from 'fets';

// read schema from file
import schema from './schema';

// constants
const RICK_AND_MORTY_API = 'https://rickandmortyapi.com/api/';

// create feTS client
export const client = createClient<Mutable<typeof schema>>({
  endpoint: RICK_AND_MORTY_API,
});
