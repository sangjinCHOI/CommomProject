export default function Search({ location }) {
  const queryString = location.search;
  const params = new URLSearchParams(queryString);
  const query = params.get("query");
  return <div>{query} 검색 결과</div>;
}
