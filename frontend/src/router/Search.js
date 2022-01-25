export default function Search({ location }) {
  const queryString = location.search;
  const params = new URLSearchParams(queryString);
  const query = params.get("query");
  return <div>All Search Result about "{query}"</div>;
}
