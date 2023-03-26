class Footer extends HTMLElement {
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
  
  footer {
    border-top: 5px solid var(--cor2);
  }

  .news {
      background: var(--cor4);
      padding: 20px;
  }
  
  .news .texto {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      align-items: center;
      gap: 0px;
  }
  
  .news h1 {
      color: #fff;
      font-weight: 700;
      text-align: left;
      font-size: 24px;
      margin-left: 90px;
      width: 240px;
  }
  
  .news span {
      color: #fff;
      font-weight: 400;
      font-size: 15px;
      text-align: center;
  }
  
  .input-boxes{
      height: 50px;
      background: #fff;
      border: none;
      outline: none;
      border-radius: 5px;
      margin-left: 150px;
      margin-right: -105px;
      padding-left: 30px;
      font-family: Arial, Helvetica, sans-serif;
      font-weight: 500;
      font-size: 20px;
      text-align: left;
      box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.164);
  }
  
  .input-boxes::placeholder {
      font-family: Arial, Helvetica, sans-serif;
      font-weight: 500;
      font-size: 20px;
      text-align: left;
  }
  
  .btn {
      height: 50px;
      width: 200px;
      background: var(--cor2);
      color: #fff;
      border: none;
      outline: none;
      border-radius: 5px;
      font-family: Arial, Helvetica, sans-serif;
      font-weight: 700;
      font-size: 23px;
      text-align: center;
      margin-left: 150px;    
      cursor: pointer;
      border: 2px solid var(--cor5);
      box-shadow: 0px 2px 1px  var(--cor5);
      transition: all .2s ease;
  }

  .btn:hover {
    transform: translate(-0px, -1px);
    box-shadow: 0px 7px 1px var(--cor5);
    transition: all .2s ease-in;
  }

  .instas {
    margin-top:-2px;
  }
  
  .rodape {
      background-color: var(--cor1);
      color: #fff;
      display: flex;
      justify-content: space-evenly;
      padding: 50px 0;
  }
  
  .bold {
      font-weight: bold;
      font-size: 20px;
      margin: 30px 0px 20px 0px;
      cursor: default;
  }
  
  .rodape li { 
      cursor: pointer;
      font-size: 16px;
      margin-top: 8px;
  }
  
  .rodape li a {
      color: #fff;
      cursor: pointer;
      font-size: 18px;
      text-decoration: none;
  }
  
  .rodape li a:hover {
      color: #4faaff;
  }
  
  .box {
      margin-top: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
  }
  
  .box .btn {
      display: flex;
      width: 50px;
      height: 50px;
      margin: 0 8px;
      overflow: hidden;
      cursor: pointer;
      border-radius: 50%;
      align-items: center;
      justify-content: center;

  }
  
  
  .icon {
      width: 23px;
      height: 23px;
  }
  
  .box .btn:hover {
      transform: scale(1.2);
      background: var(--cor4);
      outline: 1px solid #fff;
      box-shadow: 0px 0px 10px 10px rgb(0 0 0 / 10%);
  }
  
  .marcaregistrada {
      padding: 10px;
      background-color: var(--cor4);
      text-align: center;
      color: #fff;
      font-size: 13px;
  }  
  
  .textInputWrapper {
    position: relative;
    width: 500px;
    height: 48px;
    margin: 12px 5px;
    --accent-color: var(--cor5);
  }
  
  .textInputWrapper:before {
    transition: border-bottom-color 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    border-bottom: 1px solid rgba(0, 0, 0, 0.42);
  }
  
  .textInputWrapper:before,
  .textInputWrapper:after {
    content: "";
    left: 0;
    right: 0;
    position: absolute;
    pointer-events: none;
    bottom: -1px;
    z-index: 4;
    width: 100%;
  }
  
  .textInputWrapper:focus-within:before {
    border-bottom: 1px solid var(--accent-color);
  }
  
  .textInputWrapper:before {
    transition: border-bottom-color 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    border-bottom: 1px solid rgba(0, 0, 0, 0.42);
  }
  
  .textInputWrapper:focus-within:before {
    border-bottom: 1px solid var(--accent-color);
    transform: scaleX(1);
  }
  
  .textInputWrapper:focus-within:after {
    border-bottom: 2px solid var(--accent-color);
    transform: scaleX(1);
  }
  
  .textInputWrapper:after {
    content: "";
    transform: scaleX(0);
    transition: transform 250ms cubic-bezier(0, 0, 0.2, 1) 0ms;
    will-change: transform;
    border-bottom: 2px solid var(--accent-color);
    border-bottom-color: var(--accent-color);
  }
  
  .textInput::placeholder {
    transition: opacity 250ms cubic-bezier(0, 0, 0.2, 1) 0ms;
    opacity: 1;
    user-select: none;
    color: black;
  }
  
  .textInputWrapper .textInput {
    border-radius: 5px 5px 0px 0px;
    box-shadow: 0px 2px 5px rgb(35 35 35 / 30%);
    max-height: 50px;
    background-color: #fff;
    transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
    transition-duration: 200ms;
    transition-property: background-color;
    color: #333;
    font-size: 1.2rem;
    font-weight: 480;
    padding: 12px;
    width: 500px;
    border-left: none;
    border-bottom: none;
    border-right: none;
  }
  
  .textInputWrapper .textInput:focus,
  .textInputWrapper .textInput:active {
    outline: none;
  }
  
  .textInputWrapper:focus-within .textInput,
  .textInputWrapper .textInput:focus,
  .textInputWrapper .textInput:active {
    background-color: #fff;
  }
  
  .textInputWrapper:focus-within .textInput::placeholder {
    opacity: 0;
  }

  footer {
    
  }
      </style>
      <footer>
      <div class="container5">
      <div class="news">
          <div class="texto">
              <h1>
              VirtualSkins! NeWs<br>
              <span>Receba novidades e ofertas</span>
              </h1>
                    <div class="textInputWrapper">
                        <input placeholder="Digite seu nome" type="text" class="textInput">
                    </div>
                    <div class="textInputWrapper">
                        <input placeholder="Digite seu email" type="text" class="textInput">
                    </div>
                  <button type="submit" class="btn">CADASTRAR</button>
          </div>
      </div>
      <div class="rodape">
          <ul type="none">
              <li class="bold">Departamentos</li>
              <li><a href="#">#</a></li>
              <li><a href="#">#</a></li>
              <li><a href="#">#</a></li>
              <li><a href="#">#</a></li>
              <li><a href="#">#</a></li>
              <li><a href="#">#</a></li>
              <li><a href="#">#</a></li>
          </ul>

          <ul type="none">
              <li class="bold">Novidades e promoções</li>
              <li><a href="#">VirtualNatal!</a></li>
              <li><a href="#">Produtos em destaque</a></li>
          </ul>

          <ul type="none">
              <li class="bold">Institucional</li>
              <li><a href="#">Sobre VirtualSkins!</a></li>
              <li><a href="#">Políticas do Site e Marketplace</a></li>
              <li><a href="#">Política de Cookies</a></li>
              <li><a href="#">Política de privacidade</a></li>
              <li><a href="https://www.procon.df.gov.br/wp-content/uploads/2019/08/Codigo-do-consumidor-FINAL.pdf" target="_blank">Código de Defesa do consumidor</a></li>
              <li><a href="#">Exerça seus direitos de privacidade</a></li>
          </ul>

          <ul type="none">
              <li class="bold">Minha conta</li>
              <li><a href="#">Meus pedidos</a></li>
              <li><a href="#">Cadastrar ou remover as NeWs</a></li>
              <li class="bold">Mídias Sociais</li>
                  <div class="box">
                      <li>
                          <a href="https://www.instagram.com/" class="btn instagram" target="_blank">
                              <div class="icon">
                                <img src="/IMG/logo-instagram.svg" alt="" class="instas">
                              </div>
                          </a>
                      </li>
                      <li>
                          <a href="https://twitter.com/" class="btn twitter" target="_blank">
                              <div class="icon">
                                <img src="/IMG/logo-twitter.svg" alt="">
                              </div>
                          </a>
                      </li>
                      <li>
                          <a href="https://www.facebook.com/" class="btn facebook" target="_blank">
                              <div class="icon">
                                <img src="/IMG/logo-facebook.svg" alt="">
                              </div>
                          </a>
                      </li>
                      <li>
                          <a href="https://www.youtube.com/" class="btn youtube" target="_blank">
                              <div class="icon">
                                <img src="/IMG/logo-youtube.svg" alt="">
                              </div>
                          </a>
                      </li>
                      <li>
                          <a href="https://www.linkedin.com/" class="btn linkedin" target="_blank">
                              <div class="icon">
                                <img src="/IMG/logo-linkedin.svg" alt="">
                              </div>
                          </a>
                      </li>
                  </div>
                      <li class="bold">Baixe os aplicativos</li>

          </ul>

          <ul type="none">
              <li class="bold">Atendimento</li>
              <li>Horário de atendimento</li>
              <li>08:00 às 20:00 - <br>
                  Segunda a Sábado, <br>
                  horário de Brasília <br>
                  (Exceto domingo e feriados)</li>
              <li class="bold">Endereço</li>
              <li>RUA ARNALDO PINTO DA ROÇA, 6869 - <br>
                  1° andar - Centro <br>
                  CARPAZINHA/SR - CEP: 89234-881</li>
              <li class="bold">Email</li>
              <li>virtualskinscomercial@gmail.com</li>
          </ul>
      </div>
      <div class="marcaregistrada">
          <p>VirtualSkins! É uma marca registrada de VIRTUAL SKINS  | CNPJ: 11.234.567/0001-90 | Todos os direitos reservados <br>
          <span>ESCOLA S SESI/SENAI</span></p>
      </div>
  </div>

  </footer>
      `;
    }
  }
  
  customElements.define("footer-template", Footer);