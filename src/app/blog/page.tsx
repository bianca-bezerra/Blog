/* eslint-disable react/jsx-key */
import PostCard from "@/components/post/postCard";

const posts = [
  {
    photo_url: "/winding-tree-towers-over-landscape.jpg",
    title: "title",
    description: "first",
    date: "May 8",
    link: "/blog/1",
  },
  {
    photo_url: "/winding-tree-towers-over-landscape.jpg",
    title: "title",
    description: "first",
    date: "May 8",
    link: "/blog/1",
  },
  {
    photo_url: "/winding-tree-towers-over-landscape.jpg",
    title: "title",
    description: "first",
    date: "May 8",
    link: "/blog/1",
  },
  {
    photo_url: "/winding-tree-towers-over-landscape.jpg",
    title: "title",
    description: "first",
    date: "May 8",
    link: "/blog/1",
  },
  {
    photo_url: "/winding-tree-towers-over-landscape.jpg",
    title: "title",
    description: "first",
    date: "May 8",
    link: "/blog/1",
  },
  {
    photo_url: "/winding-tree-towers-over-landscape.jpg",
    title: "title",
    description: "first",
    date: "May 8",
    link: "/blog/1",
  }
];

const BlogPage = () => {
  return (
    <div className="flex flex-row gap-16 flex-wrap justify-center pt-10">
      {[...posts].map((post, index) => (
        <PostCard post={post} key={index} />
      ))}
    </div>
  );
};

export default BlogPage;
