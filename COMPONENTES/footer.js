class Footer extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `    
      <style>
      * {
      margin: 0;
      padding: 0;
      font-family: Arial, Helvetica, sans-serif;
  }
  
  :root {
      --cor1: #0030AD;
      --cor2: #00237A;
      --cor3: #0048FF;
      --cor4: #00113B;
      --cor5: #0074E0;
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
  
  .input-box{
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
  
  .input-box::placeholder {
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
      box-shadow: -4px 4px 0 #001038;
  
  }

  .instas {
    margin-top:-2px;
  }
  
  .btn:active {
      box-shadow: inset -4px 4px 0 #001038 ;
      font-size: 22px;
      border-radius: 5px;
  }
  
  .rodape {
      background-color: var(--cor1);
      color: #fff;
      display: flex;
      justify-content: space-evenly;
      padding-bottom: 50px;
  }
  
  .bold {
      font-weight: bold;
      font-size: 20px;
      margin: 30px 0px 20px 0px;
      cursor: default;
  }
  
  li { 
      cursor: pointer;
      font-size: 16px;
      margin-top: 8px;
  }
  
  li a {
      color: #fff;
      cursor: pointer;
      font-size: 18px;
      text-decoration: none;
  }
  
  li a:hover {
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
      box-shadow: 0px 0px 10px 10px rgb(0 0 0 / 10%);
      border-radius: 50%;
      align-items: center;
      justify-content: center;
  }
  
  .btn {
      transition: all .2s ease-out;
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
                  <input type="text" placeholder="Qual é o seu nome?" class="input-box">
                  <input type="email" placeholder="Seu e-mail?"class="input-box">
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
                                <img src="./IMG/logo-instagram.svg" alt="" class="instas">
                              </div>
                          </a>
                      </li>
                      <li>
                          <a href="https://twitter.com/" class="btn twitter" target="_blank">
                              <div class="icon">
                                <img src="./IMG/logo-twitter.svg" alt="">
                              </div>
                          </a>
                      </li>
                      <li>
                          <a href="https://www.facebook.com/" class="btn facebook" target="_blank">
                              <div class="icon">
                                <img src="./IMG/logo-facebook.svg" alt="">
                              </div>
                          </a>
                      </li>
                      <li>
                          <a href="https://www.youtube.com/" class="btn youtube" target="_blank">
                              <div class="icon">
                                <img src="./IMG/logo-youtube.svg" alt="">
                              </div>
                          </a>
                      </li>
                      <li>
                          <a href="https://www.linkedin.com/" class="btn linkedin" target="_blank">
                              <div class="icon">
                                <img src="./IMG/logo-linkedin.svg" alt="">
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