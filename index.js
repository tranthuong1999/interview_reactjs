const roadmap = {
    getRoadmapUrl() {
        console.log(`https://roadmap.sh/${this.slug}`);
    },
};

const javascript = {
    name: 'JavaScript Roadmap',
    description: 'Learn JavaScript',
    slug: 'javascript',
    greet() {
        console.log(`${this.name} - ${this.description}`);
    },
};

Object.setPrototypeOf(roadmap, javascript);
// javascript.getRoadmapUrl() // https://roadmap.sh/javascript
// javascript.greet()// https://roadmap.sh/javascript
console.log("check ::::", roadmap.name)
console.log("check ::::", roadmap.description)
console.log("check ::::", roadmap.slug)
roadmap.greet();
