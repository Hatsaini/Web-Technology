import {LitElement, html, css} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';

class PageFooter extends LitElement {

    static properties = {
        year: {type: Number},
    };

    constructor() {
        super();
        this.year = new Date().getFullYear();
    }

    static styles = css`
        :host { 
            display: block;
            text-align: center;
            padding: 20px;
            background-color: #2a5298;
            color: white;
            font-size: 14px;
            }
        `;
    render() {
        return html`
        <footer>
            <p>&copy; ${this.year} Hatim Hussaini. All rights reserved.</p>
        </footer>`;
    }
}
customElements.define('page-footer', PageFooter);