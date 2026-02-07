import {
  Outlet,
  NavLink,
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import ListeArtcles from "./ListeArtcles";
import AddArticles from "./AddArticle";
import CalcPoids from "./CalcPoids";

export default function Menu() {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: (
            <>
              <ListeArtcles />
              <h2 style={{ textAlign: "center" }}>=======</h2>
              <AddArticles />
            </>
          ),
        },
        { path: "/CalcPoids", element: <CalcPoids /> },
      ],
    },
  ]);
  function Layout() {
    return (
      <>
        <nav
          style={{
            background: "red",
            minHeight: "60px",
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <NavLink to="/" style={{ color: "black", fontSize: "20px" }}>
            Articles
          </NavLink>
          <NavLink to="/CalcPoids" style={{ color: "black", fontSize: "20px" }}>
            CalcPoids
          </NavLink>
        </nav>
        <main>
          <Outlet />
        </main>
      </>
    );
  }
  return <RouterProvider router={route}></RouterProvider>;
}
