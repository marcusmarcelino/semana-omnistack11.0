<h1 align="center"> <strong> Semana Omnistack 11.0 </strong> </h1>

<div align="center">
  <img  height="250" width="550" src="./tmp/img/Wallpaper-OmniStack.jpg" align="center"></img>
</div>

<br />

<p align="center">Projeto <strong>BE THE HERO</strong> - Rocketseat</p>

<div align="center">
  <img height="200" width="200" src="./frontend/src/assets/logo.svg" align="center"></img>
</div>

<p align="center">
  <a aria-label="Versão do Node" href="https://github.com/nodejs/node/blob/master/doc/changelogs/CHANGELOG_V12.md#12.16.1">
    <img src="https://img.shields.io/badge/node.js@lts-12.16.1-informational?logo=Node.JS"></img>
  </a>

  <a aria-label="Versão do Knex" href="#">
    <img src="https://img.shields.io/badge/knex-0.20.13-informational?logo=knex"></img>
  </a>

  <a aria-label="Versão do sqlite3" href="#">
    <img src="https://img.shields.io/badge/sqlite3-4.1.1-informational?logo=sqlite3"></img>
  </a>

  <a aria-label="Versão do React" href="#">
    <img src="https://img.shields.io/badge/react-16.13.1-informational?logo=react"></img>
  </a>

  <a aria-label="Versão do React avigation/native" href="#">
    <img src="https://img.shields.io/badge/react_navigation/native-5.1.3-informational?logo=react"></img>
  </a>

  <a aria-label="Versão do React avigation/stack" href="#">
    <img src="https://img.shields.io/badge/react_navigation/native-5.2.8-informational?logo=react"></img>
  </a>

  <a aria-label="Versão do Expo" href="#">
    <img src="https://img.shields.io/badge/expo-36.0.0-informational?logo=expo"></img>
  </a>
  
  <a aria-label="Versão do Expo expo_mail_composer" href="#">
    <img src="https://img.shields.io/badge/expo_mail_composer-8.0.0-informational?logo=expo"></img>
  </a>

  <a aria-label="Versão do Expo expo_constants" href="#">
    <img src="https://img.shields.io/badge/expo_constants-8.0.0-informational?logo=expo"></img>
  </a>
    
  <a aria-label="Rocketseat" href="#">
    <img src="https://img.shields.io/badge/OmniStack-done-green?logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAALVBMVEVHcExxWsF0XMJzXMJxWcFsUsD///9jRrzY0u6Xh9Gsn9n39fyMecy0qd2bjNJWBT0WAAAABHRSTlMA2Do606wF2QAAAGlJREFUGJVdj1cWwCAIBLEsRU3uf9xobDH8+GZwUYi8i6ucJwrxKE+7D0G9Q4vlYqtmCSjndr4CgCgzlyFgfKfKCVO0LrPKjmiqMxGXkJwNnXskqWG+1oSM+BSwD8f29YLNjvx/OQrn+g99oQSoNmt3PgAAAABJRU5ErkJggg=="></img>
  </a>

  <a aria-label="License" href="#">
    <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen"></img>
  </a>
</p>

<p align="center">
  <a href="#rocket-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-TelasApp">Telas das Aplicação</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-licença">Licença</a>
</p>

## :rocket: Tecnologias

Este projeto foi desenvolvido durante a semana omnistack9.0, e as tecnologias utilizadas foram:

- [Node.js](https://nodejs.org/en/)
- [React](https://reactjs.org)
- [React Native](https://facebook.github.io/react-native/)
- [Expo](https://expo.io/)

## 💻 Projeto

O Be The Hero cujo o objetivo é dar um espaço para que ONG's possam divulgar animais que precisam de ajuda e doações, e facilitar o encontro de Pessoas dispostas a ajudar estes animais. Este projeto foi desenvolvido na semana Omnistack - Rocketseat :rocket.

## Instalação
Para que o projeto funcione corretamente você deverá clonar o projeto em seu computador e configura-lo corretamente de acordo com os passo a passos a seguir.

### obs:
Lembre-se: **Verifique as portas que estão sendo utilizadas em seu computador, e caso seja necessário, configure as portas corretamente, para que não aja conflito entre seus projetos ou aplicações que já estejam em execução.**

### Dependências

##### Para Execução do -> Backend
Para instalar e executar o **Backend**, acesse a pasta backend com o seu terminal e em seguida execute:
```bash
yarn install
yarn dev
```

##### Para Execução do ->  Frontend
Para instalar e executar o **Frontend**, acesse a pasta frontend com o seu terminal e em seguida execute:
```bash
yarn install
yarn start
```
Assim que o processo terminar, automaticamente será aberta uma página `localhost:3000` em seu navegador padrão, com o frontend sendo executado. 

##### Para Execução do ->  Mobile
Para executar a aplicação **Mobile**, primeiro configure o endereço do servidor no arquivo `src/services/api.js`, de acordo com o seus parâmetros de rede "seu `ip`", e a porta configurada no backend, para que a aplicação mobile consiga acessa a base de dados, em seguida abra o terminal dentro da pasta mobile e depois execute os comandos:
```bash
# Caso ja possua o Expo (CLI) instalado! não execute  aprimeira linha de código
yarn global add install expo-cli
yarn install
yarn start
```
Assim que o processo terminar, automaticamente será aberta uma página `localhost:19002` em seu navegador padrão. Conecte seu emulador, caso não o possua instalado e queira utiliza-lo estes links o ajudaram nesta tarefa, assim como uma explicação sobre o funcionamento do emulador, [Rocketseat Docs Emulador Mobile](https://docs.rocketseat.dev/ambiente-react-native/android/emulador), [Emulando React Native no iOS/Android com Expo](https://www.youtube.com/watch?v=eSjFDWYkdxM).

Caso queira testa a aplicação mobile via `LAN`: baixe o aplicativo *Expo* na Play Store ou App Store e em seguida escaneie o código QR que aparece no canto esquerdo inferior da página aberta no seu navegador padrão.

### obs:
Lembre-se: **Fique atento ao seu ip, sempre que executar a aplicação mobile, verifique se o ip `src/services/api.js` está correto, de acordo com o seu**.

## 🔖 TelasApp
Web -> resultado da aplicação em execução:

<table>
	<tr>
    <td>
      <img src="./tmp/img/login.png" align="center"></img>
    </td>
    <td>
			<img src="./tmp/img/new-profile.png" align="center"></img>
		</td>
	</tr>
	<tr>
		<td>
			<img src="./tmp/img/profile.png" align="center"></img>
		</td>
    <td>
      <img src="./tmp/img/new-incidents.png" align="center"></img>
    </td>
	</tr>
</table>

## Mobile
App Mobile (React Native) -> resultado da execução:
<table>
  <tr>
    <td>
      <img src="./tmp/img/mobile-page1.jpeg" align="center"></img>
    </td>
    <td>
      <img src="./tmp/img/mobile-page2.jpeg" align="center"></img>
    </td>
  </tr>
</table>

## :memo: Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.
