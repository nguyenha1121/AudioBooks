import React from "react";
import { Navigator } from "react-native";
import { Router, Scene, Schema, Route } from "react-native-router-flux";
import DetailStory from "./components/DetailStory";

import Home from "./components/Home";

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 65 }}>
      <Scene key="Home" component={Home} initial title="Hone Page" />
      <Scene key="DetailStory" component={DetailStory} title="nothings" />
    </Router>
  );
};

export default RouterComponent;
// <Schema name="bottom" sceneConfig={Navigator.SceneConfigs.FloatFromBottom} />
