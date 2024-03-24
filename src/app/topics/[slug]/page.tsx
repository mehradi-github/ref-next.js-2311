import PostList from "@/components/posts/post-list";
import PostCreateForm from "./posts/post-create-form";
import { fetchPostsByTopicSlug } from "@/db/queries/post";

interface TopicShowPageProps {
  params: {
    slug: string;
  };
}

const TopicShowPage = ({ params }: TopicShowPageProps) => {
  const { slug } = params;
  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      <div className="col-span-3">
        <h1 className="text-2xl font-bold mb-2">{slug}</h1>
        <PostList fetchData={() => fetchPostsByTopicSlug(slug)} />
      </div>
      <div className=" flex justify-center">
        <PostCreateForm slug={slug} />
      </div>
    </div>
  );
};
export default TopicShowPage;
