import { add_article } from "./Feature/SliceArticles";
import { useState } from "react";
import { useDispatch } from "react-redux";

export default function AddArticle() {
  const dispatch = useDispatch();
  const [designation, setDesignation] = useState("");
  const [famille, setFamille] = useState("");
  const handleBtnAdd = (e) => {
    e.preventDefault();
    dispatch(
      add_article({
        id: Date.now(),
        designation: designation,
        famille: famille,
      }),
    );
  };
  return (
    <div>
      <h1>AddArticle</h1>
      <form
        style={{
          maxWidth: "600px",
          marginInline: "auto",
          background: "red",
          padding: "30px",
          marginTop: "20px",
        }}
      >
        <div>
          <label>Designation</label>
          <input
            type="text"
            style={{ width: "100%", padding: "4px 10px", outline: "none" }}
            value={designation}
            onChange={(e) => setDesignation(e.target.value)}
          />
        </div>
        <div>
          <label>Genre</label>
          <select
            style={{ width: "100%", padding: "4px 10px", outline: "none" }}
            value={famille}
            onChange={(e) => setFamille(e.target.value)}
          >
            <option>--choice--</option>
            <option>informatique</option>
            <option>bureau</option>
          </select>
        </div>
        <button style={{ marginTop: "10px" }} onClick={handleBtnAdd}>
          Add Article
        </button>
      </form>
    </div>
  );
}
