import React from "react";
import Post from "../features/Post";

const TextField = (props: any) => {
  const [post, setPost] = React.useState("");

  const onSubmit = async () => {
    if (post !== "") {
      const createPost = await Post.createPost(post);
      if (createPost.status === 200) {
        props.getUserPost();
      }
      setPost("");
    }
  };

  return (
    <div className="w-full h-24 bg-white rounded-2xl shadow-md flex items-center justify-center">
      <div
        className="h-full md:flex items-center justify-center hidden "
        style={{ width: "10%" }}
      >
        <div className="h-full w-4/6 flex justify-center items-center">
          <img
            src={`./assets/profile/${props.userDetails.picture}.webp`}
            className="h-auto w-full rounded-full"
            alt=""
          />
        </div>
      </div>
      <div style={{ width: "88%" }} className="h-5/6 flex-col">
        <div className="w-full h-full">
          <textarea
            value={post}
            onChange={(e) => setPost(e.target.value)}
            className="h-full w-full text-xl font-light p-4 rounded-md outline-none"
            placeholder="Hey there!"
          ></textarea>
        </div>
        <button
          onClick={onSubmit}
          className="float-right m-4 border-blue-400 text-white shadow-md hover:bg-slate-200 hover:text-blue-400
        bg-blue-400 border-2 p-2 w-20 rounded-md"
        >
          Post
        </button>
      </div>
    </div>
  );
};

export default TextField;
