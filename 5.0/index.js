
window.onload = function(){
    const tabs = document.getElementById('tabs');

    for (let tabObj of TABS) {
        let tab = Utilities.createListLink(tabObj);
        Utilities.setActiveTab(tab, tabObj.link);
        tabs.appendChild(tab);
    }

    if (ACTIVE_TAB === 'links.html') {
        const links = document.getElementById('links');
        LINKS.forEach((linkObj) => links.appendChild(Utilities.createListLink(linkObj, true)));
    }

    if (typeof lectureModule !== 'undefined') {
        lectureModule.render();
    }
}

window.addEventListener('keypress', handleKeyboardShortcuts);


function handleKeyboardShortcuts(e) {
    if (e.shiftKey && e.keyCode === 33) {
        changeLocation(TABS[0]);
    } else if (e.shiftKey && e.keyCode === 64) {
        changeLocation(TABS[1]);
    } else if (e.shiftKey && e.keyCode === 35) {
        changeLocation(TABS[2]);
    }
}

function changeLocation(tab) {
    window.location = tab.link;
}
