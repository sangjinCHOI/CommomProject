import CharactersProfile from "../components/CharactersProfile";

export default function Characters() {
  return (
    <>
      <div className="flex justify-center">
        <CharactersProfile />
        <CharactersProfile />
      </div>
      <div className="flex justify-center">
        <CharactersProfile />
        <CharactersProfile />
      </div>
    </>
  );
}
