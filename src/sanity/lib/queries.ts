import { defineQuery } from "next-sanity";

export const getProducts = `*[_type == "products"]{
    _id,
    title,
    description,
    "imageUrl": image.asset->url,
    price,
    inventory
  }`;
  