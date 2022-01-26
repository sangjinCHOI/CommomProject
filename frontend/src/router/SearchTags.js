import MainCard from "../components/MainCard";

export default function SearchTags({ location }) {
  const queryString = location.search;
  const params = new URLSearchParams(queryString);
  const query = params.get("query");
  return (
    <div>
      <div className="my-4">'{query}' 태그 검색 결과</div>
      <MainCard>
        <div className="flex items-center mx-28 py-3">
          <div className="material-icons rounded-full border p-2 mr-4">tag</div>
          <div className="mx-4" style={{ width: "126px" }}>
            요리
          </div>
          <div className="ml-8 text-gray-400 text-sm">
            게시글 수 <span>1,028,932</span>
          </div>
        </div>
        <div className="flex items-center mx-28 py-3">
          <div className="material-icons rounded-full border p-2 mr-4">tag</div>
          <div className="mx-4" style={{ width: "126px" }}>
            요리법
          </div>
          <div className="ml-8 text-gray-400 text-sm">
            게시글 수 <span>182,893</span>
          </div>
        </div>
        <div className="flex items-center mx-28 py-3">
          <div className="material-icons rounded-full border p-2 mr-4">tag</div>
          <div className="mx-4" style={{ width: "126px" }}>
            계란 요리
          </div>
          <div className="ml-8 text-gray-400 text-sm">
            게시글 수 <span>32,893</span>
          </div>
        </div>
        <div className="flex items-center mx-28 py-3">
          <div className="material-icons rounded-full border p-2 mr-4">tag</div>
          <div className="mx-4" style={{ width: "126px" }}>
            요리보고
          </div>
          <div className="ml-8 text-gray-400 text-sm">
            게시글 수 <span>5,713</span>
          </div>
        </div>
        <div className="flex items-center mx-28 py-3">
          <div className="material-icons rounded-full border p-2 mr-4">tag</div>
          <div className="mx-4" style={{ width: "126px" }}>
            요리조리
          </div>
          <div className="ml-8 text-gray-400 text-sm">
            게시글 수 <span>948</span>
          </div>
        </div>
        <div className="flex items-center mx-28 py-3">
          <div className="material-icons rounded-full border p-2 mr-4">tag</div>
          <div className="mx-4" style={{ width: "126px" }}>
            맛있는 요리
          </div>
          <div className="ml-8 text-gray-400 text-sm">
            게시글 수 <span>27,751</span>
          </div>
        </div>
      </MainCard>
    </div>
  );
}
