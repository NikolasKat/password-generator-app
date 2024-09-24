import { useState } from "react";

import { CgMathPlus, CgMathMinus } from "react-icons/cg";

import SettingButton from "../settingButton/SettingButton";
import InputComponent from "../inputComponent/InputComponent";
import DB from "../../db/db.json";
function App() {
   const [counter, setCounter] = useState(0);
   const [parameters, setParameters] = useState([
      { click: false, text: "A-Z" },
      { click: false, text: "a-z" },
      { click: false, text: "0-9" },
      { click: false, text: "#$%" },
   ]);
   const [useSymbols, setUseSymbols] = useState(false);
   const [useNumbers, setUseNumbers] = useState(false);
   const [useLowerCase, setUseLowerCase] = useState(false);
   const [useUpperCase, setUseUpperCase] = useState(false);

   const onChange = (e) => {
      const result = [];

      parameters.forEach((item, index) => {
         if (index == e.target.id) {
            item.click = !item.click;

            result.push(item);
         } else {
            result.push(item);
         }
      });

      setParameters((parameters) => result);
      setUseSymbols((useSymbols) => parameters[3].click);
      setUseNumbers((useNumbers) => parameters[2].click);
      setUseLowerCase((useLowerCase) => parameters[1].click);
      setUseUpperCase((useUpperCase) => parameters[0].click);
   };

   const showPasswordDB = () => {
      console.log(JSON.stringify(DB.passwords));
      const items = DB.passwords.map((item) => item.passwordText);
      return alert(items);
   };

   return (
      <div className="flex relative z-0 min-h-screen items-center justify-center text-white">
         <div className="bg-gray-700 p-4 rounded-xl min-w-96">
            <InputComponent
               passwordLength={counter}
               useSymbols={useSymbols}
               useNumbers={useNumbers}
               useLowerCase={useLowerCase}
               useUpperCase={useUpperCase}
            />

            <div className="flex relative justify-between items-center bg-gray-600 shadow-md border border-gray-500 px-5 py-3 rounded-xl text-center text-xl font-medium mt-3">
               <h2>Length</h2>
               <div className="flex justify-between w-1/3 items-center">
                  <span>{counter}</span>
                  <button
                     className="w-8 h-8 bg-gray-500 rounded-2xl"
                     onClick={() => {
                        setCounter((counter) =>
                           counter < 15 ? counter + 1 : 15
                        );
                     }}
                  >
                     <CgMathPlus className="mt-0 mb-0 mr-auto ml-auto" />
                  </button>
                  <button
                     className="w-8 h-8 bg-gray-500 rounded-2xl"
                     onClick={() => {
                        setCounter((counter) =>
                           counter > 0 ? counter - 1 : 0
                        );
                     }}
                  >
                     <CgMathMinus className="mt-0 mb-0 mr-auto ml-auto" />
                  </button>
               </div>
            </div>
            <SettingButton data={parameters} onChange={(e) => onChange(e)} />
            <button
               className="text-white bg-gray-600 hover:bg-gray-500 font-medium rounded-lg text-sm px-8 py-2.5 me-2 mt-2"
               onClick={showPasswordDB}
            >
               Show your saved passwords
            </button>
         </div>
      </div>
   );
}

export default App;
