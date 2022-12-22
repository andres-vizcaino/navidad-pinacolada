import { Player } from "@lottiefiles/react-lottie-player";

const PlayerLootie = ({ url }) => {
  return (
    <>
      <Player
        src={url}
        className="lootie--player"
        loop
        autoplay
        style={{ height: "200px", width: "200px" }}
      />
    </>
  );
};

export default PlayerLootie;
