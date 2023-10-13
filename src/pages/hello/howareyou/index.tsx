import { NextPage } from "next";
import Link from "next/link";

const HelloHowAreYou: NextPage = () => {
  return (
    <div>
      <p>Hello, How Are You?</p>
      <Link href="/">トップへ戻る</Link>
    </div>
  );
};

export default HelloHowAreYou;
