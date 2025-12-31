import { Outlet, useLoaderData, useSubmit, useNavigation } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";
import { useEffect } from "react";
import { getTokenDuration } from "../utils/auth";

const RootLayout = () => {
  const token = useLoaderData();
  const submit = useSubmit();
  const navigation = useNavigation();

  useEffect(() => {
    if (!token) {
      return;
    }

    if (token === 'EXPIRED') {
      submit(null, { action: '/auth', method: 'POST' });
      return;
    }

    const tokenDuration = getTokenDuration();
    console.log(tokenDuration);

    setTimeout(() => {
      submit(null, { action: '/auth', method: 'POST' });
    }, tokenDuration);
  }, [token, submit]);

  return (
    <>
      <MainNavigation />
      <main>
        {navigation.state === 'loading' && <p style={{ textAlign: 'center' }}>Loading...</p>}
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
