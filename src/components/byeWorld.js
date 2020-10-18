import React, { useState } from "react";

// React.useState()
// useState()

export const ByeWorld = () => {
  //an int variable called "count", the second part of the array is the function
  //that updates the state of the variable count.
  //This is then set equal to React's hook useState. The function to update
  //count is in useState().
  const [count, SetCount] = useState(0);

  //function to update count. This will call the SetCount function that will
  //actually update it
  const counterFunction = (x) => {
    //temporary variable to hold the update to count
    let countTemp = count + x;

    //function that is called to update count variable
    SetCount(countTemp);
  };

  return (
    <div>
      {/* the on click event will handle what happens when the user clicks on the element */}
      {/* this calls the "counterFucntion" function and passes in the value 1 */}
      <button onClick={() => counterFunction(1)}>don't click me</button>

      {/* the variable count, you need the {} to express JS elements in the return */}
      <p>{count}</p>
    </div>
  );
};

export default ByeWorld;