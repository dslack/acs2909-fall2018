const TABS_LINK = ["index.html", "lectures.html", "links.html"];
const TABS_LABEL = ["Course Details", "Lectures and Samples", "Links"];


const LINKS_LABEL = ["Slack Invite Link","Eloquent Javascript (Course Textbook)","Eloquent Javascript Code Samples","JavaScript Design Patterns","Mozilla Developer Network","Why Learn Vanilla JS","JSFiddle","We might not need jQuery","Visual Studio Code","Stackblitz", "Website Git Link"];
const LINKS_LINK = ["https://join.slack.com/t/acs2909-fall2018/shared_invite/enQtNDI4NTAxMTAzOTczLTY3ZWU3N2RhNDg0YjY0MTkzN2E2MzA4NzU0OTgxZTEyZjVhYjJjNjhlNDcwMWI5M2ZiM2YzZGU0MWQ5OGFmYmY","http://eloquentjavascript.net/","https://eloquentjavascript.net/code/","https://addyosmani.com/resources/essentialjsdesignpatterns/book/","https://developer.mozilla.org/en-US/docs/Web/JavaScript)","https://snipcart.com/blog/learn-vanilla-javascript-before-using-js-frameworks","http://jsfiddle.net","https://css-tricks.com/now-ever-might-not-need-jquery/","https://code.visualstudio.com/","https://stackblitz.com", "https://github.com/dslack/acs2909-fall2018"];

window.onload = function(){
    const tabs = document.getElementById('tabs');
    for (let x = 0; x < TABS_LINK.length; x++) {
        let tab = createListLink(TABS_LINK[x], TABS_LABEL[x]);
        if (TABS_LINK[x] === ACTIVE_TAB){ 
            tab.classList.add('active');
        }
        tabs.appendChild(tab);
    }

    if (ACTIVE_TAB === 'links.html') {
        const links = document.getElementById('links');
        for (let x = 0; x < LINKS_LINK.length; x++) {
            links.appendChild(createListLink(LINKS_LINK[x], LINKS_LABEL[x]));
        }
    }
}

function createListLink(link, label) {
    let item = document.createElement('li');
    let anchorText = document.createTextNode(label);
    let anchor = document.createElement('a');
    anchor.href=link;
    anchor.appendChild(anchorText);
    item.appendChild(anchor);

    return item;
}