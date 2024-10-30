import Accordion from "../accordian-project/src/components/accordian";
import LightDarkMode from "../Light-Dark-mode/src/components/LightDarkMode";
import RandomColorGenerator from "../RandomColorGenerator/RandomColorGenerator/src/component";
import TicTacToe from "../tic-tac-toe/src/components";
import TreeView from "../Recursive Navigation Menu/src/components";
import { FeatureFlagsContext } from "./context";
import { useContext } from "react";
import MenuList from "../Recursive Navigation Menu/src/components/menu-list";

export default function FeatureFlags() {
  const { loading, enabledFlags } = useContext(FeatureFlagsContext);

  const componentsToRender = [
    {
      key: "showLightDarkMode",
      component: <LightDarkMode />,
    },
    {
      key: "showTicTacToeBoard",
      component: <TicTacToe />,
    },
    {
      key: " showRandomColorGenerator",
      component: <RandomColorGenerator />,
    },
    {
      key: "showAccordian",
      component: <Accordion />,
    },
    {
      key: "showTreeView",
        component: <TreeView menus={MenuList} />,
    },
  ];

  function checkEnabledFlag(getCurrentKey) {
    return enabledFlags[getCurrentKey];
  }
  
  if (loading) return <h1>Loading Data ! Please Wait...</h1>;

  return (
    <div>
      <h1>Feature Flags</h1>
      {componentsToRender.map((componentItem) =>
        checkEnabledFlag(componentItem.key) ? componentItem.component : null
      )}
    </div>
  );
}
