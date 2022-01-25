import CharacterImg from "./CharacterImg";

export default function CharacterProfile({ nickname }) {
  return (
    <>
      <div className="flex justify-center items-center p-4 mb-4">
        <CharacterImg />
        <div>
          <div>
            <div className="inline-block bg-red-500 px-1 mr-2 rounded-full">
              <img
                src={require("../assets/images/sample_achievement_img.png")}
                alt="sample_achievement_img"
                width="16px"
                className="inline-block mr-1"
              />
              <span className="text-xs text-yellow-300">킹왕짱</span>
            </div>
            {nickname}
          </div>
          <div className="py-1">
            <div className="inline-block w-20">
              <span>게시물: 55 </span>
            </div>
            <div className="inline-block w-28">
              <span>팔로워: 10,000 </span>
            </div>
            <div className="inline-block w-24">
              <span>팔로잉: 234</span>
            </div>
          </div>

          <div className="text-sm">킹왕짱 나가신다!</div>
          <div className="py-1">
            <span>업적 보기 </span>
            <span>프로필 편집 </span>
            <span>부캐 보기</span>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center py-20">여기에 게시물이 들어갑니다.</div>
      <div className="flex justify-center items-center py-20">여기에 게시물이 들어갑니다.</div>
      <div className="flex justify-center items-center py-20">여기에 게시물이 들어갑니다.</div>
    </>
  );
}
