import { useSelector, useDispatch } from "react-redux";
import { delete_article } from "./Feature/SliceArticles";
export default function ListeArtcles() {
  const articles = useSelector((state) => state.articlesSlice.articles);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>ListeArtcles</h1>
      <div
        className="container-articles"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
          gap: "20px",
        }}
      >
        {articles.map((ele) => {
          return (
            <div
              key={ele.id}
              style={{ backgroundColor: "red", padding: "10px" }}
            >
              <div className="info">
                <h1>{ele.id}</h1>
                <h2>{ele.designation}</h2>
                <h2>{ele.famille}</h2>
              </div>
              <button onClick={() => dispatch(delete_article(ele.id))}>
                delete
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
