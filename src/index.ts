import { createDb, Options } from '@olegpolyakov/db';

import * as schemas from './schemas/index.ts';

export type Schemas = typeof schemas;

export { schemas };

export default (connectionString: string, options: Options) => createDb(connectionString, schemas, options);