import Tabs from "./tabs";

const RandomContent = () => {
  return <h1>Some Random Content.</h1>;
};

const TabTest = () => {
  const tabs = [
    {
      label: "Tab 1",
      content: <div>This tab 1 content.</div>,
    },
    {
      label: "Tab 2",
      content: <div>This tab 2 content.</div>,
    },
    {
      label: "Tab 3",
      content: <RandomContent />,
    },
    ];
    const handleChange = (currentTabIndex) => {
        console.log(currentTabIndex);
    }
  return <Tabs tabsContent={tabs} onChange={handleChange} />;
};

export default TabTest;
