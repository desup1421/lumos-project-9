import React, { useEffect } from "react";
import Card from "./Card";
import { getUsers } from "../redux/slices/userSlice";
import { useDispatch, useSelector } from "react-redux";

const UserList = () => {
  const dispatch = useDispatch();
  const { users, isLoading } = useSelector((state) => state.user);
  console.log(users)
  console.log(isLoading)

  useEffect(() => {
      dispatch(getUsers());
    }, [dispatch]);
    
  if (isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-20">
      {users?.data?.map((item, index) => (
        <Card key={index} data={item} />
      ))}
    </div>
  );
};

export default UserList;
