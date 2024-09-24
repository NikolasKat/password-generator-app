import { VscDebugRestart } from "react-icons/vsc";
import { FaRegClipboard } from "react-icons/fa";
import { MdDataSaverOn } from "react-icons/md";

function Tooltip(props) {
   const copyPassword = () => {
      const copyText = document.getElementById("voice-search");
      copyText.setSelectionRange(0, 99999);

      navigator.clipboard.writeText(copyText.value);
      alert("Copied");
   };

   return (
      <div className="group relative flex justify-center">
         <button
            onClick={
               props.data === "Copy"
                  ? copyPassword
                  : props.data === "Restart"
                  ? props.generatePassword
                  : props.showSmth
            } //props.data === "Copy" ? copyPassword : props.showSmth
         >
            {props.data === "Restart" ? (
               <VscDebugRestart />
            ) : props.data === "Copy" ? (
               <FaRegClipboard />
            ) : (
               <MdDataSaverOn />
            )}
         </button>
         <span className="absolute bottom-6  px-5 py-3 text-center scale-0 rounded bg-gray-800 text-xs text-white group-hover:scale-100 transition-all">
            {props.data}
         </span>
      </div>
   );
}

export default Tooltip;
