import { PostWithData } from "@/db/queries/post";
import paths from "@/paths";
import Link from "next/link";

interface PostListProp {
  fetchData: () => Promise<PostWithData[]>;
}
const PostList = async ({ fetchData }: PostListProp) => {
  const posts = await fetchData();
  const renderedPost = posts.map((p) => {
    const topicSlug = p.topic.slug;

    if (!topicSlug) {
      throw new Error("Need a slug to link to a post");
    }

    return (
      <div key={p.id} className="border rounded p-2">
        <Link href={paths.postShow(topicSlug, p.id)}>
          <h3 className="text-lg font-bold">{p.title}</h3>
          <div className="flex flex-row gap-8">
            <p className="text-xs text-gray-400">By {p.user.name}</p>
            <p className="text-xs text-gray-400">
              {p._count.comments} comments
            </p>
          </div>
        </Link>
      </div>
    );
  });

  return <div className="space-y-2">{renderedPost}</div>;
};
export default PostList;
