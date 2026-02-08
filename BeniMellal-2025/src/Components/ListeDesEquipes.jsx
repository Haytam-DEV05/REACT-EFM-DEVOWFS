import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
export default function ListeDesEquipes() {
  const [equipes, setEquipes] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:2005/Equipes`)
      .then((res) => res.json())
      .then((data) => setEquipes(data));
  }, []);
  const navigate = useNavigate();
  const handleBtnNavigate = (id) => {
    navigate(`/ListeDesMatchs/${id}`)
  };
  return (
    <div>
      <h1>ListeDesEquipes</h1>
      <table width="100%" border="2">
        <thead>
          <tr>
            <th>Id</th>
            <th>Nom Equipe</th>
            <th>Image Equipe</th>
            <th>Groupe Equipe</th>
            <th>Liste Des Match</th>
          </tr>
        </thead>
        <tbody>
          {equipes.map((equipe) => {
            return (
              <tr key={equipe.id}>
                <th>{equipe.id}</th>
                <th>{equipe.name}</th>
                <th style={{ width: "200px" }}>
                  <img
                    src={equipe.photo}
                    alt={equipe.name}
                    style={{ width: "100%" }}
                  />
                </th>
                <th>{equipe.group}</th>
                <th>
                  <button onClick={() => handleBtnNavigate(equipe.id)}>
                    Voir Les Match
                  </button>
                </th>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
