import { getProviders, signIn as SignIntoProvider } from "next-auth/react";
import Header from "../components/Header";
// Browser...
function signIn({ providers }) {
  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center min-h-screen py-2 -mt-20 text-center px-14 ">
        <img className="w-80" src="https://links.papareact.com/ocw" alt="" />
        <p className="italic text-xs">
          This is not a REAL app, it is built for educational purposes only!
        </p>
        <div className="mt-40">
          {Object.values(providers).map((provider) => (
            <div key={provider.name}>
              <button
                className="bg-blue-500 rounded-lg text-white p-3 "
                onClick={() =>
                  SignIntoProvider(provider.id, { callbackUrl: "/" })
                }
              >
                Sign in with {provider.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
// Server side render
export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: {
      providers,
    },
  };
}
export default signIn;
