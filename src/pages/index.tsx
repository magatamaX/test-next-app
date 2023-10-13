import { NextPage, GetServerSideProps } from "next";

// eslint-disable-next-line arrow-body-style
const TopPage: NextPage = () => {
  // UseSetPreviousPath();
  // ※現時点ではリダイレクト専用
  return null;
};

export const getServerSideProps: GetServerSideProps = async () => ({
  redirect: {
    permanent: false, // 永続的なリダイレクトかどうか
    destination: "/search/spot", // リダイレクト先
    // destination: 'https://example.com/' // 別サイトでも指定可能
  },
});

export default TopPage;
