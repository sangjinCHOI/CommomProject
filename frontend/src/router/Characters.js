import CharactersProfile from "../components/CharactersProfile";

export default function Characters() {
  return (
    <>
      <img
        src={require("../assets/images/main_logo.png")}
        alt="main_logo"
        className="mx-auto my-24 w-96"
      />
      <div className="text-center text-2xl mt-8 mb-4">
        <span>PERSONA를 사용할 캐릭터를 선택하세요.</span>
      </div>
      <div className="flex justify-center">
        <CharactersProfile nickname={"개발왕"} />
        <CharactersProfile nickname={"요리왕"} />
      </div>
      <div className="flex justify-center">
        <CharactersProfile nickname={"운동왕"} />
        <CharactersProfile nickname={"코인왕"} />
      </div>
      <div className="text-center text-2xl mt-24">
        <span>캐릭터 관리</span>
      </div>
    </>
  );
}
