import Cart from "./Cart";

export default function ListeLivre() {
  const data = [
    {
      id: 1,
      titre: "Restfull Java Web Services",
      Auteur: "David Lu",
      Edition: "Packet",
      Poster: "/public/images/homme.jpg",
    },
    {
      id: 2,
      titre: "Rest api Development with Node.js",
      Auteur: "Fernando Daglio",
      Edition: "Apress",
      Poster: "/public/images/femme.jpg",
    },
    {
      id: 3,
      titre: "Restfull Web Services CooKbook",
      Auteur: "Subbu Allamarju",
      Edition: "OREILLY",
      Poster: "/public/images/homme.jpg",
    },
  ];
  return (
    <div>
      <h2>ListeLivre</h2>
      <div
        className="container-livers"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
          gap: "30px",
        }}
      >
        {data.map((ele) => {
          return <Cart livre={ele} key={ele.id} />;
        })}
      </div>
    </div>
  );
}
