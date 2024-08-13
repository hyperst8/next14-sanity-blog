import BlogPosts from "./components/BlogPosts";

export const revalidate = 30; // revalidate this page every 30 seconds

export default function Home() {
  return (
    <div className="my-10">
      <BlogPosts />
    </div>
  );
}
