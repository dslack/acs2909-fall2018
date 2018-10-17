const TABS = [
    {
        link: "index.html",
        label:"Course Details"
    },
    {
        link: "lectures.html",
        label:" Lectures, Samples and Assignments"
    },
    {
        link: "links.html",
        label:"Links"
    }
];

const LINKS = [{"label":"Slack Invite Link","link":"https://join.slack.com/t/acs2909-fall2018/shared_invite/enQtNDI4NTAxMTAzOTczLTY3ZWU3N2RhNDg0YjY0MTkzN2E2MzA4NzU0OTgxZTEyZjVhYjJjNjhlNDcwMWI5M2ZiM2YzZGU0MWQ5OGFmYmY"},{"label":"Eloquent Javascript (Course Textbook)","link":"http://eloquentjavascript.net/"},{"label":"Eloquent Javascript Code Samples","link":"https://eloquentjavascript.net/code/"},{"label":"JavaScript Design Patterns","link":"https://addyosmani.com/resources/essentialjsdesignpatterns/book/"},{"label":"Mozilla Developer Network","link":"https://developer.mozilla.org/en-US/docs/Web/JavaScript)"},{"label":"Why Learn Vanilla JS","link":"https://snipcart.com/blog/learn-vanilla-javascript-before-using-js-frameworks"},{"label":"JSFiddle","link":"http://jsfiddle.net"},{"label":"We might not need jQuery","link":"https://css-tricks.com/now-ever-might-not-need-jquery/"},{"label":"Visual Studio Code","link":"https://code.visualstudio.com/"},{"label":"Stackblitz","link":"https://stackblitz.com"},{"label":"Website Git Link","link":"https://github.com/dslack/acs2909-fall2018"}];

const lecturePath = path => `https://courses.acs.uwinnipeg.ca/2909-050/lectures/${path}`;
const examplesPath = path => `https://courses.acs.uwinnipeg.ca/2909-050/lectures/${path}`;

const LECTURES = [
    {
        lectureLink:lecturePath("week01/Week01.pdf"),
        lectureLabel: "Lecture 1",
        lectureExamplesLink: examplesPath("week01/Week01Samples.html"),
        lectureDetails: "Course Outline discussion, HTML/CSS"
    },
    {
        lectureLink:lecturePath('week02/Week02.pdf'),
        lectureLabel:"Lecture 2",
        lectureExamplesLink: examplesPath("week02/Week02Samples.html"),
        lectureDetails: "Finished CSS, Javascript language syntax, values/types, Variables, functions"
    },
    {
        lectureLink: lecturePath('week03/Week03.pdf'),
        lectureLabel:"Lecture 3",
        lectureExamplesLink: examplesPath('week03/Week03Samples.html'),
        lectureDetails: "More on functions, Rest parameters, Objects, Classes, prototypes"
    },
    {
        lectureLink: lecturePath('week04/Week04.pdf'),
        lectureLabel: "Lecture 4",
        lectureExamplesLink: examplesPath('week04/Week04Samples.html'),
        lectureDetails: "Events and DOM"
    },
    {
        lectureLink: lecturePath('week05/Week05.pdf'),
        lectureLabel: "Lecture 5",
        lectureExamplesLink: examplesPath('week05/Week05Sample.html'),
        lectureDetails: "Finishing up DOM, Canvas and Possibly Geolocation"
    }
    ,
    {
        lectureLink: lecturePath('week06/Week06.pdf'),
        lectureLabel: "Lecture 6",
        lectureExamplesLink: examplesPath('week06/Week06Sample.html'),
        lectureDetails: "History/Networking redux, Geolocation."
    }
]


const Utilities = {
    setActiveTab: function (tab, link) {
        if (link === ACTIVE_TAB) {
            tab.classList.add('active');
        }
    } ,
    createListLink: function(tabObj, openInNewWindow = false) {
        let {link, label} = tabObj;
        let item = document.createElement('li');
        let anchorText = document.createTextNode(label);
        let anchor = document.createElement('a');
        anchor.href=link;
        if (openInNewWindow){
            anchor.target = '_blank';
        }
        anchor.appendChild(anchorText);
        item.appendChild(anchor);
    
        return item;
    }
}