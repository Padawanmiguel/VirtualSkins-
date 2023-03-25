class destaque extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
        this.innerHTML = ` 
        <style>
        :root {
            --cor1: #0030AD;
            --cor2: #00237A;
            --cor3: #0048FF;
            --cor4: #00113B;
            --cor5: #0074E0;
        }

        body {
            width: 100%;
            height: 100%;
        }
        
        
        .destaque {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-wrap: wrap;
            align-content: center;
            width: 1440px;
        }
        
        
        .destaque-produto {
            background: #fff;
            width: 400px;
            height: 330px;
            box-shadow: 0px 4px 21px rgba(0, 0, 0, 0.25);
            margin: 30px;
        }
        
        .promos-destaque {
            display: grid;
            grid-template-rows: .2fr 1fr;
            grid-template-columns: .2fr 2fr .5fr .5fr .2fr;
        
        }
        
        .stars-destaque {
            grid-column: 2;
            grid-row: 2;
        }
        
        .produtos-restantes-destaque {
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
        
        
        .produtos-restantes-destaque p {
            color: var(--cor1);
            font-size: 12px;
            text-align: center;
        }
        
        .produtos-restantes-destaque span {
            color: var(--cor1);
            font-size: 15px;
            font-weight: 800;
            text-align: center;
        }
        
        
        .descontos-destaque {
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
        
        .descontos-destaque p  {
            color: #fff;
            font-weight: 700;
        }
        
        .img-destaque {
            margin: 25px 0px;
            display: flex;
            justify-content: center;
            align-items: center;
            grid-column: 2;
        }
        
        .img-destaque img{
            width: 150px;
            height: 150px;
        }
        
        .infos-destaque {
            display: grid;
            flex-direction: column;
            grid-template-columns: .2fr 1fr 1fr .2fr;
            place-items: center;
            height: 200px;
        }
        
        .destaque-preco {
            margin: 10px 0;
            font-size: 20px;
            font-weight: 700;
            color: var(--cor1);
        }
        
        .comprar-destaque {
            width: 100%;
            height: 14%;
        }
        
        .btnComprar-destaque {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            height: 100%;
        }
        
        .btnComprar-destaque button {
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
    <div class="destaque-produto">
    <div class="promos-destaque">
        <div class="stars-destaque">
            <img src="./IMG/img-produtos/Stars.svg" alt="">
        </div>
        <div class="produtos-restantes-destaque">
            <p> Restam <br>
                <span>30</span> <br>
                unid.</p>
        </div>
        <div class="descontos-destaque">
            <p>30% <br>
               OFF</p>
        </div>
    </div>
    
    <div class="infos-destaque">
        <div class="img-destaque">
            <div class="produto-imagem-destaque">
                <img src="./IMG/img-produtos/produto1.svg" alt="">
            </div>
        </div>
        <div class="destaque-nome">
            <p>Óculos Realidade Virtual VR Oculus Meta Quest 2 256gb</p>
            <div class="destaque-preco">
            <p>R$ 3.799,99</p>
        </div>
        </div>

    </div>
    <div class="comprar-destaque">
        <div class="btnComprar-destaque">
            <button type="submit">
                 <a href="#"> <img src="./IMG/img-produtos/Carrinho.svg" alt=""> </a>
            </button>
        </div>
    </div>

</div>
    `;
}
}

customElements.define("destaque-1", destaque);