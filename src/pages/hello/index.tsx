import { NextPage } from "next";
import Link from "next/link";

const Hello: NextPage = () => {
  return (
    <div>
      <p>Hello</p>
      <p>
        <Link href="/hello/howareyou">How Are You? Page.</Link>
      </p>
      <p>
        <Link href="/">トップへ戻る</Link>
      </p>
    </div>
  );
};

export default Hello;
