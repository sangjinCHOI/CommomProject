import { Label } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CharacterImg from "../components/CharacterImg";
import MainCard from "../components/MainCard";
import StorageCardSmall from "../components/StorageCardSmall";
import styles from "./Search.module.css";
import Send from "../config/Send";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

function Search({ characterSlice, location }) {
  const history = useHistory();
  const queryString = location.search;
  const params = new URLSearchParams(queryString);
  const query = params.get("query");

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
    setCharactersResultList([]);
    Send.get(`/search/characters/${query}`).then((res) => {
      // console.log(res);
      setCharactersResultList(res.data);
    });
  };

  const [tagsResultList, setTagsResultList] = useState([]);
  const getTagsResult = () => {
    setTagsResultList([]);
    Send.get(`/search/tags/${query}`).then((res) => {
      // console.log(res);
      setTagsResultList(res.data);
    });
  };

  const [contentsResultList, setContentsResultList] = useState([]);
  const getContentsResult = () => {
    setContentsResultList([]);
    Send.get(`/search/contents/${query}`).then((res) => {
      // console.log(res.data);
      res.data.forEach((content) => {
        Send.get(`/character/${content.characterSeq}`).then((res) => {
          // console.log([res.data, content]);
          setContentsResultList((contentsResultList) => [
            // [캐릭터 정보, 게시글 정보]
            ...contentsResultList,
            [res.data, content],
          ]);
        });
      });
    });
  };

  useEffect(() => {
    getCharactersResult();
    getTagsResult();
    getContentsResult();
  }, [query]);

  const moveContentDetail = (myCharacterSeq, contentSeq, e) => {
    e.preventDefault();
    Send.get(`/content/${contentSeq}`, {
      params: {
        characterNow: myCharacterSeq,
        contentSeq,
      },
    }).then((res) => {
      console.log(res);
      const contentDetail = res.data;
      history.push({
        pathname: `../search/texts`,
        search: `?query=${query}`,
        props: { contentDetail },
      });
    });
  };

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
        <MainCard classes="border rounded-xl py-2">
          <div
            className={`flex overflow-x-auto ${styles.widthScroll} ${
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
        <MainCard classes="border rounded-xl py-2">
          <div className={`flex overflow-x-auto justify-center items-center text-xl mx-8`}>
            {/* 태그는 최대 5개만 가져옴 + 6글자 까지 보여줌 */}
            {/* 현재 태그 상세보기 미구현 */}
            {tagsResultList.slice(0, 4).map((tag) => (
              <Link
                to={{ pathname: "/search/tag", search: `?detail=${tag.tagText}` }}
                className="mx-1 my-4"
                key={tag.tagText}
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
        <MainCard classes="border rounded-xl py-3">
          <div className={`overflow-y-auto ${styles.box}`} style={{ maxHeight: "550px" }}>
            {contentsResultList.map((content) => (
              <div className="flex justify-center items-center py-2" key={content[1].contentSeq}>
                <Link to={`../${content[0].nickname}`}>
                  <div className="m-3">
                    <CharacterImg imgWidth="50px" />
                  </div>
                </Link>
                <div style={{ width: "126px" }}>
                  <Link to={`../${content[0].nickname}`}>{content[0].nickname}</Link>
                </div>
                {/* 현재 해당 내용으로 이동 아직 미구현 */}
                <Link
                  to=""
                  onClick={(e) =>
                    moveContentDetail(characterSlice.characterSeq, content[1].contentSeq, e)
                  }
                >
                  <div className="ml-8 w-72">
                    {content[1].contentText.length < 40
                      ? content[1].contentText
                      : content[1].contentText.slice(0, 40) + ".."}
                  </div>
                </Link>
              </div>
            ))}
          </div>
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
        <MainCard classes="border rounded-xl py-3">
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

function mapStateToProps(state) {
  return { characterSlice: state.character };
}

export default connect(mapStateToProps)(Search);
