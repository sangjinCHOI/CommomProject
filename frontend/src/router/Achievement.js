import { useParams } from "react-router-dom";
import MainCard from "../components/MainCard";
import H4 from "@material-tailwind/react/Heading4";
import H5 from "@material-tailwind/react/Heading5";
import { Progress } from "@material-tailwind/react";
import styles from "../components/Achievement.module.css";
import { connect } from "react-redux";
import AchievementContent from "../components/AchievementContent";
import { useEffect, useState } from "react";
import Send from "../config/Send";

function Profile({ characterSlice }) {
  const { nickname } = useParams();
  const [achievements, setAchievements] = useState([]);
  const [count, setCount] = useState(0);

  const data = {
    achievementType: 1,
    characterSeq: characterSlice.characterSeq,
    level: 0,
  };
  const initFun = () => {
    Send.post(`/character/achievements`, JSON.stringify(data))
      .then((res) => {
        if (res.status === 200) {
          // setAchievements(res.data);
          // console.log(characterSlice.characterSeq);
          // console.log(res.data);
          setAchieve(setAchievements, res.data);
          //setAchievements(() => res.data);
          // console.log(achievements);
        } else alert("error!!");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  function setAchieve(func, data) {
    func(data);
  }

  useEffect(() => {
    initFun();
  }, []);

  useEffect(() => {
    //console.log(achievements.length);
    achievements.map((check) => {
      //console.log(check.isGained);
      if (check.isGained === 1) setCount((prev) => prev + 1);
    });
  }, [achievements]);

  return (
    <div className={`${styles.textCenter}`}>
      <MainCard classes="border">
        <div>
          <p className="pt-4" style={{ fontSize: "44px" }}>
            업적 모아보기
          </p>
          {/* <H2 color="black">업적 모아보기</H2> */}
          <br />
        </div>
        <hr />
        <div className="px-9 my-3">
          <H4 color="black">Achievement</H4>
          <Progress color="lightBlue" value={Number((100 * count) / achievements.length)} percentage={false} />
          <H5 color="black">
            total: {count}/{achievements.length}
          </H5>
        </div>
      </MainCard>
      <div className="border">
        <AchievementContent achievements={achievements} />
      </div>
      {/* <div className="border">
        <AchievementContent />
      </div>
      <div className="border">
        <AchievementContent />
      </div> */}
    </div>
  );
}

function mapStateToProps(state) {
  return { characterSlice: state.character };
}

export default connect(mapStateToProps)(Profile);
