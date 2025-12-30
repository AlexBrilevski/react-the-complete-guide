import { Outlet, useLoaderData, useSubmit, useNavigation } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";
import { useEffect } from "react";

const RootLayout = () => {
  const token = useLoaderData();
  const submit = useSubmit();
  const navigation = useNavigation();

  useEffect(() => {
    if (!token) {
      return;
    }

    setTimeout(() => {
      submit(null, { action: '/auth', method: 'POST' });
    }, 1 * 60 * 60 * 1000);
  }, [token]);

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
