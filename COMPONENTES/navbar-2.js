class Header extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = ` 
      <style>
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap');

      * {
        margin: 0;
        padding: 0;
        font-family: 'Inter', sans-serif;
      }
      
      :root {
          --cor1: #0030AD;
          --cor2: #00237A;
          --cor3: #0048FF;
          --cor4: #00113B;
          --cor5: #0074E0;
      }
      
      header {
        border-radius: 0%
        width: 100vw;
      }

      nav {
        position:sticky;
        display: grid;
        grid-template-columns: .3fr .5fr .5fr 1fr 1fr 1fr .3fr;
        align-items: center;
        background-color: #fff;
        height: 120px;
        border-bottom: 5px solid var(--cor2);
        place-items: center;
      }
      
          /* Sanduiche-menu */
      
      .container {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        grid-column: 2;
      }
      
      #checkbox-menu {
        position: absolute;
        opacity: 0;
      }
      
      .container label {
        cursor: pointer;
        position: relative;
        display: block;
        height: 22px;
        width: 45px;
      }
      
      .container label span {
        position: absolute;
        display: block;
        height: 5px;
        width: 100%;
        border-radius: 30px;
        background: var(--cor1);
        transition: .2s ease-in-out;
      }
      
      .container label span:nth-child(1) {
        top: 0px;
      }
      
      .container label span:nth-child(2) {
        top: 8px;
      }
      
      .container label span:nth-child(3) {
        top: 16px;
      }
      
      #checkbox-menu:checked+label span:nth-child(1) {
        transform: rotate(-45deg);
        top: 8px;
      }
      
      #checkbox-menu:checked+label span:nth-child(2) {
        opacity: 0;
      }
      
      #checkbox-menu:checked+label span:nth-child(3) {
        transform: rotate(45deg);
        top: 8px;
      }
      
            /* Area de Busca */
      
      #divBusca {
        display: flex;
        background-color: white;
        border-radius: 43px;
        height: 45px;
      }
      
      #divBusca img {
        width: 30px;
        height: 30px;
      }
      
      .txtBusca {
        outline: none;
        background-color: transparent;
        padding-left: 15px;
        font-size: 18px;
        border: none;
        height: 45px;
        width: 680px;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 11px;
      }
      
      .imgPesquisa {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50px;
        background: var(--cor1);
        border: none;
        outline: none;
        border-radius: 11px;
        transition: all .2s ease-in-out;
        margin-left: -50px;
      }
      
      .imgPesquisa ion-icon {
        width: 22px;
        height: 22px;
      }
      
      .imgPesquisa:active {
        background: #ccc;
      }
      
      .imgCentral:active {
        background: #ccc;
      }
      
      .imgFavoritos:active {
        background: #ccc;
      }
      
      .imgCarrinho:active {
        background: #ccc;
      }
      
      .imgPesquisa:hover {
        background: var(--cor2);
      }
      
      .imgCentral:hover {
        background: var(--cor2);
      }
      
      .imgFavoritos:hover {
        background: var(--cor2);
      }
      
      .imgCarrinho:hover {
        background: var(--cor2);
      }
      
      .divConta {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 300px;
      }
      
      .divConta img {
        width: 50px;
        height: 50px;
        margin: 13px;
      }
      
      .divConta a {
        text-decoration: none;
        font-weight: 700;
        color: #000;
        font-size: 15px;
      }      
      
      .divConta a:hover {
        text-decoration: none;
        color: #4faaff;
        }
      
      .settings {
        display: flex;
        justify-content: left;
        width: 200px;
      
      }
      
      .imgCentral {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50px;
        background: var(--cor1);
        border: none;
        outline: none;
        border-radius: 11px 0px 0px 11px;
        transition: all .2s ease-in-out;
        }
      
        .imgCentral img {
          width: 30px;
          height: 30px;
        }
      
      .imgFavoritos {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50px;
        height: 50px;
        background: var(--cor1);
        border: none;
        outline: none;
        transition: all .2s ease-in-out;
      }
      
      .imgFavoritos img {
        width: 30px;
        height: 30px;
      }
      
      .imgCarrinho {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50px;
        background: var(--cor1);
        border: none;
        outline: none;
        border-radius: 0px 11px 11px 0px;
        transition: all .2s ease-in-out;
      }
      
      .imgCarrinho img {
        width: 30px;
        height: 30px;
      }
      
      .logo img{
        width: 110px;
        height: 100px;
      }
      
      </style>
      <header>
        <nav>
          <div class="container">
          <input type="checkbox" id="checkbox-menu">
          <label for="checkbox-menu">
              <span></span>
              <span></span>
              <span></span>
              </label> 
          </div>
          <div class="logo"> 
          <a href="/index.html"><img src="https://cdn.dribbble.com/users/230290/screenshots/13959203/virtual_reality_logo_4x.jpg" alt=""></a>
          </div>
          <div id="divBusca" >
              <input type="text" class="txtBusca" placeholder="Pesquisar...">
              <button type="submit" class="imgPesquisa"> <a href=""> <img src="../IMG/search.svg" alt=""> </a></button>

          </div>  
          <div class="divConta">
            <img src="../IMG/person-circle-outline.svg" alt="">
            <span>
                Faça <a href="/PAGES/login-register.html">LOGIN</a><br>
                ou <a href="/PAGES/login-register.html">CADASTRE-SE</a>
            </span>
          </div>
          <div class="settings">
            <button class="imgCentral"> <a href="#"> <img src="../IMG/headset.svg" alt=""> </a> </button>
            <button class="imgFavoritos"> <a href="/PAGES/lista-de-desejos.html"> <img src="../IMG/heart.svg" alt=""> </a></button>
            <button class="imgCarrinho"> <a href="#"> <img src="../IMG/shopping-cart.svg" alt=""> </a> </button>
          </div>
        </nav>
      </header>
      `;
    }
  }
  
  customElements.define("navbar-2", Header);