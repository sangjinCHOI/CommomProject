import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MainCard from "../components/MainCard";
import Send from "../config/Send";

export default function SearchTags({ location }) {
  const queryString = location.search;
  const params = new URLSearchParams(queryString);
  const query = params.get("query");

  const [tagsResultList, setTagsResultList] = useState([]);
  const getTagsResult = () => {
    setTagsResultList([]);
    Send.get(`/search/tags/${query}`).then((res) => {
      setTagsResultList(res.data);
    });
  };

  useEffect(() => {
    getTagsResult();
  }, [query]);

  return (
    <div className="px-16">
      <div className="my-4">'{query}' 태그 검색 결과</div>
      <MainCard classes="border rounded-xl py-4">
        {tagsResultList.map((tag) => (
          <div className="flex items-center mx-10 py-4" key={tag}>
            <div className="material-icons rounded-full border p-2 ml-2">tag</div>
            <Link to={{ pathname: "/search/tag", search: `?detail=${tag.tagText}` }}>
              <div className="ml-5 text-lg" style={{ width: "190px" }}>
                {tag.tagText.length > 10 ? tag.tagText.slice(0, 10) + ".." : tag.tagText}
              </div>
            </Link>
            <div className="ml-14 text-gray-400 text-sm text-center">
              <span>게시글 수</span>
              <br />
              <span>{tag.tagCount.toLocaleString()}</span>
            </div>
          </div>
        ))}
      </MainCard>
    </div>
  );
}
