import { Component } from "react";

class SettingButton extends Component {
   renderItems(arr) {
      const items = arr.map((item, i) => {
         return (
            <button
               id={i}
               key={i}
               type="button"
               style={
                  item.click
                     ? { backgroundColor: "#288935" }
                     : { backgroundColor: "gray" }
               }
               className="text-white bg-gray-500 hover:bg-gray-900 font-medium rounded-lg text-sm px-8 py-2.5 me-2 mb-2"
               onClick={(i) => {
                  this.props.onChange(i);
               }}
            >
               {item.text}
            </button>
         );
      });

      return <>{items}</>;
   }

   render() {
      const items = this.renderItems(this.props.data);

      return (
         <div className="flex justify-around rounded-md shadow-sm items-center mt-3">
            {items}
         </div>
      );
   }
}

export default SettingButton;
