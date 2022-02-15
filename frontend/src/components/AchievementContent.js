import React from "react";
import { useEffect, useState } from "react";
import { Menu } from "@headlessui/react";
import { Label } from "@material-tailwind/react";
import MainCard from "./MainCard";
import ExAchievment from "../assets/images/Achievement01.png";
import { connect } from "react-redux";
import styles from "../components/Achievement.module.css";
import H5 from "@material-tailwind/react/Heading5";
import H6 from "@material-tailwind/react/Heading6";
import trophy from "../assets/images/trophy.png";
import Send from "../config/Send";

function Content({ characterSlice, achievements }) {
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

  useEffect(() => {
    initFun();
  }, []);

  return (
    <>
      <div>
        {achievements.map((achieve) => (
          <div>
            {achieve.isgained ? (
              <MainCard max-height="900px">
                <div style={{ height: 180 }} className="p-4 flex justify-between">
                  <div className="flex justify-center">
                    <div className="flex justify-center" style={{ width: 565 }}>
                      <div className="flex justify-start " style={{ width: 380 }}>
                        <div style={{ textAlign: "left", width: 360 }}>
                          {/* <H5>[우리는 깐부잖아]</H5> */}
                          <H5>[{achieve.achievementName}]</H5>
                          <p>{achieve.achievementCondition}</p>
                          <br />
                          <div className="flex justify-start">
                            <img src={trophy} style={{ width: 73, height: 73 }} />
                            <div>
                              <H5>Achieve!!</H5>
                              <H6>{achieve.achievementCreatedDate}</H6>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-end bg-slate-100">
                        <img style={{ maxWidth: 150, maxHeight: 150, objectFit: "cover" }} src={ExAchievment} />
                      </div>
                    </div>
                  </div>
                </div>
              </MainCard>
            ) : (
              <MainCard max-height="900px">
                <div style={{ height: 180 }} className="p-4 flex justify-between bg-slate-100">
                  <div className="flex justify-center ">
                    <div className="flex justify-center" style={{ width: 565 }}>
                      <div className="flex justify-start " style={{ width: 380 }}>
                        <div style={{ textAlign: "left", width: 360 }}>
                          <H5>[{achieve.achievementName}]</H5>
                          <p>{achieve.achievementDescription}</p>
                          <br />
                          <div className="flex justify-start">
                            <img src={trophy} style={{ width: 73, height: 73 }} />
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-end bg-slate-100">
                        <img className={`${styles.gray}`} style={{ maxWidth: 150, maxHeight: 150, objectFit: "cover" }} src={ExAchievment} />
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
