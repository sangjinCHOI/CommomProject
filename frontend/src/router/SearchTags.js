import { Link } from "react-router-dom";
import MainCard from "../components/MainCard";

export default function SearchTags({ location }) {
  const queryString = location.search;
  const params = new URLSearchParams(queryString);
  const query = params.get("query");

  const tagList = [
    ["태그는띄어쓰기안돼요그리고태그검색결과페이지에서는열글자까지보여줍니다", 1028932],
    ["요리법", 123456],
    ["계란요리", 95643],
    ["요리보고", 8324],
    ["요리조리", 312],
    ["맛있는요리", 4],
  ];

  return (
    <div className="px-16">
      <div className="my-4">'{query}' 태그 검색 결과</div>
      <MainCard classes="border rounded py-4">
        {tagList.map((tagText) => (
          <div className="flex items-center mx-10 py-4" key={tagText}>
            <div className="material-icons rounded-full border p-2 ml-2">tag</div>
            <Link
              to={{ pathname: "/search/tag", search: `?detail=${tagText[0]}` }}
              key={tagText[0]}
            >
              <div className="ml-5 text-lg" style={{ width: "190px" }}>
                {tagText[0].length > 10 ? tagText[0].slice(0, 10) + "..." : tagText[0]}
              </div>
            </Link>
            <div className="ml-14 text-gray-400 text-sm text-center">
              <span>게시글 수</span>
              <br />
              <span>{tagText[1].toLocaleString()}</span>
            </div>
          </div>
        ))}
      </MainCard>
    </div>
  );
}
