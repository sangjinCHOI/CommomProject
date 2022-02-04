import Content from "../components/Content";

export default function StoragesDetail() {
  return (
    <>
      <div className="my-4 flex items-center">
        <div className="material-icons font-bold px-2 pt-2 pb-2">folder_shared</div>
        <div className="pb-0.5 text-2xl font-bold">저장소</div>
      </div>
      <Content />
      <Content />
      <Content />
      <Content />
      <Content />
    </>
  );
}
