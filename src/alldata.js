import React from "react";
const UserContext = React.createContext();

function AllData(){
  const ctx = React.useContext(UserContext);
  return (
    <div>
    <h5>All Data in Store</h5>
    {JSON.stringify(ctx)}<br/>
    </div>
  );
}
export default AllData;