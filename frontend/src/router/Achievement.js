import { useParams } from "react-router-dom";
import MainCard from "../components/MainCard";
import H2 from "@material-tailwind/react/Heading2";
import H4 from "@material-tailwind/react/Heading4";
import H5 from "@material-tailwind/react/Heading5";
import { Label, Button, Progress } from "@material-tailwind/react";
import styles from "../components/Achievement.module.css";
import AchievementContent from "../components/AchievementContent";

export default function Profile() {
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
        if (res.status == 200) {
          setAchievements(res.data);
          console.log(achievements);
        } else alert("error!!");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    initFun();
  }, []);

  return (
    <div className={`${styles.textCenter}`}>
      <MainCard classes="border">
        <div>
          <H2 color="black">업적 모아보기</H2>
          <br />
        </div>
        <hr />
        <div className="px-9 mb-3">
          <H4 color="black">Achievement</H4>
          <Progress color="lightBlue" value="75" percentage={false} />
          <H5 color="black">total: 75/100</H5>
        </div>
      </MainCard>
      <div className="border">
        <AchievementContent prop={achievements} />
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
