import { createClient } from 'microcms-js-sdk';

const serviceDomain = import.meta.env.VITE_SERVICE_DOMAIN;
// const serviceBlogDomain = import.meta.env.VITE_BLOG_SERVICE_DOMAIN;
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

// export const blogClient = createClient({
//   serviceDomain: serviceBlogDomain,
//   apiKey: apiKey,
// });

export const getAllBlogs = async () => {
  try {
    const allBlogs = await client.get({
      endpoint: 'blogs',
    });
    console.log(allBlogs);
    return allBlogs;
  } catch (error) {
    console.error('Error fetching articles:', error);
    throw error;
  }
};
