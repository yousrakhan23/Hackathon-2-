import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId: "enqj5nfc",
  dataset:"production",
  apiVersion:"2025-01-14",
  useCdn: false, // Set to false if statically generating pages, using ISR or tag-based revalidation
})

export const getProducts = async () => {
  return await client.fetch(`*[_type == "products"]`);
};
export const getCategories = async () => {
  return await client.fetch(`*[_type == "categories"]`);
};