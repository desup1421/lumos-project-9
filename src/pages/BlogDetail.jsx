import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
// COMPONENTS
import Header from "../components/Header";
import Banner from "../components/Banner";
// IMAGES
import hands from "../assets/images/hands.png";
// ICONS
import mouse from "../assets/icons/mouse.svg";

import { useSelector, useDispatch } from "react-redux";
import { getBlogDetail } from "../redux/slices/blogSlice";
import parse from "html-react-parser";
import DOMPurify from "dompurify";

const BlogDetail = () => {
  const dispatch = useDispatch();
  const { blog, isLoading, isError, message } = useSelector((state) => state.blog);
  const { id } = useParams();

  useEffect(() => {
    dispatch(getBlogDetail(id));
  }, [dispatch, id]);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>{message.message}</div>;
  }
  console.log(blog.content)

  return (
    <main>
      <Header title="We write article with love." imageRight={hands} />
      <div className="flex justify-center p-10">
        <img className="w-10" src={mouse} alt="mouse icons" />
      </div>

      <section className="p-10 grid gap-5">
        <div className="overflow-hidden">
          <img className="w-full object-cover" src={blog.banner} alt="Office" />
        </div>
        <h2 className="text-4xl font-bold">{blog.title}</h2>
        <div>
          {parse(DOMPurify.sanitize(blog?.content))}
        </div>
      </section>

      <section className="my-10">
        <Banner />
      </section>
    </main>
  );
};

export default BlogDetail;
