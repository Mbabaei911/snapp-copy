import React, { Fragment, useEffect } from "react";
import { useSelector } from "react-redux";
import HomePage from "@homepageComponents/homePage";
import Navbar from "@homepageComponents/navbarComponent";
import NavbarModal from "@homepageComponents/navbarModalComponent";
import FooterComponent from "@homepageComponents/footerComponent";

function Index() {
  const navbarIsToggled = useSelector(
    (state) => state.toggleNavbar.navbarIsToggled
  );
  console.log(navbarIsToggled)

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
