import PostShow from "@/components/posts/post-show";
import paths from "@/paths";
import Link from "next/link";

interface PostShowPageProps {
  params: {
    slug: string;
    postId: string;
  };
}
const PostShowPage = async ({ params }: PostShowPageProps) => {
  const { slug, postId } = params;
  return (
    <div className="space-y-3">
      <Link className="underline decoration-solid" href={paths.topicShow(slug)}>
        {"<"} Back to {slug}
      </Link>
      <PostShow postId={postId} />

      {/* <CommentCreateForm postId={postId} /> */}
      {/* <CommentList /> */}
    </div>
  );
};
export default PostShowPage;
