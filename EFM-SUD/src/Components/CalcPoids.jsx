import { useState } from "react";

export default function CalcPoids() {
  const [resBmi, setResBmi] = useState("");
  const [message, setMessage] = useState("");
  const [color, setColor] = useState("");
  const [formInputs, setFormInputs] = useState({
    poids: "",
    taille: "",
  });
  const handleBtnCalc = (e) => {
    e.preventDefault();
    const poids = formInputs.poids;
    const taille = formInputs.taille;
    let resultBmi = (parseInt(poids) * 10000) / Math.pow(parseInt(taille), 2);
    setResBmi(resultBmi.toFixed(2));
    setMessage(
      resultBmi > 25 ? "surpoids" : resultBmi < 19 ? "spus poids" : "Normal",
    );
    setColor(resultBmi > 25 ? "orange" : resultBmi < 19 ? "red" : "green");
  };
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h1>Body Mass Index</h1>
      <form
        style={{
          minWidth: "600px",
          padding: "30px",
          boxShadow: "1px 3px 4px rgba(0, 0, 0, .5)",
        }}
      >
        <div style={{ marginBlock: "20px" }}>
          <label>Poids en (kg)</label>
          <input
            value={formInputs.poids}
            onChange={(e) =>
              setFormInputs({ ...formInputs, poids: e.target.value })
            }
            type="text"
            style={{ width: "100%", padding: "4px 10px", outline: "none" }}
          />
        </div>
        <div style={{ marginBlock: "20px" }}>
          <label>Taille en (centimetre)</label>
          <input
            type="text"
            value={formInputs.taille}
            onChange={(e) =>
              setFormInputs({ ...formInputs, taille: e.target.value })
            }
            style={{ width: "100%", padding: "4px 10px", outline: "none" }}
          />
        </div>
        <button onClick={handleBtnCalc}>Calculer</button>
        <h1 style={{ marginTop: "20px" }}>
          BMI : {resBmi} <span style={{ color: color }}>{message}</span>
        </h1>
      </form>
    </div>
  );
}
