import React from "react";
import Post from "../features/Post";
import { useNavigate } from "react-router-dom";

const TextField = (props: any) => {
  const [post, setPost] = React.useState("");
  const navigate = useNavigate();

  const onSubmit = async () => {
    if (post !== "") {
      const createPost = await Post.createPost(post);
      if (createPost.status === 200) {
        props.getUserPost();
      }
      setPost("");
    }
  };

  const onLogout = () => {
    localStorage.removeItem("tropApp");
    navigate("/"); //find better way to stay off
  };

  const onEdit = () => {
    props.setEdit(!props.edit);
  };

  return (
    <div className="w-full h-24 bg-white rounded-2xl shadow-md flex items-center justify-center">
      <div
        className="hidden h-full md:flex items-center justify-center"
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
        <div className="w-1/3 h-auto flex items-center justify-evenly float-right ">
          <button
            onClick={onSubmit}
            className="m-1 mt-4 md:m-4 border-blue-400 text-white shadow-md hover:bg-slate-200 hover:text-blue-400
        bg-blue-400 border-2 md:p-2 md:w-20 md:text-base rounded-md text-xs p-2 w-12"
          >
            Post
          </button>
          <button
            onClick={onEdit}
            className="m-1 mt-4 md:m-4 border-blue-400 text-white shadow-md hover:bg-slate-200 hover:text-blue-400
        bg-blue-400 border-2 md:p-2 md:w-20 md:text-base rounded-md text-xs p-2 w-12"
          >
            Edit
          </button>
          <button
            onClick={onLogout}
            className="m-1 mt-4 md:m-4 border-blue-400 text-white shadow-md hover:bg-slate-200 hover:text-blue-400
        bg-blue-400 border-2 md:p-2 md:w-20 md:text-base rounded-md text-xs p-2 w-14"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default TextField;
