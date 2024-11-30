import React, { useEffect, useState } from 'react';
import Footer from './Footer';
import { getAllBlogs } from '../libs/microCMS/client';
import { Blogs } from '../types';
import BlogCard from './BlogCard';
import Loading from './Loading';

const Blog = () => {
  // const { isAuthenticated, user, setUser } = useAuth();
  const [blogs, setBlogs] = useState<Blogs[]>([]);

  useEffect(() => {
    const fetchAllBlogs = async () => {
      try {
        const data = await getAllBlogs();
        setBlogs(data.contents);
        // console.log(blogs);
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };

    setTimeout(() => fetchAllBlogs(), 1000);
  }, []);

  return (
    <>
      <div
        id="wrapper"
        className="w-screen h-fit bg-gradient-to-bl from-slate-800 via-gray-600 to-neutral-400 pt-48 pb-10"
      >
        <div className="flex justify-center mx-auto -mt-10 pt-10 pb-96 px-10 max-w-screen-xl h-fit min-h-screen border-black border-4 rounded bg-white">
          <div className="text-black">
            <div className="w-[1000px] m-auto pb-5">
              <p className="flex text-left mb-1 font-bold text-gray-500 text-2xl dark:text-gray-400">
                ブログ
              </p>
              <span className="block bg-gray-500 w-full h-0.5"></span>
            </div>
            {blogs.length > 0 ? (
              <div className="grid grid-cols-3 gap-4">
                {blogs.map((blog: Blogs) => (
                  <BlogCard blog={blog} key={blog.id} />
                ))}
              </div>
            ) : (
              <Loading />
            )}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Blog;
