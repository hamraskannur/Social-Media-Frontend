import React, { useState } from "react";
import Moment from "react-moment";

const Comment = ({ comment }) => {
  const [Reply, setReply] = useState(false);

  return (
    <>
      <div className="flex comment mt-0 p-2 border-slate-300 rounded-full ">
        <div className="rounded-full h-9 w-9 overflow-hidden border-slate-700 cursor-pointer">
          <img
            src="https://cdn.pixabay.com/photo/2021/04/05/12/39/man-6153298_960_720.jpg"
            alt=""
          />
        </div>
        <div className="ml-3 bg-gray-100 w-full rounded-md ">
          <span className="mt-3 italic text-sm cursor-pointer">{comment.username}</span>
          <Moment
            className="self-center text-gray-500 text-xs ml-2 items-end"
            fromNow
          >
            {comment.createdAt}
          </Moment>
          <div className="info ml-3 mt-2">
            <p>{comment.comment}</p>
          </div>
          <div className="flex mb-1 mt-2">
            <h1 className="self-center text-gray-500 text-xs ml-2 cursor-pointer">Like 2</h1>
            <h1
              onClick={() => setReply(!Reply)}
              className="self-center text-gray-500 text-xs ml-2 cursor-pointer"
            >
              Reply
            </h1>
          </div>
          <hr/>



        {/* replay  */}
          {Reply &&  <div className="ml-16">
            <span className=" mt-3 italic text-sm">{comment.username}</span>
            <Moment
              className="self-center text-gray-500 text-xs ml-2 items-end"
              fromNow
            >
              {comment.createdAt}
            </Moment>
            <div className="info ml-3">
              <p>{comment.comment}</p>
            </div>
            <div className="flex mb-1 ">
              <h1 className="self-center text-gray-500 text-xs ml-2 cursor-pointer">Like 2</h1>
              <h1  onClick={() => setReply(!Reply)} className="self-center text-gray-500 text-xs ml-2 cursor-pointer">
                Reply
              </h1>
            </div>
          </div>}
      {/* replay  */}
        </div>
        <hr></hr>
      </div>
    </>
  );
};

export default Comment;
