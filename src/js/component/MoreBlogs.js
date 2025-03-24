import { LitElement, html } from 'https://cdn.jsdelivr.net/gh/lit/dist@3/all/lit-all.min.js';
import css from '../../css/main.css' with { type: 'css' }
import { } from '../main.js';

/**
 * More Blogs Web Component
 * @class More Blogs
 * @emits 'more-blogs'
 */

export class MoreBlogs extends LitElement {
    
    static styles = [css];
    static properties = {
        date: { type: String },
        title: { type: String },
        description: { type: String },
        image: { type: String },
    }

    constructor() {
        super();
    }
    
    connectedCallback() {
        super.connectedCallback();
    }   
   
    render() {    
    return html`
        <div id="more-blogs-component">
            <img class="image-blog" src="./assets/blog-1-image.png">
            <h1 class="date"> March 24, 2024</h1>
            <h2 class="title">My new journey as a bootcamp student.</h2>
            <h3 class="description">After several months of learning in the Frontend Developer Career Path, I've made the big jump over to the Bootcamp to get expert code reviews of my Solo Projects projects and meet like-minded peers.</h3>
        </div>
        `
    }

    /*=======PRIVATE METHODS=======*/

}
customElements.define('more-blogs', MoreBlogs)