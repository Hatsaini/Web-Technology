import {LitElement, html, css} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';

class PageHeader extends LitElement {

    static properties = {
        title: {type: String},
        logo: {type: String}
    };

    static styles = css`
        :host { 
            font-family: Arial, sans-serif;
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 30px;
            background: linear-gradient(to right, #1e3c72, #2a5298);
            color: white;
        }
        header {
            display: flex;
            flex-direction: column;
            align-items: center;
            background: none;
        }
        img { 
            border: 3px solid white;
            display: flex;
            width: 120px;
            height: 120px;
            margin-bottom: 20px;
            border-radius: 50%;
        }
        h1 { 
            font-size: 40px;
            font-weight: 700;
        }
    `;

    render() {
        return html`
        <header>
        <img src=${this.logo} alt="company logo">
        <h1>${this.title}</h1>
        </header>`
    }
}
customElements.define('page-header', PageHeader);

