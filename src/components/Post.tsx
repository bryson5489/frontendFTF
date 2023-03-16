import { FormEvent, useState } from "react";
import "./Post.css";

const Post = () => {
  const [post, setPost] = useState("");
  const submitHandler = (e: FormEvent): void => {
    e.preventDefault();
  };
  return (
    <form
      className="Post"
      onSubmit={(e) => {
        submitHandler(e);
      }}
    >
      <label htmlFor=""></label>
      <input type="text" />
      <label htmlFor=""></label>
      <input type="text" />
      <label htmlFor=""></label>
      <input type="text" />
      <button>Make new Farm</button>
    </form>
  );
};

export default Post;
