import React from "react";
// VIDEO 25 Y 26 - FRAMEWORKS CSS  ************************************************************************************************

// CONVERTIR DE JS A REACT: <input ...../>, className, <hr   />,  htmlFor, tabIndex... ver los WARNINGS de 
// console del Chrome  - CERRA MUCHAS ETIQUETAS />

// en el index.html importamos el CDNjs o npm install....
/*<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet"
integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous"> -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.1/css/bulma.min.css"> -->
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" /> */

//import Bootstrap from "./components/Bootstrap";
// BULMA SOLO USA CSS Y NO JS, TE PONE CODIGO JS COMO EJEMPLO PARA MANEJARLO Y CODIGO REACTJS
//import Bulma from "./components/Bulma";   https://react-bulma.dev/es

//import ReactBootstrap from "./components/ReactBootstrap";
//import Bootstrap from "./components/Bootstrap";
// añadir en public/index.html antes de </head>:     
// <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous">
// añadir en public/index.html antes de </body>:
// <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js" integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r" crossorigin="anonymous"></script>
// <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz" crossorigin="anonymous"></script>

//import Bulma from "./components/Bulma";

import MaterialUI from "./components/MaterialUI";

function App() {
  return (
    <div>
      <h1>Frameworks CSS con React</h1>
      {/* <Bootstrap /> */}
      {/* <Bulma /> */}
      {/* <ReactBootstrap /> */}
      <MaterialUI />
    </div>
  );
}

export default App;
