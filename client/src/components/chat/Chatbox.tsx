import React from "react";

const Chatbox = (props: any) => {
  const [isAuthor, setIsAuthor] = React.useState(false);

  React.useEffect(() => {
    if (props.username === props.u_id) {
      setIsAuthor(true);
    } else {
      setIsAuthor(false);
    }
  }, []);

  return (
    <div className="h-20 w-full flex mt-12">
      {!isAuthor ? (
        <div
          className="h-auto flex items-center justify-center"
          style={{ width: "10%" }}
        >
          <img
            className=" w-1/2 h-auto rounded-full"
            src={`/assets/profile/${props.picture}.webp`}
            alt=""
          />
        </div>
      ) : null}
      <div className={`h-auto`} style={{ width: "90%" }}>
        <p
          className={`text-xl font-bold ${
            isAuthor ? "text-right" : "text-left"
          }`}
        >
          {props.username}
          <span className="text-base font-medium"> #{props.id}</span>
        </p>
        <p
          className={`text-base font-thin ${
            isAuthor ? "text-right" : "text-left"
          }`}
        >
          {props.message}
        </p>
      </div>
      {isAuthor ? (
        <div
          className="h-auto flex items-center justify-center"
          style={{ width: "10%" }}
        >
          <img
            className=" w-1/2 h-auto rounded-full"
            src={`/assets/profile/${props.picture}.webp`}
            alt=""
          />
        </div>
      ) : null}
    </div>
  );
};

export default Chatbox;
