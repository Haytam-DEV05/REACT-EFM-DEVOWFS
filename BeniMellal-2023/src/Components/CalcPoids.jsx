import { useState } from "react";
import femme from "/public/images/femme.jpg";
import homme from "/public/images/homme.jpg";

export default function CalcPoids() {
  const [taille, setTaille] = useState("");
  const [genre, setGenre] = useState("");
  const [message, setMessage] = useState("");
  const handleBtnCalc = (e) => {
    e.preventDefault();
    if (!isNaN(taille)) {
      if (taille > 150) {
        const result = genre === "femme" ? taille * 0.3 : taille * 0.6;
        setMessage(`Poids Idelal ${result} KG`);
      } else {
        setMessage(`la taille doit eter superieure a 150`);
      }
    } else {
      setMessage(`la taille doit etre en entier`);
    }
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <form
        style={{ backgroundColor: "red", padding: "30px", minWidth: "600px" }}
      >
        <div>
          <label>Taille En CentiMetre</label>
          <input
            value={taille}
            onChange={(e) => setTaille(e.target.value)}
            type="text"
            style={{ display: "block", width: "100%", outline: "none" }}
          />
        </div>
        <div>
          <label>Genre</label>
          <div style={{ display: "flex", alignItems: "center",gap:"20px" }}>
            <select
              value={genre}
              onChange={(e) => setGenre(e.target.value)}
              style={{ display: "block", width: "100%", outline: "none" }}
            >
              <option>homme</option>
              <option>femme</option>
            </select>
            <img
              src={genre === "femme" ? `${femme}` : `${homme}`}
              alt=""
              style={{ width: "60px" }}
            />
          </div>
        </div>
        <div>
          <label>Poids Ideal</label>
          <input
            type="text"
            readOnly={true}
            value={message}
            style={{ display: "block", width: "100%", outline: "none" }}
          />
        </div>
        <button onClick={handleBtnCalc}>Calculer</button>
      </form>
    </div>
  );
}
