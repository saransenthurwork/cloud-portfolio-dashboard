import AppShell from "./components/layout/AppShell/AppShell";
import AppRoutes from "./routes/AppRoutes";
import { useLocation } from "react-router-dom";

function App() {
  const location = useLocation();

  const authPages = [
    "/login",
    "/register",
  ];

  const isAuthPage =
    authPages.includes(location.pathname);

  if (isAuthPage) {
    return <AppRoutes />;
  }

  return (
    <AppShell>
      <AppRoutes />
    </AppShell>
  );
}

export default App;