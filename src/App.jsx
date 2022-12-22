import { useState } from "react";
import PlayerLootie from "./components/PlayerLootie";
import { COPY, IMAGES, MUSIC } from "./data/info";

function App() {
  const [selectMusic, setSelectMusic] = useState(MUSIC[0]);

  const handleSelectMusic = (music) => {
    setSelectMusic(music);
  };

  return (
    <div style={{ marginBottom: 270 }}>
      <h1>Feliz navidad 🎄</h1>

      <span>{COPY}</span>

      <p>Feliz Navidad y próspero año 2023, les desea Piña Colada Team</p>

      <div className="buttons--music">
        {MUSIC.map((music) => (
          <button
            key={music.title}
            style={{ "--main-color": music.color }}
            onClick={() => handleSelectMusic(music)}
          >
            <span>{music.title}</span>
          </button>
        ))}
      </div>

      <div className="container--music">
        <iframe
          style={{ borderRadius: "12px" }}
          src={selectMusic.url}
          width="100%"
          height={152}
          allowFullScreen
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        />
      </div>

      <picture className="pina--bolas">
        <PlayerLootie url={IMAGES.PINA_BOLAS} />

        <PlayerLootie url={IMAGES.PINA_LETRERO} />

        <PlayerLootie url={IMAGES.PINA_REGALOS} />

        <PlayerLootie url={IMAGES.PINA_BAILANDO} />
      </picture>

      <div className="nieve--container">
        <img src="/Nieve.png" alt="Suelo de nieve bien bonita" />
      </div>
    </div>
  );
}

export default App;
