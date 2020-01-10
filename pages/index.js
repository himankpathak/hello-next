import Link from "next/link";

const Index = () => {
  return (
    <div>
      <Link href="/about">
        <a title="About Page2">About Page</a>
      </Link>
      <p>Hello next.js</p>
    </div>
  );
};

export default Index;
