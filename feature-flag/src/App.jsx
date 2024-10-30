import FeatureFlagGlobalState from "../context";
import FeatureFlags from "..";
import "./App.css";

function App() {
  return <FeatureFlagGlobalState>
    <FeatureFlags/>
  </FeatureFlagGlobalState>
}

export default App;
