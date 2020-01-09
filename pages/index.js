import Link from "next/link";

const Index = () => {
  return (
    <div>
      <Link href="/about">
        <a>About Page</a>
      </Link>
      <p>Hello next.js</p>
    </div>
  );
};

export default Index;
