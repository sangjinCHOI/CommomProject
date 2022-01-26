import { Label } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import CharacterImg from "../components/CharacterImg";
import MainCard from "../components/MainCard";

export default function Search({ location }) {
  const queryString = location.search;
  const params = new URLSearchParams(queryString);
  const query = params.get("query");

  const tempText =
    "맛있는 김치찌개 만드는 방법을 알아봅시다. 요리를 처음 하시는 분들은 그냥 따라만 오셔도 됩니다!!";
  const nicknameList = ["닉네임은여덟글자", "테스트1", "TEST2", "테3"];
  return (
    <>
      <div className="mt-4">{query} 검색 결과</div>
      <div className="mb-8">
        <div className="flex justify-between p-2">
          <div className="material-icons flex items-center text-lg">
            person<span className="ml-1">캐릭터</span>
          </div>
          <Link to={{ pathname: "/search/characters", search: `?query=${query}` }}>
            <div className="text-lg">더 보기</div>
          </Link>
        </div>
        <MainCard>
          <div className="flex justify-center">
            <CharacterImg nickname="요리킹" />
            <CharacterImg nickname="난요리만해" />
            <CharacterImg nickname="내요리먹어볼사람" />
          </div>
        </MainCard>
      </div>

      <div className="mb-8">
        <div className="flex justify-between p-2">
          <div className="material-icons flex items-center text-lg">
            tag<span className="ml-1">태그</span>
          </div>
          <div className="text-lg">더 보기</div>
        </div>
        <MainCard>
          <div className="flex justify-center items-center text-xl h-16">
            <Label>#요리</Label>
            <Label>#요리법</Label>
            <Label>#계란 요리</Label>
            <Label>#요리보고</Label>
            <Label>#요리조리</Label>
            <Label>#맛있는 요리</Label>
          </div>
        </MainCard>
      </div>

      <div className="mb-8">
        <div className="flex justify-between p-2">
          <div className="material-icons flex items-center text-lg">
            article<span className="ml-1">내용</span>
          </div>
          <div className="text-lg">더 보기</div>
        </div>
        <MainCard>
          {nicknameList.map((nickname) => (
            <div className="flex items-center">
              <CharacterImg imgWidth="50px" />
              <div style={{ width: "126px" }} key={nickname}>
                {nickname}
              </div>
              <div className="pl-2 w-72">
                {tempText.length < 40 ? tempText : tempText.slice(0, 40) + "..."}
              </div>
            </div>
          ))}
        </MainCard>
      </div>

      <div className="mb-8">
        <div className="flex justify-between p-2">
          <div className="material-icons flex items-center text-lg">
            folder_shared<span className="ml-1">저장소</span>
          </div>
          <div className="text-lg">더 보기</div>
        </div>
        <MainCard>
          <div className="flex justify-center">
            <div className="relative border border-gray-500">
              <img
                src={require("../assets/images/storageImg_sample_1.jpg")}
                alt="sample_1"
                style={{
                  width: "200px",
                  height: "150px",
                  opacity: 0.4,
                }}
              />
              <div className="absolute top-4 left-4 text-xl w-40">요리하는 부부 저장소</div>
            </div>
            <div className="relative border border-gray-500">
              <img
                src={require("../assets/images/storageImg_sample_2.jpg")}
                alt="sample_1"
                style={{
                  width: "200px",
                  height: "150px",
                  opacity: 0.4,
                }}
              />
              <div className="absolute top-4 left-4 text-xl w-40">맛있는 요리 모음</div>
            </div>
            <div className="relative border border-gray-500">
              <img
                src={require("../assets/images/storageImg_sample_3.jpg")}
                alt="sample_1"
                style={{
                  width: "200px",
                  height: "150px",
                  opacity: 0.4,
                }}
              />
              <div className="absolute top-4 left-4 text-xl w-40">불타는 요리 맛집</div>
            </div>
          </div>
        </MainCard>
      </div>
    </>
  );
}
