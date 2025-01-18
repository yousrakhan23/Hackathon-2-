import { type SchemaTypeDefinition } from 'sanity'
import { productSchema } from './productSchema';
import { categorySchema } from './categories';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [ productSchema, categorySchema ],
}
