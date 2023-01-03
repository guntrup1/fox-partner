const riderectToHomePage= () => {
    const homePage = () => {window.history.back();};
    setTimeout(homePage, 10000);
}
riderectToHomePage();