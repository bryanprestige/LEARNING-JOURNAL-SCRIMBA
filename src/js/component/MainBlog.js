import { LitElement, html } from 'https://cdn.jsdelivr.net/gh/lit/dist@3/all/lit-all.min.js';
import css from '../../css/main.css' with { type: 'css' }
import { } from '../main.js';

/**
 * Main Blog Web Component
 * @class Main Blog
 * @emits 'main-blog'
 */

export class MainBlog extends LitElement {
    
    static styles = [css];
    static properties = {
        date: { type: String },
        title: { type: String },
        description: { type: String },
    }

    constructor() {
        super();
    }
    
    connectedCallback() {
        super.connectedCallback();
    }   
   
    render() {    
    return html`
        <div id="main-blog-component">
            <h1 class="date"> ${this.date}</h1>
            <a href="./sample-post.html">
                <h2 class="title">${this.title}</h2>
            </a>
            <h3 class="description">${this.description}</h3>
        </div>
        `
    }

    /*=======PRIVATE METHODS=======*/

}
customElements.define('main-blog', MainBlog)