import Link from "next/link";

const Home = () => {
  return (
    <div>
      <h2>かふぇいんぱわぁのホームページ</h2>
      <ul>
        <li>
          <Link href="/r/about" className="text-coffee-500 hover:underline">
            About
          </Link>
        </li>
        <li>
          <Link href="/r/works" className="text-coffee-500 hover:underline">
            Works
          </Link>
        </li>
        <li>
          <Link href="/r/gyagu" className="text-coffee-500 hover:underline">
            Gyagu
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
