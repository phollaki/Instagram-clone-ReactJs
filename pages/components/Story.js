function Story({ img, username, avatar }) {
  console.log(img, username, avatar);
  return (
    <div className="">
      <img
        className="rounded-full w-14 h-14 p-[1.5px] border-red-500 border-2 object-contain cursor-pointer hover:scale-110 transition duration-200 ease-out"
        src={img}
        alt=""
      />
      <p className="text-xs w-14 truncate text-center">{username}</p>
    </div>
  );
}

export default Story;
