import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import {
  setMatchs,
  incrementLike,
  incrementDeslike,
} from "./Features/SliceMatchs";

export default function ListeDesMatchs() {
  const dispatch = useDispatch();
  const matchs01 = useSelector((state) => state.matchs.matchs);

  const { id } = useParams();
  const [nameEqupe, setNameEquipe] = useState("");
  useEffect(() => {
    fetch(`http://localhost:2005/Equipes/${id}`)
      .then((res) => res.json())
      .then((data) => {
        dispatch(
          setMatchs(
            data.matchs.map((ele) => {
              return {
                ...ele,
                like: 0,
                deslike: 0,
              };
            }),
          ),
        );
        setNameEquipe(data.name);
      });
  }, [dispatch, id]);

  const handleBtnLike = (id) => {
    dispatch(incrementLike(id));
  };

  const handleBtnDeslike = (id) => {
    dispatch(incrementDeslike(id));
  };

  return (
    <div>
      <h1>ListeDesMatchs</h1>
      <div
        className="container-matchs"
        style={{
          maxWidth: "400px",
          marginInline: "auto",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          marginBlock: "30px",
        }}
      >
        {matchs01.map((ele) => {
          return (
            <div
              className="match"
              key={ele.id}
              style={{
                padding: "20px",
                textAlign: "center",
                boxShadow: "1px 3px 4px rgba(0, 0, 0, .6)",
              }}
            >
              <div className="info" style={{ marginBottom: "10px" }}>
                <h2>
                  {nameEqupe} Vs {ele.contre}
                </h2>
                <h3>{ele.date}</h3>
              </div>
              <button onClick={() => handleBtnLike(ele.id)}>
                Like {ele.like}
              </button>
              <button onClick={() => handleBtnDeslike(ele.id)}>
                DesLike {ele.deslike}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
