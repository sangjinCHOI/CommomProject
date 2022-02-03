import Content from "../components/Content";

export default function SearchTagsDetail({ location }) {
  const queryString = location.search;
  const params = new URLSearchParams(queryString);
  const detail = params.get("detail");

  // const tagList = [
  // ];

  return (
    <>
      <div className="my-4 flex items-center">
        <div className="material-icons font-bold px-2 pt-2 pb-2">tag</div>
        <div className="pb-0.5 text-2xl font-bold">{detail.length > 24 ? detail.slice(0, 24) + "..." : detail}</div>
      </div>
      <Content />
      <Content />
      <Content />
      <Content />
      <Content />
    </>
  );
}
