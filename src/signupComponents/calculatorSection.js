import { IoMdArrowDropdown } from "react-icons/io";
import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  hideStartSignup,
  showStartSignup,
} from "../ReduxFeatures/startSignupSlice";
const CalculatorSection = () => {
  // calculator data
  const calculatorData = [
    {
      id: 1,
      hours: 4,
      city: "تهران",
      income: 21360000,
      vehicle: "سواری",
    },
    {
      id: 2,
      hours: 6,
      city: "تهران",
      income: 32400000,
      vehicle: "سواری",
    },
    {
      id: 3,
      hours: 8,
      city: "تهران",
      income: 43200000,
      vehicle: "سواری",
    },
    {
      id: 4,
      hours: 12,
      city: "تهران",
      income: 64800000,
      vehicle: "سواری",
    },
    {
      id: 5,
      hours: 4,
      city: "کرج",
      income: 16800000,
      vehicle: "سواری",
    },
    {
      id: 6,
      hours: 6,
      city: "کرج",
      income: 25200000,
      vehicle: "سواری",
    },
    {
      id: 7,
      hours: 8,
      city: "کرج",
      income: 33600000,
      vehicle: "سواری",
    },
    {
      id: 8,
      hours: 12,
      city: "کرج",
      income: 50400000,
      vehicle: "سواری",
    },
    {
      id: 9,
      hours: 4,
      city: "مشهد",
      income: 14400000,
      vehicle: "سواری",
    },
    {
      id: 10,
      hours: 6,
      city: "مشهد",
      income: 21260000,
      vehicle: "سواری",
    },
    {
      id: 11,
      hours: 8,
      city: "مشهد",
      income: 28800000,
      vehicle: "سواری",
    },
    {
      id: 12,
      hours: 12,
      city: "مشهد",
      income: 43200000,
      vehicle: "سواری",
    },
    {
      id: 13,
      hours: 4,
      city: "شیراز",
      income: 15600000,
      vehicle: "سواری",
    },
    {
      id: 14,
      hours: 6,
      city: "شیراز",
      income: 23400000,
      vehicle: "سواری",
    },
    {
      id: 15,
      hours: 8,
      city: "شیراز",
      income: 31200000,
      vehicle: "سواری",
    },
    {
      id: 16,
      hours: 12,
      city: "شیراز",
      income: 46800000,
      vehicle: "سواری",
    },
    {
      id: 17,
      hours: 4,
      city: "تبریز",
      income: 13200000,
      vehicle: "سواری",
    },
    {
      id: 18,
      hours: 6,
      city: "تبریز",
      income: 19800000,
      vehicle: "سواری",
    },
    {
      id: 19,
      hours: 8,
      city: "تبریز",
      income: 26400000,
      vehicle: "سواری",
    },
    {
      id: 20,
      hours: 12,
      city: "تبریز",
      income: 39600000,
      vehicle: "سواری",
    },
    {
      id: 21,
      hours: 4,
      city: "اصفهان",
      income: 15600000,
      vehicle: "سواری",
    },
    {
      id: 22,
      hours: 6,
      city: "اصفهان",
      income: 23400000,
      vehicle: "سواری",
    },
    {
      id: 23,
      hours: 8,
      city: "اصفهان",
      income: 31200000,
      vehicle: "سواری",
    },
    {
      id: 24,
      hours: 12,
      city: "اصفهان",
      income: 46800000,
      vehicle: "سواری",
    },
    {
      id: 25,
      hours: 4,
      city: "تهران",
      income: 21360000,
      vehicle: "موتور",
    },
    {
      id: 26,
      hours: 6,
      city: "تهران",
      income: 32040000,
      vehicle: "موتور",
    },
    {
      id: 27,
      hours: 8,
      city: "تهران",
      income: 42720000,
      vehicle: "موتور",
    },
    {
      id: 28,
      hours: 12,
      city: "تهران",
      income: 64080000,
      vehicle: "موتور",
    },
    {
      id: 29,
      hours: 4,
      city: "کرج",
      income: 9720000,
      vehicle: "موتور",
    },
    {
      id: 30,
      hours: 6,
      city: "کرج",
      income: 14580000,
      vehicle: "موتور",
    },
    {
      id: 31,
      hours: 8,
      city: "کرج",
      income: 19440000,
      vehicle: "موتور",
    },
    {
      id: 32,
      hours: 12,
      city: "کرج",
      income: 29160000,
      vehicle: "موتور",
    },
    {
      id: 33,
      hours: 4,
      city: "مشهد",
      income: 10920000,
      vehicle: "موتور",
    },
    {
      id: 34,
      hours: 6,
      city: "مشهد",
      income: 16380000,
      vehicle: "موتور",
    },
    {
      id: 35,
      hours: 8,
      city: "مشهد",
      income: 21840000,
      vehicle: "موتور",
    },
    {
      id: 36,
      hours: 12,
      city: "مشهد",
      income: 32760000,
      vehicle: "موتور",
    },
    {
      id: 37,
      hours: 4,
      city: "شیراز",
      income: 11160000,
      vehicle: "موتور",
    },
    {
      id: 38,
      hours: 6,
      city: "شیراز",
      income: 16740000,
      vehicle: "موتور",
    },
    {
      id: 39,
      hours: 8,
      city: "شیراز",
      income: 22320000,
      vehicle: "موتور",
    },
    {
      id: 40,
      hours: 12,
      city: "شیراز",
      income: 33480000,
      vehicle: "موتور",
    },
    {
      id: 41,
      hours: 4,
      city: "تبریز",
      income: 14520000,
      vehicle: "موتور",
    },
    {
      id: 42,
      hours: 6,
      city: "تبریز",
      income: 21780000,
      vehicle: "موتور",
    },
    {
      id: 43,
      hours: 8,
      city: "تبریز",
      income: 29040000,
      vehicle: "موتور",
    },
    {
      id: 44,
      hours: 12,
      city: "تبریز",
      income: 43560000,
      vehicle: "موتور",
    },
    {
      id: 45,
      hours: 4,
      city: "اصفهان",
      income: 20160000,
      vehicle: "موتور",
    },
    {
      id: 46,
      hours: 6,
      city: "اصفهان",
      income: 30240000,
      vehicle: "موتور",
    },
    {
      id: 47,
      hours: 8,
      city: "اصفهان",
      income: 40320000,
      vehicle: "موتور",
    },
    {
      id: 48,
      hours: 12,
      city: "اصفهان",
      income: 60480000,
      vehicle: "موتور",
    },
  ];

  // consts
  const cities = ["تهران", "کرج", "تبریز", "شیراز", "مشهد", "اصفهان"];
  const vehicles = ["سواری", "موتور"];

  // states
  const [calculatorStates, setCalculatorStates] = useState({
    selectedCity: "تهران",
    showCityOptions: false,
    selectedVehicle: "سواری",
    showVehicleOptions: false,
    selectedHour: 8,
    showCityOptionsUpward: false,
  });

  // refs
  const cityOptionsRef = useRef(null);
  const vehicleOptionsRef = useRef(null);
  const cityFieldRef = useRef(null); // New ref for the
  const sectionRef = useRef(null);

  // click handles
  const handleCityClick = () => {
    setCalculatorStates((prev) => ({
      ...prev,
      showCityOptions: !prev.showCityOptions,
    }));
  };
  const handleVehicleClick = () => {
    setCalculatorStates((prev) => ({
      ...prev,
      showVehicleOptions: !prev.showVehicleOptions,
    }));
  };

  const handleCitySelect = (city) => {
    setCalculatorStates((prev) => ({ ...prev, selectedCity: city }));
  };
  const handleVehicleSelect = (vehicle) => {
    setCalculatorStates((prev) => ({ ...prev, selectedVehicle: vehicle }));
  };

  const handleOutsideCityOptionsClick = (event) => {
    if (
      cityOptionsRef.current &&
      !cityOptionsRef.current.contains(event.target)
    ) {
      // Close the options
      setCalculatorStates((prevState) => ({
        ...prevState,
        showCityOptions: false,
      }));
    }
  };

  const handleOutsideVehicleOptionsClick = (event) => {
    if (
      vehicleOptionsRef.current &&
      !vehicleOptionsRef.current.contains(event.target)
    ) {
      // Close the options
      setCalculatorStates((prevState) => ({
        ...prevState,
        showVehicleOptions: false,
      }));
    }
  };
  // adding event listener for closing dropdowns

  useEffect(() => {
    // Add event listener for clicks
    document.addEventListener("mousedown", handleOutsideCityOptionsClick);
    document.addEventListener("mousedown", handleOutsideVehicleOptionsClick);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleOutsideCityOptionsClick);
      document.removeEventListener(
        "mousedown",
        handleOutsideVehicleOptionsClick
      );
    };
  }, []);

  // console.log(calculatorStates);

  // Effect to determine the position of the dropdown
  useEffect(() => {
    if (cityOptionsRef.current) {
      const rect = cityFieldRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Check if there is enough space below the input field
      const spaceBelow = windowHeight - rect.bottom;
      const dropdownHeight = 200; // Set this to the height of your dropdown

      if (spaceBelow < dropdownHeight) {
        // Not enough space below, position it above
        setCalculatorStates((prev) => ({
          ...prev,
          showCityOptionsUpward: true,
        }));
      } else {
        // Enough space below, position it below
        setCalculatorStates((prev) => ({
          ...prev,
          showCityOptionsUpward: false,
        }));
      }
    }
  }, [calculatorStates.showCityOptions]);

  // finding item income base on city vehicle and hours client choose

  const foundItemIncome = calculatorData.find(
    (item) =>
      item.city === calculatorStates.selectedCity &&
      item.vehicle === calculatorStates.selectedVehicle &&
      item.hours === calculatorStates.selectedHour
  ).income;

  const formattedIncome = new Intl.NumberFormat("en-US").format(
    foundItemIncome
  );

  //////////////
  ///

  // Logic to determine if the StartSignup section should be hidden
  const dispatch = useDispatch();
  const handleScroll = () => {
    const targetSection = document.getElementById("target-section");
    const rect = targetSection.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
      dispatch(showStartSignup()); // Show when the section is out of view
    } else {
      dispatch(hideStartSignup()); // Hide when the section is in view
    }
  };

  // Add event listener for scroll
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // const isStartSignupVisible = useSelector(
  //   (state) => state.startSignup.isVisible
  // );
  // const x = useSelector(
  //   (state) => state.startSignup.isClicked
  // );

  // console.log("Start x:", x);
  // JSX

  return (
    <div
      id="target-section"
      ref={sectionRef}
      className="bg-calcSectionColor py-10 px-10 lg:h-[440px] lg:py-0 lg:mt-20 "
    >
      <div className="flex max-lg:flex-col items-center  text-center text-white  lg:gap-4 lg:items-center justify-evenly lg:-translate-y-32 xl:w-[80%] xl:mx-auto">
        <div className=" bg-cyan-40 ">
          <p className="fontBold text-2xl lg:text-4xl my-5 xl:my-12">
            ماشین حساب درآمد
          </p>
          <p className=" text-lg lg:text-xl   ">
            ساعت کاری، شهر و وسیله نقلیه‌‌تان را انتخاب کنید، درآمد ‌
            <br className="max-lg:hidden"></br>حدودی‌ ماهانه‌تان را حساب کنید.
          </p>
        </div>
        <div className="bg-white pt-5  mt-16 rounded-3xl text-black xl:w-[430px] shadow-xl border lg:-translate-y-3">
          <div className=" px-7 py-5 mx-auto">
            <div className="bg-blue-100 py-5 px-2  rounded-xl border shadow flex items-center justify-between">
              <svg
                width="40"
                height="20"
                viewBox="0 0 40 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mt-2"
              >
                <path
                  d="M10.5822 17.58L9.66587 18.1691L8.71678 17.58V7.90909L9.66587 7.28727L10.5822 7.90909V17.58ZM6.24587 7.90909L5.28042 8.84182H4.69133L3.74224 7.90909L4.69133 7.28727H5.28042L6.24587 7.90909ZM9.35496 18.4964L8.40587 19.4291H2.4986L1.58224 18.4964L2.4986 17.8745H8.40587L9.35496 18.4964ZM2.17133 17.58L1.25496 18.1691L0.322237 17.58V12.2945L1.25496 11.3455L2.17133 12.2945V17.58ZM14.787 9.82364L13.8379 10.74L12.9052 9.82364V1.10182L13.8379 0.185454L14.787 1.10182V9.82364ZM16.6361 12H15.0979L14.1652 11.0673L15.0979 10.1509H16.6361V12ZM24.1809 7.02545L23.2482 7.64727H21.3827L20.4337 7.02545L21.3827 6.07636H23.2482L24.1809 7.02545ZM25.1137 9.82364L24.4918 10.74L23.5591 9.82364V7.97455L24.4918 7.33636L25.1137 7.97455V9.82364ZM24.1809 11.0673L23.2482 12H21.3827L20.4337 11.0673L21.3827 10.1509H23.2482L24.1809 11.0673ZM20.7609 9.82364L20.1555 10.74L19.2227 9.82364V7.97455L20.1555 7.33636L20.7609 7.97455V9.82364ZM19.8282 11.0673L18.8955 12H16.0973V10.1509H18.8955L19.8282 11.0673ZM31.6174 7.02545L30.701 7.97455H28.8192L27.9028 7.02545L28.8192 6.07636H30.701L31.6174 7.02545ZM32.861 10.1509L31.9283 11.0673L30.9956 10.1509V8.25273L31.9283 7.33636L32.861 8.25273V10.1509ZM34.7428 12H33.1883L32.2556 11.3618L33.1883 10.4455H34.7428V12ZM31.6174 11.3618L30.701 12H28.8192L27.9028 11.3618L28.8192 10.4455H30.701L31.6174 11.3618ZM28.5083 10.1509L27.5919 11.0673L26.6428 10.1509V8.25273L27.5919 7.33636L28.5083 8.25273V10.1509ZM32.861 17.5964L31.9283 18.5127L30.9956 17.5964V12.6382L31.9283 11.6891L32.861 12.6382V17.5964ZM38.7985 3.16364L37.8658 4.09636H37.244L36.3112 3.16364L37.244 2.24727H37.8658L38.7985 3.16364ZM35.984 3.16364L35.3785 4.09636H34.4458L33.5131 3.16364L34.4458 2.24727H35.3785L35.984 3.16364ZM39.9112 9.82364L38.9949 10.74L38.0622 9.82364V6.71455L38.9949 5.76545L39.9112 6.71455V9.82364ZM38.6676 11.0673L37.7349 12H34.3312V10.1509H37.7349L38.6676 11.0673Z"
                  fill="#003AAE"
                ></path>
              </svg>
              <p className=" fontNumber text-3xl bg-yellow-30">
                {formattedIncome}
              </p>
            </div>
            <div className="my-5">
              <p className="bg-yellow-30 text-right text-gray-600">
                روزی چند ساعت می‌خواهید کار کنید؟
              </p>
              <div className="bg-yellow-30 flex items-center justify-between  gap-x-3 *:w-16 *:h-16 xl:*:w-[75px] xl:*:h-[75px] *:bg-white mt-4 ">
                <button
                  onClick={() =>
                    setCalculatorStates((prev) => ({
                      ...prev,
                      selectedHour: 4,
                    }))
                  }
                  className={`flex items-center justify-center w-full h-full border-2 rounded-full shadow text-2xl font-semibold drop-shadow-lg cursor-pointer ${
                    calculatorStates.selectedHour === 4
                      ? "border-blue-800 text-blue-800"
                      : "text-gray-600 "
                  }`}
                >
                  4
                </button>
                <button
                  onClick={() =>
                    setCalculatorStates((prev) => ({
                      ...prev,
                      selectedHour: 6,
                    }))
                  }
                  className={`flex items-center justify-center w-full h-full border-2 rounded-full shadow text-2xl font-semibold drop-shadow-lg cursor-pointer ${
                    calculatorStates.selectedHour === 6
                      ? "border-blue-800 text-blue-800"
                      : "text-gray-600 "
                  }`}
                >
                  6
                </button>
                <button
                  onClick={() =>
                    setCalculatorStates((prev) => ({
                      ...prev,
                      selectedHour: 8,
                    }))
                  }
                  className={`flex items-center justify-center w-full h-full border-2 rounded-full shadow text-2xl font-semibold drop-shadow-lg cursor-pointer ${
                    calculatorStates.selectedHour === 8
                      ? "border-blue-800 text-blue-800"
                      : "text-gray-600 "
                  }`}
                >
                  8
                </button>
                <button
                  onClick={() =>
                    setCalculatorStates((prev) => ({
                      ...prev,
                      selectedHour: 12,
                    }))
                  }
                  className={`flex items-center justify-center w-full h-full border-2 rounded-full shadow text-2xl font-semibold drop-shadow-lg cursor-pointer ${
                    calculatorStates.selectedHour === 12
                      ? "border-blue-800 text-blue-800"
                      : "text-gray-600 "
                  } `}
                >
                  12
                </button>
              </div>
              <div className="mt-7">
                <p className="text-wrap text-gray-600 text-right leading-7">
                  با چه وسیله نقلیه‌ای و در کدام شهر{" "}
                  <br className="xl:hidden"></br>می‌خواهید فعالیت کنید؟
                </p>
                <div className="flex gap-x-3 my-5">
                  <form>
                    <fieldset
                      className="border w-fit border-gray-400 rounded-lg space-x-2 bg-yellow-20 flex relative items-center justify-center py-3 bg-blue-30 cityBox"
                      onClick={handleCityClick}
                    >
                      <legend className="text-right px-3 bg-white rounded-lg mr-3 text-sm">
                        شهر
                      </legend>
                      <div className="flex items-center">
                        <input
                          type="text"
                          value={calculatorStates.selectedCity}
                          id="inputField"
                          placeholder=""
                          readOnly
                          className="borde w-[115px] xl:w-[140px] rounded-lg px-2 outline-none bg-yellow-30"
                          ref={cityFieldRef}
                        />
                        <IoMdArrowDropdown size={20} />
                      </div>
                      {calculatorStates.showCityOptions && (
                        <div
                          className={`options absolute bg-white borde border-gray-300 z-10 w-[144px] xl:w-[165px] text-right rounded-lg text-[17px] right-[1px] h-44 overflow-auto shadow-md ${
                            calculatorStates.showCityOptionsUpward
                              ? "-top-[195px] bottom-full"
                              : "top-[50px]"
                          }`}
                          ref={cityOptionsRef}
                          data-position={
                            calculatorStates.showCityOptionsUpward
                              ? "top"
                              : "bottom"
                          }
                        >
                          {cities.map((city, index) => (
                            <div
                              key={index}
                              onClick={() => handleCitySelect(city)}
                              className={`px-2 hover:bg-gray-200 cursor-pointer py-3 rounded mt-1  ${
                                calculatorStates.selectedCity === city &&
                                "bg-blue-50"
                              }`}
                            >
                              {city}
                            </div>
                          ))}
                        </div>
                      )}
                    </fieldset>
                  </form>
                  <form>
                    <fieldset
                      className="border w-fit border-gray-400 rounded-lg space-x-2 bg-yellow-20 flex relative items-center justify-center py-3 bg-blue-30 cityBox"
                      onClick={handleVehicleClick}
                    >
                      <legend className="text-right px-2 bg-white rounded-lg mr-2 text-sm">
                        وسیله نقلیه
                      </legend>
                      <div className="flex items-center">
                        <input
                          type="text"
                          value={calculatorStates.selectedVehicle}
                          id="inputFieldVehicle"
                          placeholder=""
                          readOnly
                          className="borde w-[115px]  xl:w-[140px] rounded-lg px-2 outline-none bg-yellow-30"
                        />
                        <IoMdArrowDropdown size={20} />
                      </div>
                      {calculatorStates.showVehicleOptions && (
                        <div
                          className="options absolute top-[55px] shadow   bg-white borde border-gray-300 z-10 w-[144px]  xl:w-[165px] text-right rounded-lg text-[17px] right-[1px] h-[100px] overflow-auto"
                          ref={vehicleOptionsRef}
                        >
                          {vehicles.map((vehicle, index) => (
                            <div
                              key={index}
                              onClick={() => handleVehicleSelect(vehicle)}
                              className={`px-2 hover:bg-gray-200 cursor-pointer py-3 ${
                                calculatorStates.selectedVehicle === vehicle &&
                                "bg-blue-50"
                              }`}
                            >
                              {vehicle}
                            </div>
                          ))}
                        </div>
                      )}
                    </fieldset>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CalculatorSection;
