import { type SchemaTypeDefinition } from 'sanity'
import { productSchema } from './productSchema';
import { categorySchema } from './categories';
import { order }  from './order';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [ productSchema, categorySchema, order ],
}
