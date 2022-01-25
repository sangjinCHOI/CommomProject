import CharacterImg from "../components/CharacterImg";

export default function Follow() {
  const nicknameList = [
    "요리왕",
    "개발왕",
    "만화왕",
    "드라마다봄",
    "넷플릭스다봄",
    "인스타에서넘어옴",
    "페르소나",
    "PersonA",
  ];
  return (
    <div>
      <div className="flex justify-center items-center mb-4">
        <span className="px-20 py-4 mt-8 bg-gray-300">팔로워</span>
        <span className="px-20 py-4 mt-8 bg-white">팔로잉</span>
      </div>
      {nicknameList.map((nickname) => (
        <div className="flex justify-center items-center">
          <CharacterImg imgWidth="50px" />
          <div className="w-44">{nickname}</div>
          <div className="m-2">팔로우</div>
          <div className="ml-2 mr-8">삭제</div>
        </div>
      ))}
    </div>
  );
}
