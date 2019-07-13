import React from "react";
import AutoComplete from './componenets/AutoComplete';
import './app.scss';

const Com = () => {
  return (
    <main>
      <header id="header">
        <img src="https://www.bookexpoamerica.com/RNA/RNA_BookExpo_V2/2019/img/show-logos/BookExpo-2019-tagline.png?v=636845446778504622" alt="logo" />
      </header>
      <section id="main">
        <AutoComplete />
      </section>
    </main>
  )
}
//#34495e

export default Com;