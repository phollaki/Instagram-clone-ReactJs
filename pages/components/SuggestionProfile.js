function SuggestionProfile({ avatar, username, companyName }) {
  return (
    <div className="flex items-center justify-between mt-3">
      <div className="flex">
        <img
          className="h-10 w-10 border rounded-full p-[2px] object-contain cursor-pointer"
          src={avatar}
          alt=""
        />
        <div className="ml-2 flex-1">
          <h2 className="font-semibold truncate w-20 cursor-pointer">
            {username}
          </h2>
          <p className="truncate w-22 text-gray-600 text-sm ">{companyName}</p>
        </div>
      </div>
      <button className="text-blue-400 font-semibold">Follow</button>
    </div>
  );
}

export default SuggestionProfile;
