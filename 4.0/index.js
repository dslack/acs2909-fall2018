
window.onload = function(){
    const tabs = document.getElementById('tabs');

    for (let tabObj of TABS) {
        let tab = Utilities.createListLink(tabObj);
        Utilities.setActiveTab(tab, tabObj.link);
        tabs.appendChild(tab);
    }

    if (ACTIVE_TAB === 'links.html') {
        const links = document.getElementById('links');
        LINKS.forEach((linkObj) => links.appendChild(Utilities.createListLink(linkObj)));
    }
}
