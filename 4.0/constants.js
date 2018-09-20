const TABS = [
    {
        link: "index.html",
        label:"Course Details"
    },
    {
        link: "lectures.html",
        label:" Lectures and Samples"
    },
    {
        link: "links.html",
        label:"Links"
    }
];

const LINKS = [{"label":"Slack Invite Link","link":"https://join.slack.com/t/acs2909-fall2018/shared_invite/enQtNDI4NTAxMTAzOTczLTY3ZWU3N2RhNDg0YjY0MTkzN2E2MzA4NzU0OTgxZTEyZjVhYjJjNjhlNDcwMWI5M2ZiM2YzZGU0MWQ5OGFmYmY"},{"label":"Eloquent Javascript (Course Textbook)","link":"http://eloquentjavascript.net/"},{"label":"Eloquent Javascript Code Samples","link":"https://eloquentjavascript.net/code/"},{"label":"JavaScript Design Patterns","link":"https://addyosmani.com/resources/essentialjsdesignpatterns/book/"},{"label":"Mozilla Developer Network","link":"https://developer.mozilla.org/en-US/docs/Web/JavaScript)"},{"label":"Why Learn Vanilla JS","link":"https://snipcart.com/blog/learn-vanilla-javascript-before-using-js-frameworks"},{"label":"JSFiddle","link":"http://jsfiddle.net"},{"label":"We might not need jQuery","link":"https://css-tricks.com/now-ever-might-not-need-jquery/"},{"label":"Visual Studio Code","link":"https://code.visualstudio.com/"},{"label":"Stackblitz","link":"https://stackblitz.com"},{"label":"Website Git Link","link":"https://github.com/dslack/acs2909-fall2018"}];


const Utilities = {
    setActiveTab: function (tab, link) {
        if (link === ACTIVE_TAB) {
            tab.classList.add('active');
        }
    } ,
    createListLink: function(tabObj) {
        let {link, label} = tabObj;
        let item = document.createElement('li');
        let anchorText = document.createTextNode(label);
        let anchor = document.createElement('a');
        anchor.href=link;
        anchor.appendChild(anchorText);
        item.appendChild(anchor);
    
        return item;
    }
}