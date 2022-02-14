import React from "react";
import { Menu } from "@headlessui/react";
import { Label } from "@material-tailwind/react";
import MainCard from "./MainCard";
import ExAchievment from "../assets/images/Achievement01.png";
import styles from "../components/Achievement.module.css";
import H5 from "@material-tailwind/react/Heading5";
import H6 from "@material-tailwind/react/Heading6";
import trophy from "../assets/images/trophy.png";

export default function Content() {
  return (
    <>
      <MainCard max-height="900px">
        <div style={{ height: 180 }} className="p-4 flex justify-between">
          <div className="flex justify-center">
            <div className="flex justify-center" style={{ width: 565 }}>
              <div className="flex justify-start " style={{ width: 380 }}>
                <div style={{ textAlign: "left", width: 360 }}>
                  <H5>[우리는 깐부잖아]</H5>
                  <p>다른 사람 게시물 저장 시 달성</p>
                  <br />
                  <div className="flex justify-start">
                    <img src={trophy} style={{ width: 73, height: 73 }} />
                    <div>
                      <H5>Achieve!!</H5>
                      <H6>2022-01-17</H6>
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
      {/* ****************************************************************************** */}
      <MainCard max-height="900px">
        <div style={{ height: 180 }} className="p-4 flex justify-between bg-slate-100">
          <div className="flex justify-center ">
            <div className="flex justify-center" style={{ width: 565 }}>
              <div className="flex justify-start " style={{ width: 380 }}>
                <div style={{ textAlign: "left", width: 360 }}>
                  <H5>[우리는 깐부잖아]</H5>
                  {/* <p>다른 사람 게시물 저장 시 달성</p> */}
                  <p>깐부끼리는 니꺼 내꺼가 없는거야</p>
                  <br />
                  <div className="flex justify-start">
                    <img src={trophy} style={{ width: 73, height: 73 }} />
                    {/* <div>
                      <H5>Achieve!!</H5>
                      <H6>2022-01-17</H6>
                    </div> */}
                  </div>
                </div>
              </div>
              <div className="flex justify-end bg-slate-100">
                <img
                  //className={`${styles.gray}`}
                  style={{ maxWidth: 150, maxHeight: 150, objectFit: "cover" }}
                  src={ExAchievment}
                />
              </div>
            </div>
          </div>
        </div>
      </MainCard>
    </>
  );
}
