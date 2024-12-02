import React, { Fragment, useEffect } from "react";
import HomePage from "@/components/homePage";
import { useSelector } from "react-redux";
import Navbar from "@/components/navbarComponent";
import NavbarModal from "@/components/navbarModalComponent";
import FooterComponent from "@/components/footerComponent";

function Index() {
  const navbarIsToggled = useSelector(
    (state) => state.toggleNavbar.navbarIsToggled
  );

  ///////////
  ////making body not scrollable when modals are on
  useEffect(() => {
    if (navbarIsToggled) {
      document.body.style.overflow = "hidden";
      document.body.style.overflowX = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [navbarIsToggled]);
  ///////////
  ////end of making body not scrollable when modals are on

  return (
    <Fragment>
      <Navbar />
      <NavbarModal />
      <HomePage />
      <FooterComponent />
      </Fragment>
  );
}

export default Index;
