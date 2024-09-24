import { useState } from "react";

import Tooltip from "../tooltip/Tooltip";
import DB from "../../db/db.json";

function InputComponent(props) {
   const [password, setPassword] = useState("");

   const generatePassword = () => {
      if (props.passwordLength === 0) {
         return alert("Password length is 0");
      } else {
         let charset = "";
         let newPassword = "";
         if (props.useSymbols) charset += "@#$";
         if (props.useNumbers) charset += "0123456789";
         if (props.useLowerCase) charset += "abcdefghijklmnopqrstuvwxyz";
         if (props.useUpperCase) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
         for (let i = 0; i < props.passwordLength; i++) {
            newPassword += charset.charAt(
               Math.floor(Math.random() * charset.length)
            );
         }
         setPassword(newPassword);
      }
   };

   const showSmth = () => {
      const pass = password;
      if (pass) {
         DB.passwords.push({
            id: Math.floor(Math.random() * (1000 - 1) + 1),
            passwordText: pass,
         });
         alert("Password was saved");
      }
   };

   return (
      <div className="bg-gray-600 shadow-md border border-gray-500 relative px-5 py-3 rounded-xl text-center text-lg flex justify-between items-center">
         <Tooltip data="Restart" generatePassword={generatePassword} />
         <input
            type="text"
            id="voice-search"
            className="bg-gray-600 border-none text-#000000-900 text-[18px] rounded-lg h-8 text-center"
            placeholder="Generate your password"
            defaultValue={password}
            // value={password}
            required
            onInput={props.checkPassword}
         />
         <Tooltip data="save" showSmth={showSmth} />
         <Tooltip data="Copy" />
      </div>
   );
}

export default InputComponent;
