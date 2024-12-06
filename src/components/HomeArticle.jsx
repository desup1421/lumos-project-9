import React, { useEffect } from "react";
import HeaderFilter from "../components/HeaderFilter";
import Card from "../components/Card";
import { useSelector, useDispatch } from "react-redux";
import { getAllBlog } from "../redux/slices/blogSlice";

const HomeArticle = () => {
  const dispatch = useDispatch();
  const { blogs, isLoading, isError, message } = useSelector((state) => state.blog);

  useEffect(() => {
    dispatch(getAllBlog(1));
  }, [dispatch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>{message.message}</div>;
  }

  return (
    <>
      <HeaderFilter title="Our Work So Far" tags={["See All"]} />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 md:px-32 gap-5">
        {blogs.map((item, index) => (
          <Card key={index} data={item} readMore={true} />
        ))}
      </div>
    </>
  );
};

export default HomeArticle;
