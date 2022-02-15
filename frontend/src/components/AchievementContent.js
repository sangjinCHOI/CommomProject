import React from "react";
import { useEffect, useState } from "react";
import { Menu } from "@headlessui/react";
import { Label } from "@material-tailwind/react";
import MainCard from "./MainCard";
import ExAchievment from "../assets/images/Achievement01.png";
import { connect } from "react-redux";
// import styles from "../components/Achievement.module.css";
import H5 from "@material-tailwind/react/Heading5";
import H6 from "@material-tailwind/react/Heading6";
import trophy from "../assets/images/trophy.png";
import Send from "../config/Send";
import styles from "./AchievementContent.module.css";

function Content({ characterSlice, achievements }) {
  console.log(achievements);
  const [isRepresentative, setIsRepresentative] = useState(0);
  //console.log(props);
  // const [achievements, setAchievements] = useState([]);

  // const data = {
  //   achievementType: 1,
  //   characterSeq: characterSlice.characterSeq,
  //   level: 0,
  // };
  // const initFun = () => {
  //   Send.post(`/character/achievements`, JSON.stringify(data))
  //     .then((res) => {
  //       if (res.status == 200) setAchievements(res.data);
  //       else alert("error!!");
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  // useEffect(() => {
  //   initFun();
  // }, []);

  const updateAchievement = (seq) => {
    const data = {
      characterSeq: characterSlice.characterSeq,
      representativeAchievement: seq,
    };
    return () => {
      Send.put(`/character/achievement/representative`, JSON.stringify(data))
        .then((res) => console.log(res))
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
                              <H6>{achieve.achievementCreatedDate.substrint(0, 10)}</H6>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="relative flex justify-end bg-slate-100">
                        <img
                          style={{ maxWidth: 150, maxHeight: 150, objectFit: "cover" }}
                          src={ExAchievment}
                          className={isRepresentative ? "border-4 border-yellow-400 rounded-lg" : "border-4 border-gray-400 rounded-lg"}
                        />
                        {/* isRepresentative로 임시로 대표 업적에 따라 색깔 바뀌개 해놨습니다. */}
                        <div
                          onClick={updateAchievement(achieve.achievementSeq)}
                          className={`absolute right-7 px-4 py-0.5 rounded-lg font-semibold ${isRepresentative ? "bg-gray-200 text-gray-400" : "bg-orange-200 text-orange-500"}`}
                          style={{ cursor: "pointer", top: "155px" }}
                        >
                          {isRepresentative ? "대표 해제" : "대표 설정"}
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
                          src={ExAchievment}
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

export default connect(mapStateToProps)(Content);
