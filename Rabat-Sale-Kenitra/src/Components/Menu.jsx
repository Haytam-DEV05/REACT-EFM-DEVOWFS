import ListeVoyage from "./ListeVoyage";
import DetailleVille from "./DetailleVille";
import {
  createBrowserRouter,
  NavLink,
  Outlet,
  RouterProvider,
} from "react-router";
export default function Menu() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <ListeVoyage /> },
        { path: "/detailleVille/:id", element: <DetailleVille /> },
      ],
    },
  ]);
  function Layout() {
    return (
      <>
        <nav
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            background: "green",
            minHeight: "80px",
          }}
        >
          <div className="logo">
            <h2>❤️</h2>
          </div>
          <NavLink to="/">Voyage Ville</NavLink>
        </nav>
        <main>
          <Outlet />
        </main>
      </>
    );
  }
  return <RouterProvider router={router} />;
}
