import {ImageType} from "../api/books-list-api";

export const converterURLImages = (data: ImageType[]): string[] => data.map((img) => `https://strapi.cleverland.by${img.url}`)