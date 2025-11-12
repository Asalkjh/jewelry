import Navbar from "./Navbar";
import Sidebar from "./sidebar";

interface IMainLayoutProps {
  children: React.ReactNode;
}

function MainLayout({ children }: IMainLayoutProps) {
  return (
    <>
      <Navbar />
      <Sidebar/>
      {children}
    </>
  );
}

export default MainLayout;
