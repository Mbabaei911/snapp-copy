import Navbar from "@homepageComponents/navbarComponent";
import NavbarModal from "@homepageComponents/navbarModalComponent";
import BenefitsSection from "@signupComponents/benefitsSection";
import CalculatorSection from "@signupComponents/calculatorSection";
import FirstSection from "@signupComponents/firstSection";
import React, { Fragment, useEffect } from "react";
import { useSelector } from "react-redux";
function Index() {
  const navbarIsToggled = useSelector(
    (state) => state.toggleNavbar.navbarIsToggled
  );

  //   ///////////
  //   ////making body not scrollable when modals are on
  useEffect(() => {
    if (navbarIsToggled) {
      document.body.style.overflow = "hidden";
      document.body.style.overflowX = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [navbarIsToggled]);
  //   ///////////
  //   ////end of making body not scrollable when modals are on

  return (
    <Fragment>
      <Navbar />
      <NavbarModal />
      <FirstSection />
      <CalculatorSection />
      <BenefitsSection />
    </Fragment>
  );
}

export default Index;
