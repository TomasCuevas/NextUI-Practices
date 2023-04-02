import Head from "next/head";

interface Props {
  children: React.ReactNode;
  title: string;
}

export const MainLayout: React.FC<Props> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <main>{children}</main>
    </>
  );
};
