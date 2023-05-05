const contenedorImg = document.getElementById('contenedor-img')

diseños.forEach(diseño => {
    const div = document.createElement('div')
    div.classList.add('card')
    div.innerHTML = `
            <img src=${diseño.img} alt="${diseño.nombre}">
            <div class="details">
            <h3>${diseño.nombre}</h3>
            <p>${diseño.desc}<p>
            </div>
            
    `
    contenedorImg.append(div)
})


//     < section class="section" >
//   <h1>Nom Nom Gallery</h1>
//   <div class="grid">
//     <div class="item">
//       <div class="item__details">
//         jelly-o brownie sweet
//       </div>
//     </div>
//     <div class="item item--large">
//       <div class="item__details">
//         Muffin jelly gingerbread 
//       </div>
//     </div>
//     <div class="item item--medium">
//       <div class="item__details">
//         sesame snaps chocolate
//       </div>
//     </div>
//     <div class="item item--large">
//       <div class="item__details">
//         Oat cake
//       </div>
//     </div>
//     <div class="item item--full">
//       <div class="item__details">
//          jujubes cheesecake
//       </div>
//     </div>
//     <div class="item item--medium">
//       <div class="item__details">
//         Dragée pudding brownie
//       </div>
//     </div>
//     <div class="item item--large">
//       <div class="item__details">
//         Oat cake
//       </div>
//     </div>
//     <div class="item">
//       <div class="item__details">
//         powder toffee
//       </div>
//     </div>
//     <div class="item item--medium">
//       <div class="item__details">
//         pudding cheesecake
//       </div>
//     </div>
//     <div class="item item--large">
//       <div class="item__details">
//         toffee bear claw 
//       </div>
//     </div>
//     <div class="item">
//       <div class="item__details">
//         cake cookie croissant
//       </div>
//     </div>
//     <div class="item item--medium">
//       <div class="item__details">
//         liquorice sweet roll
//       </div>
//     </div>
//     <div class="item item--medium">
//       <div class="item__details">
//         chocolate marzipan
//       </div>
//     </div>
//     <div class="item item--large">
//       <div class="item__details">
//         danish dessert lollipop
//       </div>
//     </div>
//     <div class="item">
//       <div class="item__details">
//         sugar plum dragée
//       </div>
//     </div>
//   </div>
// </div >