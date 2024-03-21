interface TopicShowPageProps {
  params: {
    slug: string;
  };
}

const TopicShowPage = ({ params }: TopicShowPageProps) => {
  const { slug } = params;
  return (
    <div>
      <div className="cpl-span-3">
        <h1 className="text-2xl font-bold mb-2">{slug}</h1>
      </div>
    </div>
  );
};
export default TopicShowPage;
