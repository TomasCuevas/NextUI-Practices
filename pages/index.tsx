import { NextPage } from "next";

//* layout *//
import { MainLayout } from "@/layouts";

const HomePage: NextPage = () => {
  return (
    <MainLayout title="Home">
      <h1>Next UI</h1>
    </MainLayout>
  );
};

export default HomePage;
