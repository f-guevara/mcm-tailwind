import Header from "./Header"
import {Outlet} from "react-router-dom"
import Footer from "./Footer"

function Layout() {
  return (
    <>
    <Header />
    <div className="outer-wrapper">
      <div className="content-wrapper">
        <main>
          <Outlet />
        </main>
      </div>
      
    </div>
    <Footer />
    </>
  );
}

export default Layout;