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