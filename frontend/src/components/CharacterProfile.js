import CharacterImg from "./CharacterImg";

export default function CharacterProfile({ nickname }) {
  return (
    <div className="flex justify-center items-center">
      <CharacterImg />
      <div>
        <div>[업적뱃지] {nickname}</div>
        <div>
          <span>게시물: 55 </span>
          <span>팔로워: 10,000 </span>
          <span>팔로잉: 234</span>
        </div>
        <div>상태 메시지를 입력하세요.</div>
        <div>
          <span>업적 보기 </span>
          <span>프로필 편집 </span>
          <span>부캐 보기</span>
        </div>
      </div>
    </div>
  );
}
