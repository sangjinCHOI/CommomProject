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
  return (
    <div className={`${styles.textCenter}`}>
      <MainCard classes="border">
        <div>
          <H2 color="black">업적 모아보기</H2>
          <div className="inline-block px-2 mb-3">
            <Button
              color="gray"
              buttonType="filled"
              size="regular"
              rounded={true}
              block={false}
              iconOnly={false}
              ripple="light"
            >
              전체보기
            </Button>
          </div>
          <div className="inline-block px-2">
            <Button
              color="gray"
              buttonType="filled"
              size="regular"
              rounded={true}
              block={false}
              iconOnly={false}
              ripple="light"
            >
              임시
            </Button>
          </div>
          <div className="inline-block px-2">
            <Button
              color="gray"
              buttonType="filled"
              size="regular"
              rounded={true}
              block={false}
              iconOnly={false}
              ripple="light"
            >
              활동
            </Button>
          </div>
        </div>
        <div className="mb-3">
          <div className="inline-block px-2">
            <Button
              color="gray"
              buttonType="filled"
              size="regular"
              rounded={true}
              block={false}
              iconOnly={false}
              ripple="light"
            >
              캐릭터
            </Button>
          </div>
          <div className="inline-block px-2">
            <Button
              color="gray"
              buttonType="filled"
              size="regular"
              rounded={true}
              block={false}
              iconOnly={false}
              ripple="light"
            >
              이벤트
            </Button>
          </div>
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
        <AchievementContent />
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
