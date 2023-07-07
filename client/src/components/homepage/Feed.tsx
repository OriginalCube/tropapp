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

  const [post, setPost] = React.useState(props.post);
  const [isAuthor, setIsAuthor] = React.useState(false);
  const [isUpdating, setIsUpdating] = React.useState(false);
  const [isRemoving, setIsRemoving] = React.useState(false);
  const [errMessage, setErrMessage] = React.useState("");

  const onUpdate = async () => {
    if (!isUpdating) {
      setIsUpdating(true);
    } else {
      const updatingPost = await Post.updatePost({
        data: { post: post, id: props.id },
      });
      if (updatingPost.status === 200) {
        setIsUpdating(false);
        props.getUserPost();
      }
    }
  };

  const getUserInfo = async () => {
    const getData = await User.getUserData(props.author);
    setUserDetails(getData.data);
  };

  React.useEffect(() => {
    getUserInfo();
    if (props.author === Auth.userKey) {
      setIsAuthor(true);
    } else {
      setIsAuthor(false);
    }
  }, [props.user]);

  return (
    <div className="w-full h-full flex p-2">
      <div className="w-1/6 h-36 flex items-center justify-center">
        <div className="h-auto w-2/3 m-auto flex items-center justify-center">
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
            <p className="text-base font-bold w-1/2 text-left">
              {userDetails.username}{" "}
              <span className="font-medium"> #{userDetails.id} </span>
            </p>{" "}
            {!isAuthor ? (
              <div className="w-1/2 h-auto flex justify-end">
                <div className="flex w-1/4 justify-evenly">
                  <img
                    onClick={onUpdate}
                    className="h-4 w-auto cursor-pointer"
                    src="./assets/icons/reload.png"
                    alt=""
                  />
                  <img
                    className="h-4 w-auto cursor-pointer"
                    src="./assets/icons/remove.png"
                    alt=""
                  />{" "}
                </div>
              </div>
            ) : null}
          </div>
          {isUpdating ? (
            <textarea
              className="text-xl justify-center outline-none border-blue-400 border-2 text-justify"
              rows={5}
              cols={10}
              value={post}
              onChange={(e) => setPost(e.target.value)}
            />
          ) : (
            <p className="text-xl justify-center">{props.post}</p>
          )}
        </div>{" "}
      </div>
    </div>
  );
};

export default Feed;
