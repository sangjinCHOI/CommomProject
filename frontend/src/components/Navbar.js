import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Disclosure, Menu } from "@headlessui/react";
import Logo from "../assets/images/main_logo.png";
import ShortLogo from "../assets/images/short_logo.png";
import Search from "../assets/images/search.png";
import ContentCreate from "./ContentCreate";
import AlarmShow from "./AlarmShow";
import { connect } from "react-redux";
import Send from "../config/Send";
import CustomModal from "./CustomModal";
import styles from "./Navbar.module.css";

function Navbar({ characterSlice }) {
  function SearchClick({ isOpenModal, setIsOpenModal, character }) {
    const [isRealTime, setIsRealTime] = useState(false);
    const [searchHistories, setSearchHistories] = useState([]);
    const [realTimeChart, setRealTimeChart] = useState([]);

    const getHistory = () => {
      Send.get(`/search/history/${character.characterSeq}`).then((res) => {
        setSearchHistories(res.data);
      });
    };
    const getRealTime = () => {
      Send.get(`/search/realTimeChart`).then((res) => {
        setRealTimeChart(res.data);
      });
    };

    const moveToSearchResult = (searchWord, e) => {
      const data = {
        characterSeq: characterSlice.characterSeq,
        searchHistoryText: searchWord,
      };
      Send.post("/search", JSON.stringify(data)).then((res) => console.log(res));
      history.push(`/search?query=${searchWord}`);
      setIsSearchClick(false);
    };

    useEffect(() => {
      getHistory();
      getRealTime();
    }, [isRealTime]);

    return (
      <div
        className="absolute right-0 top-10 border border-gray-400 rounded-lg bg-white"
        style={{ width: "300px", height: "400px", opacity: "0.95" }}
      >
        <div className="flex justify-between text-xl text-gray-400">
          <div
            className={`px-8 py-2 w-32 text-center ${
              isRealTime ? "" : "border-b-2 border-blue-500 text-black"
            }`}
            style={{
              width: "50%",
              cursor: "pointer",
            }}
            onClick={() => setIsRealTime(false)}
          >
            {word.length === 0 ? <span>최근 검색</span> : <span>추천 검색</span>}
          </div>
          <div
            className={`px-8 py-2 w-32 text-center ${
              isRealTime ? "border-b-2 border-blue-500 text-black" : ""
            }`}
            style={{
              width: "50%",
              cursor: "pointer",
            }}
            onClick={() => setIsRealTime(true)}
          >
            실시간
          </div>
        </div>
        <hr />

        <div
          className={`p-2 overflow-y-auto ${styles.heightScroll}`}
          style={{ maxHeight: "350px" }}
        >
          {!isRealTime ? (
            word.length === 0 ? (
              <div>
                {searchHistories.map((history) => (
                  <div key={history} className="flex items-center mt-1">
                    <div
                      className="mx-4 text-lg"
                      style={{ cursor: "pointer" }}
                      onClick={(e) => moveToSearchResult(history, e)}
                    >
                      {history.length >= 14 ? history.slice(0, 14) + ".." : history}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div>
                {recommendationChart.map((recommendationWord) => (
                  <div key={recommendationWord} className="flex items-center mt-1">
                    <div
                      className="mx-4 text-lg"
                      style={{ cursor: "pointer" }}
                      onClick={(e) => moveToSearchResult(recommendationWord, e)}
                    >
                      {recommendationWord.length >= 14
                        ? recommendationWord.slice(0, 14) + ".."
                        : recommendationWord}
                    </div>
                  </div>
                ))}
              </div>
            )
          ) : (
            <div>
              {realTimeChart.slice(0, 10).map((issue, index) => (
                <div key={issue} className="flex items-center mt-1">
                  <div className="mx-4 w-10 text-blue-600 text-xl">{index + 1}.</div>
                  <div
                    className="text-lg"
                    style={{ cursor: "pointer" }}
                    onClick={(e) => moveToSearchResult(issue, e)}
                  >
                    {issue.length >= 11 ? issue.slice(0, 11) + ".." : issue}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }

  const [isSearchClick, setIsSearchClick] = useState(false);

  const [word, setWord] = React.useState("");
  const history = useHistory();

  const [recommendationChart, setRecommendationChart] = useState([]);
  const onChange = (event) => {
    setWord(event.target.value);
    Send.get(`/search/autoComplete/${characterSlice.characterSeq}`, {
      params: {
        characterSeq: characterSlice.characterSeq,
        text: event.target.value,
      },
    }).then((res) => {
      let temp = [];
      // 각각에서 10개씩 추천 후 중복 제거
      temp.push(...res.data.history.slice(0, 10));
      temp.push(...res.data.chart.slice(0, 10));
      let recommendationWords = [...new Set(temp)];
      console.log(recommendationWords);
      setRecommendationChart(recommendationWords);
    });
  };
  const handleKeyPress = (event) => {
    if (event.key === "Enter" && word) {
      const data = {
        characterSeq: characterSlice.characterSeq,
        searchHistoryText: word,
      };
      Send.post("/search", JSON.stringify(data)).then((res) => console.log(res));
      history.push(`/search?query=${word}`);
      setIsSearchClick(false);
    }
  };

  const sendSearchData = (word, e) => {
    e.preventDefault();
    if (word) {
      const data = {
        characterSeq: characterSlice.characterSeq,
        searchHistoryText: word,
      };
      Send.post("/search", JSON.stringify(data)).then((res) => console.log(res));
      history.push(`/search?query=${word}`);
      setIsSearchClick(false);
    }
  };

  const [contentCreateModal, setContentCreateModal] = React.useState(false);
  const handleClose = () => {
    setContentCreateModal(false);
  };

  const LogoutFun = () => {
    window.localStorage.clear();
  };

  return (
    <div
      style={{
        backgroundColor: "#E2EFF2",
        position: "sticky",
        top: 0,
        marginTop: 15,
        zIndex: 10,
      }}
    >
      <ContentCreate isOpen={contentCreateModal} onCancel={handleClose} />
      <Disclosure as="nav" className="bg-black-800">
        <>
          <div className="mx-auto px-2 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="">
                <Link to="/">
                  <img className="block md:hidden h-10" src={ShortLogo} alt="logo" />
                  <img className="hidden md:block h-10" src={Logo} alt="shortlogo" />
                </Link>
              </div>

              <div className="relative">
                <input
                  className="rounded-lg h-10 ml-10 pl-5 pr-10"
                  style={{ width: "300px" }}
                  type="text"
                  placeholder="search"
                  value={word}
                  onChange={onChange}
                  onKeyPress={handleKeyPress}
                  onMouseDown={() => setIsSearchClick(true)}
                />
                <img
                  className="absolute inset-y-2 right-3"
                  src={Search}
                  alt=""
                  onClick={(e) => sendSearchData(word, e)}
                  style={{
                    cursor: "pointer",
                  }}
                />
                {isSearchClick && (
                  <CustomModal isOpenModal={isSearchClick} setIsOpenModal={setIsSearchClick}>
                    <SearchClick character={characterSlice} />
                  </CustomModal>
                )}
              </div>

              <div className="flex items-center static inset-auto ml-6 pr-0">
                <button
                  className="hidden md:block material-icons h-10 w-10 mt-1 mx-2"
                  style={{ fontSize: 40 }}
                  onClick={() => setContentCreateModal(true)}
                >
                  add_circle_outline
                </button>

                <AlarmShow />

                <Link to={`/${characterSlice.nickname}`}>
                  <span
                    className="hidden md:block material-icons h-10 w-10 mt-1 mx-2"
                    style={{ fontSize: 40 }}
                  >
                    person_outline
                  </span>
                </Link>

                {/* dropdown */}
                <Menu as="div" className="mx-2 relative">
                  <div>
                    <Menu.Button className="flex text-sm">
                      <span className="material-icons h-10 w-10 mx-2" style={{ fontSize: 40 }}>
                        menu
                      </span>
                    </Menu.Button>
                  </div>
                  <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white">
                    <Menu.Item>
                      <Link
                        to="/"
                        className="block md:hidden px-4 py-2 text-sm text-gray-700"
                        onClick={() => setContentCreateModal(true)}
                      >
                        게시글 작성
                      </Link>
                    </Menu.Item>
                    <Menu.Item>
                      <Link to="/" className="block md:hidden px-4 py-2 text-sm text-gray-700">
                        알림
                      </Link>
                    </Menu.Item>
                    <Menu.Item>
                      <Link to="/" className="block md:hidden px-4 py-2 text-sm text-gray-700">
                        프로필
                      </Link>
                    </Menu.Item>
                    <Menu.Item>
                      <Link
                        to="../characters/select"
                        className="block px-4 py-2 text-sm text-gray-700"
                      >
                        캐릭터 변경
                      </Link>
                    </Menu.Item>
                    <Menu.Item>
                      <Link
                        to="/settings/character"
                        className="block px-4 py-2 text-sm text-gray-700"
                      >
                        설정
                      </Link>
                    </Menu.Item>
                    <Menu.Item>
                      <Link
                        to="../accounts/login"
                        onClick={LogoutFun}
                        className="block px-4 py-2 text-sm text-gray-700"
                      >
                        로그아웃
                      </Link>
                    </Menu.Item>
                  </Menu.Items>
                </Menu>
              </div>
            </div>
          </div>
        </>
      </Disclosure>
      <hr
        style={{
          backgroundColor: "grey",
          marginTop: 15,
          marginBottom: 5,
          height: 2,
        }}
      />
    </div>
  );
}

function mapStateToProps(state) {
  return { characterSlice: state.character };
}

export default connect(mapStateToProps)(Navbar);
