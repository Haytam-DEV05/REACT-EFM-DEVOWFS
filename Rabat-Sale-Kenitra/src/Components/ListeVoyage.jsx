import { useNavigate } from "react-router";
import { AllVoyages } from "./Data";

export default function ListeVoyage() {
  const navigate = useNavigate();
  const handleBtnDetaille = (param) => {
    navigate(`/detailleVille/${param}`);
  };
  return (
    <div>
      <h1>ListeVoyage</h1>
      <div
        className="container-voyages"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: "30px",
        }}
      >
        {AllVoyages.map((ele) => {
          return (
            <div
              className="box"
              style={{
                background: "gray",
                padding: "20px",
                marginBlock: "50px",
                cursor: "pointer",
              }}
            >
              <img
                src={ele.image}
                alt=""
                style={{ width: "100%", height: "250px" }}
              />
              <h2>{ele.ville}</h2>
              <h3>{ele.prix}</h3>
              <button onClick={() => handleBtnDetaille(ele.id)}>
                plus de detaille
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
