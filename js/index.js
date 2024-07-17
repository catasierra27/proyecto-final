
//cuando mouseover el todos .Header-btnTabs
  //quito todas las clases .Header-navTabs
  //quito todas las clases .Header-btnTabs
  //añado todas las clases .Header-btnTabs[index]
  //añado todas las clases .Header-navTabs[index]

const btnTabs = document.querySelectorAll(`.Header-btnTabs`)
const navTabs = document.querySelectorAll(`.Header-navTabs`)

console.log(navTabs)
console.log(btnTabs)

btnTabs.forEach(( _ , index)=>{
   btnTabs[index].addEventListener(`click` , ()=>{

    navTabs.forEach(( _ , index)=>{
        navTabs[index].classList.remove(`isActive`)
    })
    btnTabs.forEach(( _ , index)=>{
        btnTabs[index].classList.remove(`isActive`)
    })
    navTabs[index].classList.add(`isActive`)
    btnTabs[index].classList.add(`isActive`)




   })
})

//cuando click en .Header-btn --Activo
 // si .Header-lightbox tiene la classlist isVsible remove
  // si no add a  .Header-lightbox la classlist isVisible




const btnShop = document.querySelector('.Header-btn.--Activoshop a');
const lightbox = document.querySelector('.Header-lightbox');

console.log(btnShop)
console.log(lightbox)

btnShop.addEventListener('click', (event) => {
    event.preventDefault();

    if (lightbox.classList.contains('isVisible')) {
        lightbox.classList.remove('isVisible');
    } else {
        lightbox.classList.add('isVisible');
    }
});




const btnVisible = document.querySelector('.Header-btn.--Visible')
const headerBag = document.querySelector('.Header-bag')
const closeBag = document.querySelector('.Header-closeBag')

console.log(btnVisible)
console.log(headerBag)
console.log(closeBag)

btnVisible.addEventListener( `click` , (event)=>{
    event.preventDefault();
    console.log( `haciendo click`)

    headerBag.classList.add('isVisible')
})

closeBag.addEventListener(`click` , ()=>{
    headerBag.classList.remove('isVisible')
})


// cuando haga click en .Header-btn --Activoshop
  // if .Header-bag contains la classlist isVisible remove

 btnVisible.addEventListener('click', (event) => {
    event.preventDefault();

    if (lightbox.classList.contains('isVisible')) {
        lightbox.classList.remove('isVisible');
    }
})

// cuando haga click en .Header-btn --Visible
  // if .Header-lightbox contains la classlist isVisible remove

 btnShop.addEventListener('click', (event) => {
    event.preventDefault();

    if (headerBag.classList.contains('isVisible')) {
        headerBag.classList.remove('isVisible');
    }
})

// cuando haga click en el arrow next 
 // el slider contrainer se le añade style transform translateX

 
// Selecciona los elementos del carrusel
const sliderContainer = document.querySelector('.Slider-container');
const sliderNext = document.querySelector('.Slider-arrow.--next');
const sliderPrev = document.querySelector('.Slider-arrow.--prev');

// Calcula el ancho total del contenedor de imágenes
const sliderContainerWidth = sliderContainer.offsetWidth;

// Número total de imágenes en el carrusel
const numImages = 12;

// Índice inicial del carrusel
let currentIndex = 0;

// Calcula el desplazamiento para mostrar una imagen a la vez
const slideWidth = sliderContainerWidth / 3; // Mostrar 3 imágenes a la vez

// Event listener para el botón de siguiente
sliderNext.addEventListener('click', () => {
    currentIndex++;
    if (currentIndex >= numImages) {
        currentIndex = 0; // Vuelve al inicio si supera el número de imágenes
    }

    const desplazamiento = -currentIndex * slideWidth;
    sliderContainer.style.transform = `translateX(${desplazamiento}px)`;
});

// Event listener para el botón de anterior
sliderPrev.addEventListener('click', () => {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = numImages - 1; // Retrocede al final si está en la primera imagen
    }

    const desplazamiento = -currentIndex * slideWidth;
    sliderContainer.style.transform = `translateX(${desplazamiento}px)`;
});












  

















