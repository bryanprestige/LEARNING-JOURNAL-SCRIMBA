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
            <img class="image-blog" src="./${this.image}">
            <h1 class="date"> ${this.date}</h1>
            <h2 class="title"> ${this.title}</h2>
            <h3 class="description"> ${this.description}</h3>
        </div>
        `
    }

    /*=======PRIVATE METHODS=======*/

}
customElements.define('more-blogs', MoreBlogs)