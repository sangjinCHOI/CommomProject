import CharacterImg from "../components/CharacterImg";

export default function Follow() {
  return (
    <div>
      <div className="flex justify-center items-center">
        <span className="px-20 py-4 mt-8 bg-gray-300">팔로워</span>
        <span className="px-20 py-4 mt-8 bg-white">팔로잉</span>
      </div>
      <div className="flex justify-center items-center">
        <CharacterImg imgWidth="50px" />
        <div className="w-44">여덟글자까지허용</div>
        <div className="m-2">팔로우</div>
        <div className="ml-2 mr-8">삭제</div>
      </div>
    </div>
  );
}
