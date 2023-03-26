class favoritos extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `    
      <style>
      @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
}

:root {
    --cor1: #0030AD;
    --cor2: #00237A;
    --cor3: #0048FF;
    --cor4: #00113B;
    --cor5: #0074E0;
}

.descontos {
    display: flex;
    align-items: center;
    justify-content: center;
    background: #000;
    outline: 3px solid #333;
    border-radius: 4px;
    width: 50px;
    height: 50px;
    grid-column: 4;
    grid-row: 2;
    margin-left: 3px;
}

.descontos p  {
    color: #fff;
    font-weight: 700;
    font-size: .8rem;
    text-align: center;
}

.img-info {
    display: grid;
    grid-template-columns: .2fr 1fr;
    align-items: center;
}

.img {
    margin: 25px 50px;
}

.img img{
    width: 150px;
    height: 150px;
}

.infos {
    display: flex;
    flex-direction: column;
    margin: 0px 15px;
}

.produto-nome {
    margin: 5px 0 5px 0;
    font-size: 20px;
    font-weight: 600;
    color: #333;
}

.produto-preco {
    margin: 5px 0 5px 0;
    font-size: 1.5rem;
    font-weight: bolder;
    color: var(--cor1);
}

.comprar {
    display: grid;
    grid-column: 3;
    grid-template-rows: 1fr 1fr;
    margin: 36px;
    height: 65%;
    align-items: flex-end;
    gap: 50px;
}

.btnComprar-favoritos {
    display: flex;
    width: 50px;
    height: 50px;
    align-items: flex-end;
    grid-row: 2;
}

.btnComprar-favoritos button {
    border: none;
    outline: 1px solid var(--cor1);
    width: 50px;
    height: 50px;
    background: #0030AD;
    border-radius: 5px 0px 0px 0px;
    display: flex;
    justify-content: center;
    align-items: center;
}

hr {
    margin: 0 auto;
}
      </style>
      <div class="favoritos-wrapper">
          <div class="produto-content">
              <div class="img-info">
                  <div class="img">
                      <div class="produto-imagem">
                          <img src="/IMG/img-produtos/produto1.svg" alt="">
                      </div>
                  </div>
                  <div class="infos">
                      <div class="produto-nome">
                          <p>Óculos Realidade Virtual VR Oculus Meta Quest 2 256gb</p>
                      </div>
                      <div class="promos">
                          <div class="stars">
                              <img src="/IMG/img-produtos/Stars.svg" alt="">
                          </div>
                          <div class="produto-preco">
                              <p>R$ 3.799,99</p>
                          </div>
                              <div class="descontos">
                                  <p>FRETE <br>
                                     GRATIS</p>
                              </div>
                      </div>
                  </div>
                  <div class="comprar">
                      <div class="favoritos-favoritos">
                          <img src="/IMG/heart copy.svg" alt="" id="P1" onclick="trocar1()">
                      </div>
                      <div class="btnComprar-favoritos">
                          <button type="submit">
                               <a href="#"> <img src="/IMG/img-produtos/Carrinho.svg" alt=""> </a>
                          </button>
                      </div>
                  </div>
              </div>
              <hr>
          </div>     
      `;
    }
  }
  
  customElements.define("favorito-1", favoritos);