import React from "react";
import { useEffect, useState } from "react";
import MainCard from "./MainCard";
import ExAchievment from "../assets/images/Achievement01.png";
import { connect } from "react-redux";
// import styles from "../components/Achievement.module.css";
import H5 from "@material-tailwind/react/Heading5";
import H6 from "@material-tailwind/react/Heading6";
import trophy from "../assets/images/trophy.png";
import Send from "../config/Send";
import styles from "./AchievementContent.module.css";
import { achieve } from "../store/characterStore";

function Content({ characterSlice, updateachieve, achievements }) {
  const [isRepresentative, setIsRepresentative] = useState(0);
  const initFun = () => {
    setIsRepresentative(characterSlice.representativeAchievement);
  };

  useEffect(() => {
    initFun();
  }, []);
  const deleteAchievement = () => {
    const sendData = {
      representativeAchievement: 0,
    };
    return () => {
      //캐릭터의 대표업적이 삭제
      Send.put(`/character/achievement/delete/${characterSlice.characterSeq}`)
        .then((res) => {
          setIsRepresentative(0);
          updateachieve(sendData);
          // console.log(res);
        })
        .catch((e) => console.log(e));
    };
  };

  const updateAchievement = (seq) => {
    const data = {
      characterSeq: characterSlice.characterSeq,
      representativeAchievement: seq,
    };
    const sendData = {
      representativeAchievement: seq,
    };
    return () => {
      Send.put(`/character/achievement/representative`, JSON.stringify(data))
        .then((res) => {
          setIsRepresentative(seq);

          updateachieve(sendData);
          // console.log(res);
        })
        .catch((e) => console.log(e));
    };
  };

  return (
    <>
      <div>
        {achievements.map((achieve) => (
          <div>
            {achieve.isGained ? (
              <MainCard key={achieve.achievementSeq} max-height="900px">
                <div style={{ height: 220 }} className="p-4 flex justify-between border-b">
                  <div className="flex justify-center">
                    <div className="flex justify-center" style={{ width: 565 }}>
                      <div className="flex justify-start " style={{ width: 380 }}>
                        <div style={{ textAlign: "left", width: 360 }}>
                          <H5>[{achieve.achievementName}]</H5>
                          <p>{achieve.achievementCondition}</p>
                          <br />
                          <div className="flex justify-start mt-6">
                            <img src={trophy} style={{ width: 73, height: 73 }} />
                            <div>
                              <H5>Achieve!!</H5>
                              <H6>{achieve.achievementCreatedDate.substring(0, 10)}</H6>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="relative flex justify-end bg-slate-100">
                        <img
                          style={{ maxWidth: 150, maxHeight: 150, objectFit: "cover" }}
                          src={require(`../assets${achieve.filePath + achieve.fileName}`)}
                          alt={require(`../assets${achieve.filePath + achieve.fileName}`)}
                          className={
                            isRepresentative === achieve.achievementSeq
                              ? "border-4 border-yellow-400 rounded-lg"
                              : "border-4 border-gray-400 rounded-lg"
                          }
                        />
                        {/* isRepresentative로 임시로 대표 업적에 따라 색깔 바뀌개 해놨습니다. */}
                        <div
                          onClick={isRepresentative === achieve.achievementSeq ? deleteAchievement() : updateAchievement(achieve.achievementSeq)}
                          className={`absolute right-7 px-4 py-0.5 rounded-lg font-semibold ${
                            isRepresentative === achieve.achievementSeq ? "bg-gray-200 text-gray-400" : "bg-orange-200 text-orange-500"
                          }`}
                          style={{ cursor: "pointer", top: "155px" }}
                        >
                          {isRepresentative === achieve.achievementSeq ? "대표 해제" : "대표 설정"}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </MainCard>
            ) : (
              <MainCard key={achieve.achievementSeq} max-height="900px">
                <div style={{ height: 220 }} className="p-4 flex justify-between bg-slate-100 border-b">
                  <div className="flex justify-center ">
                    <div className="flex justify-center" style={{ width: 565 }}>
                      <div className="flex justify-start " style={{ width: 380 }}>
                        <div style={{ textAlign: "left", width: 360 }}>
                          <H5>[{achieve.achievementName}]</H5>
                          <p>{achieve.achievementDescription}</p>
                          <br />
                          <div className="flex justify-start mt-6">
                            <img src={trophy} style={{ width: 73, height: 73 }} />
                          </div>
                        </div>
                      </div>
                      <div className="relative flex justify-end bg-slate-100">
                        <img
                          className={`${styles.gray}`}
                          style={{ maxWidth: 150, maxHeight: 150, objectFit: "cover" }}
                          src={require(`../assets${achieve.filePath + achieve.fileName}`)}
                          alt={require(`../assets${achieve.filePath + achieve.fileName}`)}
                          // src={ExAchievment}
                          // className={isRepresentative ? "border-4 border-yellow-400 rounded-lg" : "border-4 border-gray-400 rounded-lg"}
                        />
                        {/* <div
                          className={`absolute right-7 px-4 py-0.5 rounded-lg font-semibold ${isRepresentative ? "bg-gray-200 text-gray-400" : "bg-orange-200 text-orange-500"}`}
                          style={{ cursor: "pointer", top: "155px" }}
                        >
                          {isRepresentative ? "대표 해제" : "대표 설정"}
                        </div> */}
                      </div>
                    </div>
                  </div>
                </div>
              </MainCard>
            )}
          </div>
        ))}
      </div>
      {/* ****************************************************************************** */}
    </>
  );
}

function mapStateToProps(state) {
  return { characterSlice: state.character };
}

function mapDispatchToProps(dispatch) {
  return { updateachieve: (character) => dispatch(achieve(character)) };
}

export default connect(mapStateToProps, mapDispatchToProps)(Content);
