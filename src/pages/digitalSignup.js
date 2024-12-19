import Navbar from "@homepageComponents/navbarComponent";
import NavbarModal from "@homepageComponents/navbarModalComponent";
import BenefitsSection from "@signupComponents/benefitsSection";
import CalculatorSection from "@signupComponents/calculatorSection";
import CommentSection from "@signupComponents/commentsSection";
import FirstSection from "@signupComponents/firstSection";
import QuestionSection from "@signupComponents/questionsSection";
import SignupFooter from "@signupComponents/signupFooter";
import StartSignup from "@signupComponents/startSignUp";
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
      <QuestionSection />
      <CommentSection />
      <SignupFooter />
      <StartSignup />
    </Fragment>
  );
}

export default Index;
