import React from "react";
import User from "../features/User";
import Auth from "../features/Auth";
import Post from "../features/Post";

const Feed = (props: any) => {
  const [userDetails, setUserDetails] = React.useState({
    username: "",
    picture: "",
    id: "",
  });
  const date = new Date(props.date);
  const [post, setPost] = React.useState(props.post);
  const [isAuthor, setIsAuthor] = React.useState(false);
  const [isUpdating, setIsUpdating] = React.useState(false);
  const [isRemoving, setIsRemoving] = React.useState(false);
  const [errMessage, setErrMessage] = React.useState("");

  const onUpdate = async () => {
    if (!isUpdating) {
      setIsUpdating(true);
    } else {
      if (post.length > 0 && post !== props.psot) {
        const updatingPost = await Post.updatePost({
          data: { post: post, id: props.id },
        });
        if (updatingPost.status === 200) {
          props.getUserPost();
        }
        setErrMessage("");
      } else {
        setErrMessage("Invalid post material");
      }
      setIsUpdating(false);
    }
  };

  const onDelete = async () => {
    if (!isRemoving) {
      setIsRemoving(true);
      setErrMessage("Are you sure");
    } else {
      const deletePost = await Post.deletePost(props.id);
      if (deletePost.status === 200) {
        props.getUserPost();
      }
      setErrMessage("");
    }
  };

  const getUserInfo = async () => {
    const getData = await User.getUserData(props.author);
    setUserDetails(getData.data);
  };

  const checkAuthor = async () => {
    if (props.author === (await Auth.getKey())) {
      setIsAuthor(true);
    } else {
      setIsAuthor(false);
    }
  };

  React.useEffect(() => {
    getUserInfo();
    checkAuthor();
  }, [props.id]);

  return (
    <div className="w-full h-full flex p-2">
      <div className="w-1/6 md:h-36 h-full flex items-center justify-center  ">
        <div className="h-auto md:w-3/5 w-full mt-3 mb:m-auto flex items-center justify-center">
          <img
            src={`./assets/profile/${userDetails.picture}.webp`}
            className="w-full h-full rounded-full"
            alt=""
          />
        </div>
      </div>
      <div className="w-5/6 h-auto flex items-center justify-center p-2">
        <div className="flex-col w-full h-full flex">
          <div className="w-full h-auto flex">
            <p className="mb:text-base text-md font-bold w-1/2 text-left">
              {userDetails.username}
              <span className="text-sm md:font-medium">
                {" "}
                #{userDetails.id}{" "}
              </span>
            </p>{" "}
            {isAuthor ? (
              <div className="w-1/2 h-auto flex items-center justify-end">
                <p className="font-medium text-red-500">{errMessage}</p>
                <div className="flex w-1/4 justify-evenly">
                  <img
                    onClick={onUpdate}
                    className="h-4 w-auto cursor-pointer"
                    src="./assets/icons/reload.png"
                    alt=""
                  />
                  <img
                    onClick={onDelete}
                    className="ml-2 mb:ml-0 h-4 w-auto cursor-pointer"
                    src="./assets/icons/remove.png"
                    alt=""
                  />{" "}
                </div>
              </div>
            ) : null}
          </div>
          <div className="w-full h-auto">
            {isUpdating ? (
              <textarea
                className="text-sm mb:text-xl justify-center outline-none border-blue-400 border-2 text-justify p-4 rounded-md"
                rows={5}
                cols={10}
                value={post}
                onChange={(e) => setPost(e.target.value)}
              />
            ) : (
              <p className="text-sm mb:text-xl justify-center">{props.post}</p>
            )}{" "}
          </div>
          <p className="font-light text-xs mb:text-sm mt-2">
            {date.getHours() + ":"}
            {date.getMinutes() < 10
              ? "0" + date.getMinutes()
              : date.getMinutes()}
          </p>
        </div>{" "}
      </div>
    </div>
  );
};

export default Feed;
