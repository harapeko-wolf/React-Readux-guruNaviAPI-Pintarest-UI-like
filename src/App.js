import React from "react";
import ImageList from "./containers/ImageList";
import Search from "./containers/Search";

const App = () => {
  return (
    <div>
      <h2>Lunch search near your current location</h2>
      <p>右上 Open In New Windowから現在地周辺ランチ検索できます➹</p>

      <Search />
      <ImageList />
    </div>
  );
};
export default App;
