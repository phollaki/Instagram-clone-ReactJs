import {
  BookmarkIcon,
  ChatIcon,
  DotsHorizontalIcon,
  EmojiHappyIcon,
  HeartIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/outline";
import { HeartIcon as HeartIconFilled } from "@heroicons/react/solid";
import { useState } from "react";
function Post({ id, username, caption, img, userImg }) {
  const [liked, setLiked] = useState(false);
  return (
    <div className="border rounded mt-10 bg-white">
      <div className="flex items-center p-5 ">
        <img
          src={userImg}
          className="h-12 w-12 rounded-full object-contain border p-1"
          alt=""
        />
        <p className=" ml-5 font-semibold flex-1 cursor-pointer">{username}</p>
        <DotsHorizontalIcon className="h-5" />
      </div>
      <div>
        <img src={img} alt="" className="object-cover w-full" />
      </div>
      <div className="flex items-center justify-between px-4 pt-4">
        <div className="flex space-x-4">
          {!liked ? (
            <HeartIcon
              onClick={() => setLiked(!liked)}
              className="commentIcon"
            />
          ) : (
            <HeartIconFilled
              onClick={() => setLiked(!liked)}
              className="h-7 cursor-pointer text-red-600 hover:scale-125"
            />
          )}
          <ChatIcon className="commentIcon" />
          <PaperAirplaneIcon className="commentIcon rotate-45" />
        </div>

        <BookmarkIcon className="commentIcon" />
      </div>

      <p className="p-5 flex">
        <span className="font-semibold mr-1">{username}</span>
        <p className="truncate">{caption}</p>
      </p>

      <form className="flex items-center p-4">
        <EmojiHappyIcon className="h-7 " />
        <input
          type="text"
          className="border-none flex-1 focus:ring-0 outline-none"
          placeholder="Add a comment"
        />
        <button className="font-semibold text-blue-400">Post</button>
      </form>
    </div>
  );
}

export default Post;
