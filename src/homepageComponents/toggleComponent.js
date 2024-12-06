// import React from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { toggle, setTrue, setFalse } from "../ReduxFeatures/toggleNavbarSlice";

// const ToggleNavbarComponent = () => {
//   const isToggled = useSelector((state) => state.toggle.isToggled);
//   const dispatch = useDispatch();

//   return (
//     <div>
//       <h1>{isToggled ? "True" : "False"}</h1>
//       <button
//         className="bg-cyan-500 p-3 mx-2 rounded-md"
//         onClick={() => dispatch(toggle())}
//       >
//         Toggle
//       </button>
//       <button
//         className="bg-cyan-500 p-3 mx-2 rounded-md"
//         onClick={() => dispatch(setTrue())}
//       >
//         Set True
//       </button>
//       <button
//         className="bg-cyan-500 p-3 mx-2 rounded-md"
//         onClick={() => dispatch(setFalse())}
//       >
//         Set False
//       </button>
//     </div>
//   );
// };

// export default ToggleNavbarComponent;
