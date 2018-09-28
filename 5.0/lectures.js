const lectureModule = {
    render : function() {
        const list = document.getElementById('lectureList');
        LECTURES.forEach(l => {
            list.appendChild(new Lecture(document.createElement('li'), l).build().bind().render());
        });
    }
};

class Lecture {
    constructor(attachNode, {lectureLabel, lectureLink, lectureDetails, lectureExamplesLink}){
        this.attachNode = attachNode;
        this.lectureLabel = lectureLabel;
        this.lectureLink = lectureLink;
        this.lectureDetails = lectureDetails;
        this.lectureExamplesLink = lectureExamplesLink;
    }

    build() {
        this.examples = new ElementBuilder('div')
            .class('samples').build();
        this.examples
            .appendChild(
                new ElementBuilder('a')
                .attr('href', this.lectureExamplesLink)
                .attr('target','_blank')
                .content(`${this.lectureLabel} Examples`).build()
            );
        this.details = new ElementBuilder('div')
                .class('hidden').class('lectureDetails')
                .content(this.lectureDetails).build();
        this.link = new ElementBuilder('a')
            .attr('href', this.lectureLink)
            .class('lectureLink')
            .content(this.lectureLabel).build();
        this.button = new ElementBuilder('button')
            .class('viewMoreDetails')
            .content('👁️').build();
        return this;
    }

    bind() {
        this.link.addEventListener('mouseover', x=> this.details.classList.remove('hidden'))
        this.link.addEventListener('mouseout', x => this.details.classList.add('hidden'));
    
        this.button.addEventListener('click', x=> this.details.classList.toggle('hidden'));
        return this;
    }

    render() {
        this.attachNode.appendChild(this.link);
        this.attachNode.appendChild(this.button);
        this.attachNode.appendChild(this.examples);
        this.attachNode.appendChild(this.details)
        this.attachNode.classList.add('lectureItem');
        return this.attachNode;
    }
}

class ElementBuilder {
    constructor(elName) {
        this.el = document.createElement(elName);
    }

    attr(name, value) {
        this.el.setAttribute(name, value);
        return this;
    }

    class(name) {
        this.el.classList.add(name);
        return this;
    }

    content(content) {
        this.el.innerText = content;
        return this;
    }

    build(){
        return this.el;
    }
}