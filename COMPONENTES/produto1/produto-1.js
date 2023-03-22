class Main extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
        this.innerHTML = ` 
        <style>

        * {
        padding: 0;
        margin: 0;
        font-family: Arial, Helvetica, sans-serif;
    }
    
    body {
        width: 100%;
        height: 100%;
    }
    
    :root {
        --cor1: #0030AD;
        --cor2: #00237A;
        --cor3: #0048FF;
        --cor4: #00113B;
        --cor5: #0074E0;
    }
    
    .produtos-em-ofertas {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    .primeiro-produto {
        background: #fff;
        width: 300px;
        height: 400px;
        box-shadow: 0px 4px 21px rgba(0, 0, 0, 0.25);
        margin: 30px;
    }
    
    .promos {
        display: grid;
        grid-template-rows: .2fr 1fr;
        grid-template-columns: .2fr 2fr .5fr .5fr .2fr;
    
    }
    
    .stars {
        grid-column: 2;
        grid-row: 2;
    }
    
    .produtos-restantes {
        outline: 1px solid var(--cor1);
        border-radius: 4px;
        grid-column: 3;
        grid-row: 2;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 50px;
        height: 50px;
    }
    
    
    .produtos-restantes p {
        color: var(--cor1);
        font-size: 12px;
        text-align: center;
    }
    
    .produtos-restantes span {
        color: var(--cor1);
        font-size: 15px;
        font-weight: 800;
        text-align: center;
    }
    
    
    .descontos {
        display: flex;
        align-items: center;
        justify-content: center;
        background: var(--cor1);
        outline: 1px solid var(--cor1);
        border-radius: 4px;
        width: 50px;
        height: 50px;
        grid-column: 4;
        grid-row: 2;
        margin-left: 10px;
    }
    
    .descontos p  {
        color: #fff;
        font-weight: 700;
    }
    
    .img {
        margin: 25px 0px;
        display: flex;
        justify-content: center;
        align-items: center;
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
    
    .produto-preco {
        margin: 10px 0;
        font-size: 20px;
        font-weight: 700;
        color: var(--cor1);
    }
    
    .comprar {
        width: 100%;
        height: 14%;
    }
    
    .btnComprar {
        display: flex;
        align-items: flex-end;
        justify-content: end;
        width: 100%;
        height: 100%;
    }
    
    .btnComprar button {
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

    </style>
    <div class="primeiro-produto">
    <div class="promos">
        <div class="stars">
            <img src="./IMG/img-produtos/Stars.svg" alt="">
        </div>
        <div class="produtos-restantes">
            <p> Restam <br>
                <span>30</span> <br>
                unid.</p>
        </div>
        <div class="descontos">
            <p>30% <br>
               OFF</p>
        </div>
    </div>
    <div class="img">
        <div class="produto-imagem">
            <img src="./IMG/img-produtos/produto1.svg" alt="">
        </div>
    </div>
    <div class="infos">
        <div class="produto-nome">
            <p>Óculos Realidade Virtual VR Oculus Meta Quest 2 256gb</p>
        </div>
        <div class="produto-preco">
            <p>R$ 3.799,99</p>
        </div>
    </div>
    <div class="comprar">
        <div class="btnComprar">
            <button type="submit">
                 <a href="#"> <img src="./IMG/img-produtos/Carrinho.svg" alt=""> </a>
            </button>
        </div>
    </div>

</div>
    `;
}
}

customElements.define("produto-1", Main);