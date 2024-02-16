interface SnippetEditPageProps {
  params: {
    id: string;
  };
}
const SnippetEditPage = (props: SnippetEditPageProps) => {
  const id = parseInt(props.params.id);
  return <div>Edit {id}</div>;
};
export default SnippetEditPage;
