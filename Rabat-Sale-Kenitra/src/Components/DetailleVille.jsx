import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { AllVoyages } from "./Data";

export default function DetailleVille() {
  const [voyage, setVoyage] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    setVoyage(AllVoyages.find((ele) => ele.id == id));
  }, [id]);
  return (
    <div>
      <h1>DetailleVille</h1>
      <div
        className="box"
        style={{
          maxWidth: "600px",
          marginInline: "auto",
          background: "gray",
          padding: "20px",
          marginBlock: "50px",
          cursor: "pointer",
        }}
      >
        <img
          src={voyage.image}
          alt=""
          style={{ width: "100%", height: "250px" }}
        />
        <h2>{voyage.ville}</h2>
        <h3>{voyage.prix}</h3>
      </div>
    </div>
  );
}
