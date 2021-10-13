import { signOut, useSession } from "next-auth/react";

function MiniProfile({ img, username }) {
  const { data: session } = useSession();
  console.log(session);
  return (
    <div className="flex items-center justify-between mt-10 ml-10">
      <img
        src={session?.user?.image}
        alt=""
        className="h-16 w-16 border object-contain rounded-full p-[2px]"
      />
      <div>
        <h2 className="font-bold">{session?.user?.username}</h2>
        <h3 className="text-sm text-gray-400">Welcome to instagram</h3>
      </div>

      <button className=" font-semibold text-blue-400" onClick={signOut}>
        Sign Out
      </button>
    </div>
  );
}

export default MiniProfile;
