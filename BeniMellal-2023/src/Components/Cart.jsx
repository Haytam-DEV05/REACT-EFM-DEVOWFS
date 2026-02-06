import { useSelector, useDispatch } from "react-redux";
import { counter } from "../Features/SliceLike";

export default function Cart({ livre }) {
  const statLike = useSelector((state) => state.like);
  const dispatch = useDispatch();
  return (
    <div>
      <img src={livre.Poster} alt="" style={{ width: "100px" }} />
      <div className="info" style={{ background: "gray", padding: "10px" }}>
        <h2>{livre.titre}</h2>
        <p>{livre.Auteur}</p>
        <p>{livre.Edition}</p>
        <button
          onClick={() => {
            dispatch(counter(livre.id));
          }}
        >
          Like{" "}
          {statLike.map((ele) => {
            if (ele.id == livre.id) {
              return ele.value;
            }
          })}
        </button>
      </div>
    </div>
  );
}
