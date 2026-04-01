import { createDb, Options } from '@olegpoliakov/db';

import * as schemas from './schemas/index.ts';

export type Schemas = typeof schemas;

export { schemas };

const {
    DB_CONNECTION_STRING = 'mongodb://localhost:27017/tasks'
} = process.env;

export default (options: Options) => createDb(DB_CONNECTION_STRING, schemas, options);