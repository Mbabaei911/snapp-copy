import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  startSignupIsClicked,
  resetStartSignupIsClicked,
} from "../ReduxFeatures/startSignupSlice";
function StartSignup() {
  const isStartSignupVisible = useSelector(
    (state) => state.startSignup.isVisible
  );
  const dispatch = useDispatch();

  const handleButtonClick = () => {
    dispatch(startSignupIsClicked());
    setTimeout(() => {
      dispatch(resetStartSignupIsClicked());
    }, 1000);
  };
  return (
    <div
      className={` bg-white  z-30 fixed bottom-0 left-0 right-0 text-center shadow  border drop-shadow py-4 ${
        isStartSignupVisible ? "block lg:hidden" : "hidden lg:hidden"
      }`}
    >
      <button
        onClick={handleButtonClick}
        className="bg-calcSectionColor fontBold text-sm px-24 py-4 my- rounded-lg text-white hover:bg-blue-700"
      >
        شروع ثبت نام
      </button>
    </div>
  );
}

export default StartSignup;
