import {LitElement, html, css} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';

class StarWars extends LitElement {

    static properties = {
        film: {type: String},
        _data: {state: true}
    }
    static styles = css`
    .character {
        display: block;
        flex-wrap: wrap;
        padding: 10px;
    }
    .sw-character {
        width: auto;
        height: auto;
        border: 3px solid black;
        margin: 10px;
        padding: 10px;
        box-sizing: border-box;
        }
    .crawl {
        margin: auto;
        text-align: center;
    }
    .crawl p {
        line-height: 5px;
        font-variant: small-caps;
    }`;

    static BASE_URL = "https://swapi.dev/api/films/";

    constructor() {
        super();
        this.film = "1";
        this._films = [1, 2, 3, 4, 5, 6]
    }

    connectedCallback() {
        super.connectedCallback();
        this._fetch();
    }

    _fetch () {
        fetch(StarWars.BASE_URL + this.film)
        .then(response => response.json())
        .then(data => { 
            this._data = data;
        });
    }

    _updateFilm(e) {
        this.film = e.target.value;
        this._data = undefined;
        this._fetch();  
    }

    render() { 
        if (this._data) {
            const crawl = this._data.opening_crawl.split('\r\n')
            return html`
            <form>
                <select name="film" @change=${this._updateFilm}>
                    ${this._films.map(film => {
                        console.log(film===this._film);
                        let selected = film == this.film;
                        return html`<option name=${film} ?selected=${selected}>${film}</option>`
                    }
                        )}
                </select>
            </form>
            
            <h2>${this._data.title}</h2>
            <p>Directed by: ${this._data.director}</p>
            
            <h3>Characters</h3>
            <div class = character>
                ${this._data.characters.map(character => html`<star-wars-character url=${character}></star-wars-character>`)}
            </div>
            <div class='crawl'>${crawl.map(line => html`<p>${line}</p>`)}</div>`;
        } else {
            return html`<p>Loading...${this.film}</p>`;
        }
    }

}

customElements.define('star-wars', StarWars);

class StarWarsCharacter extends LitElement{
    static properties = {
        url: {},
        _data: {state: true}
    }
    constructor() {
        super();
        this.character = "1";
    }
    connectedCallback() {
        super.connectedCallback();
        if(this.url){
            fetch(this.url)
            .then(response => response.json())
            .then(data => { 
                this._data = data;
            });
        }
        }
    _fetch () {
        fetch(StarWarsCharacter.BASE_URL + this.character)
        .then(response => response.json())
        .then(data => { 
            this._data = data;
        });
    }
    _updateCharacter(e) {
        this.character = e.target.value;
        this._data = undefined;
        this._fetch();  
    }
    render() { 
        if (this._data) {
            return html`<h2>${this._data.name}</h2>
            <p>Height: ${this._data.height}</p>`;
    }else {
            return html`<p>Loading...</p>`;
        }
}
    static BASE_URL = "https://swapi.dev/api/people/";
}
customElements.define('star-wars-character', StarWarsCharacter);