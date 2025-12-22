import MainNavigation from "../components/MainNavigation";

const Error404 = () => {
  return (
    <>
      <MainNavigation />
      <main>
        <h1>An error occured!</h1>
        <p>Cound not find this page.</p>
      </main>
    </>
  );
};

export default Error404;
