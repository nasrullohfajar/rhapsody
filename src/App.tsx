import HeaderComponent from "@/components/layouts/HeaderComponent";
import SidebarComponent from "@/components/layouts/SidebarComponent";
import AppRouter from "./routes/AppRouter";

function App() {
  return (
    <div className="h-screen">
      <div className="min-h-[10%] ">
        <HeaderComponent />
      </div>

      <div className="flex flex-row h-[75%]">
        <SidebarComponent />
        <AppRouter />
      </div>

      <div className="min-h-[15%]"></div>
    </div>
  );
}

export default App;
