import Stories from "./Stories";
import Posts from "./Posts";
import MiniProfile from "./MiniProfile";
import Suggestions from "./Suggestions";
import { useSession } from "next-auth/react";
function Feed() {
  const { data: session } = useSession();
  return (
    // max-auto center everything
    <main
      className={`grid grid-cols-1 md:grid-cols-2 md:max-w-3xl xl:grid-cols-3 xl:max-w-6xl mx-auto ${
        !session && "!grid-cols-1 !max-w-3xl"
      }`}
    >
      <section className="col-span-2">
        <Stories />
        <Posts />
      </section>
      {session && (
        <section className="hidden xl:inline-grid md:col-span-1">
          <div className="fixed top-20">
            <MiniProfile
              img="https://scontent-vie1-1.xx.fbcdn.net/v/t1.6435-9/199716171_3812342788894365_6007568025747142072_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=dO0igKRF-H0AX_S4qQK&tn=NxQ11tCv_94WiCRE&_nc_ht=scontent-vie1-1.xx&oh=a187dcd08391de9831e9fd5e120d7c47&oe=618BEBC6"
              username="puteaniholla"
            />
            <Suggestions />
          </div>
        </section>
      )}
    </main>
  );
}

export default Feed;
