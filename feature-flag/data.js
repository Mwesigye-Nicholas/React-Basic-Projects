const dummyApiResponse = {
    showLightDarkMode: true,
    showTicTacToeBoard: true,
    showRandomColorGenerator: true,
    showAccordian: true,
   showTreeView: false
}

function featureFlagsDataServiceCall() {
    return new Promise((resolve, reject) => {
        if (dummyApiResponse) setTimeout(resolve(dummyApiResponse), 500);
        else reject("Some Error occurred! please try again");
    })
}
export default featureFlagsDataServiceCall