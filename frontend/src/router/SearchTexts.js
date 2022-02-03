import Content from "../components/Content";

export default function SearchTexts({ location }) {
  const queryString = location.search;
  const params = new URLSearchParams(queryString);
  const query = params.get("query");

  return (
    <>
      <div className="my-4 flex items-center">
        <div className="material-icons font-bold px-2 pt-2 pb-2">article</div>
        <div className="pb-0.5 text-2xl font-bold">{query.length > 24 ? query.slice(0, 24) + "..." : query}</div>
      </div>
      <Content />
      <Content />
      <Content />
      <Content />
      <Content />
    </>
  );
}
