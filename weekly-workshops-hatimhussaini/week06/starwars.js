import {LitElement, html, css} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';

class StarWarsFilm extends LitElement {

    static properties = {
        film: {type: String},
        data: {state: true}
    };

    static BaseUrl = "https://swapi.dev/api/films/";

    constructor(){
        super();
        this.film = "1";
        this.data = null;
    }

    connectedCallback(){
        super.connectedCallback();
        fetch(StarWarsFilm.BaseUrl + this.film)
        .then(response => response.json())
        .then(data => {
            this.data = data;
        });
    }

    render(){
        if(this.data){
            return html`<h2>${this.data.title}</h2>
            <p> Directed by: ${this.data.director}</p>`;
        }else{
        return html`<p>Loading...${this.film}</p>`;
        }
    }
}
customElements.define('starwars-film', StarWarsFilm);