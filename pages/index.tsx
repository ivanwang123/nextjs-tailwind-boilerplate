import Link from "next/link";
import Layout from "../components/Layout";

function IndexPage() {
  return (
    <Layout title="Home">
      <h1>Hello Next.js 👋</h1>
      <p>
        <Link href="/">
          <a>Home</a>
        </Link>
      </p>
    </Layout>
  );
}

export default IndexPage;
