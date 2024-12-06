import React, { useEffect } from "react";
// COMPONENTS
import Header from "../components/Header";
import Card from "../components/Card";
import Banner from "../components/Banner";
// IMAGES
import hands from "../assets/images/hands.png";
// ICONS
import mouse from "../assets/icons/mouse.svg";

import { useSelector, useDispatch } from "react-redux";
import { getAllBlog } from "../redux/slices/blogSlice";

const BlogList = () => {
  const dispatch = useDispatch();
  const { blogs, isLoading, isError, message } = useSelector((state) => state.blog);
  
  useEffect(() => {
    dispatch(getAllBlog(1));
  }, [dispatch]);

  console.log(blogs)

  if(isLoading) {
    return <div>Loading...</div>
  }

  if(isError) {
    return <div>{message.message}</div>
  }

  return (
    <main>
      <Header
        title="Read best articles from us"
        imageLeft={hands}
        imageRight={hands}
      />
      <div className="flex justify-center p-5">
        <img className="w-10" src={mouse} alt="mouse icon" />
      </div>

      <section className="p-10 md:p-14 lg:p-20">
        <h2 className="text-2xl font-bold my-10 text-center">
          Meet the heroes behind the magic
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-20">
          {blogs?.map((item, index) => (
            <Card key={index} readMore={true} data={item} />
          ))}
        </div>
        <div className="flex justify-center my-20">
          <button className="bg-black text-white py-3 px-5">Load More</button>
        </div>
      </section>

      <section className="my-14">
        <Banner />
      </section>
    </main>
  );
};

export default BlogList;
