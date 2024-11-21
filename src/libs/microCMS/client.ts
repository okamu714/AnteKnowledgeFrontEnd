import { createClient } from 'microcms-js-sdk';

const serviceDomain = import.meta.env.VITE_SERVICE_DOMAIN;
const apiKey = import.meta.env.VITE_API_KEY;

export const client = createClient({
  serviceDomain: serviceDomain,
  apiKey: apiKey,
});
export const getAllBooks = async () => {
  try {
    const allBooks = await client.get({
      endpoint: 'ebook',
    });
    console.log(allBooks);
    return allBooks;
  } catch (error) {
    console.error('Error fetching articles:', error);
    throw error;
  }
};
