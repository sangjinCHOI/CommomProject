import { Label } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CharacterImg from "../components/CharacterImg";
import MainCard from "../components/MainCard";
import StorageCardSmall from "../components/StorageCardSmall";

import Send from "../config/Send";

export default function Search({ location }) {
  const queryString = location.search;
  const params = new URLSearchParams(queryString);
  const query = params.get("query");

  const tempText =
    "맛있는 김치찌개 만드는 방법을 알아봅시다. 요리를 처음 하시는 분들은 그냥 따라만 오셔도 됩니다!!";
  const nicknameList = ["닉네임은여덟글자", "테스트1", "TEST2", "테3"];

  const colorList = [
    "blueGray",
    "gray",
    "brown",
    "deepOrange",
    "orange",
    "amber",
    "yellow",
    "lime",
    "lightGreen",
    "green",
    "teal",
    "cyan",
    "lightBlue",
    "blue",
    "indigo",
    "deepPurple",
    "purple",
    "pink",
    "red",
  ];

  const [charactersResultList, setCharactersResultList] = useState([]);
  const getCharactersResult = () => {
    Send.get(`/search/characters/${query}`).then((res) => {
      console.log(res);
      setCharactersResultList(res.data);
    });
  };

  const [tagsResultList, setTagsResultList] = useState([]);
  const getTagsResult = () => {
    Send.get(`/search/tags/${query}`).then((res) => {
      console.log(res);
      setTagsResultList(res.data);
    });
  };

  useEffect(() => {
    getCharactersResult();
    getTagsResult();
  }, [query]);

  return (
    <>
      <div className="mt-4">'{query}' 전체 검색 결과</div>
      <div className="mb-8">
        <div className="flex justify-between p-2">
          <div className="material-icons flex items-center text-lg">
            person<span className="ml-1">캐릭터</span>
          </div>
          <Link to={{ pathname: "/search/characters", search: `?query=${query}` }}>
            <div className="text-lg">더 보기</div>
          </Link>
        </div>
        <MainCard classes="border rounded-2xl py-2">
          <div
            className={`flex overflow-x-auto ${
              charactersResultList.length <= 2 ? "justify-center" : ""
            }`}
          >
            {charactersResultList.map((character) => (
              <Link to={`../${character.nickname}`} key={character.characterSeq}>
                <div className="mx-8 my-6 w-32">
                  <CharacterImg underText={`${character.nickname}`} />
                </div>
              </Link>
            ))}
          </div>
        </MainCard>
      </div>

      <div className="mb-8">
        <div className="flex justify-between p-2">
          <div className="material-icons flex items-center text-lg">
            tag<span className="ml-1">태그</span>
          </div>
          <Link to={{ pathname: "/search/tags", search: `?query=${query}` }}>
            <div className="text-lg">더 보기</div>
          </Link>
        </div>
        <MainCard classes="border rounded-2xl py-3">
          <div className={`flex overflow-x-auto justify-center items-center text-xl h-16 mx-8`}>
            {/* 태그는 최대 5개만 가져옴 + 6글자 까지 보여줌 */}
            {tagsResultList.slice(0, 4).map((tag) => (
              <Link
                to={{ pathname: "/search/tag", search: `?detail=${tag.tagText}` }}
                className="mx-1"
              >
                <Label color={colorList[Math.floor(Math.random() * colorList.length)]}>
                  <span>
                    {tag.tagText.length > 6 ? tag.tagText.slice(0, 6) + ".." : tag.tagText}
                  </span>
                </Label>
              </Link>
            ))}
          </div>
        </MainCard>
      </div>

      <div className="mb-8">
        <div className="flex justify-between p-2">
          <div className="material-icons flex items-center text-lg">
            article<span className="ml-1">내용</span>
          </div>
          <Link to={{ pathname: "/search/texts", search: `?query=${query}` }}>
            <div className="text-lg">더 보기</div>
          </Link>
        </div>
        <MainCard classes="border rounded-2xl py-3">
          {nicknameList.map((nickname) => (
            <div className="flex justify-center items-center py-2" key={nickname}>
              <Link to={`../${nickname}`}>
                <div className="m-3">
                  <CharacterImg imgWidth="50px" />
                </div>
              </Link>
              <div style={{ width: "126px" }} key={nickname}>
                <Link to={`../${nickname}`}>{nickname}</Link>
              </div>
              <div className="ml-8 w-72">
                {tempText.length < 40 ? tempText : tempText.slice(0, 40) + ".."}
              </div>
            </div>
          ))}
        </MainCard>
      </div>

      <div className="mb-8">
        <div className="flex justify-between p-3">
          <div className="material-icons flex items-center text-lg">
            folder_shared<span className="ml-1">저장소</span>
          </div>
          <Link to={{ pathname: "/search/storages", search: `?query=${query}` }}>
            <div className="text-lg">더 보기</div>
          </Link>
        </div>
        <MainCard classes="border rounded-2xl py-3">
          <div className="flex justify-center">
            <StorageCardSmall
              storageName="요리하는 부부 저장소"
              imgSrc="https://cdn2.thecatapi.com/images/43n.png"
            />
            <StorageCardSmall
              storageName="맛있는 요리 모음"
              imgSrc="https://cdn2.thecatapi.com/images/dnz0xXA6a.jpg"
            />
            <StorageCardSmall
              storageName="불타는 요리 맛집"
              imgSrc="https://cdn2.thecatapi.com/images/cna.jpg"
            />
          </div>
        </MainCard>
      </div>
    </>
  );
}
