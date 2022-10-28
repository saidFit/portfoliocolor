
{/* <div class="swiper">
<!-- Additional required wrapper -->
<div class="swiper-wrapper">
<div class="swiper-slide">
<img class="img-of-swiper" src="imgs/img1.jpg" alt="">
</div>
<div class="swiper-slide">
    <img class="img-of-swiper" src="imgs/img2.jpg" alt="">
    </div>
    <div class="swiper-slide">
        <img class="img-of-swiper" src="imgs/img3.jpg" alt="">
</div>
<div class="swiper-slide">
    <img class="img-of-swiper" src="imgs/img4.jpg" alt="">
    </div>
</div>
<!-- If we need pagination -->
<div class="swiper-pagination"></div>
<!-- If we need scrollbar -->
</div> */
}



const swiper = new Swiper('.swiper', {

  // effect: 'coverflow',
  grabCursor: true,
  // centeredSlides: true,
  // slidesPerView: 'auto',
  // coverflowEffect: {
  //   rotate: 50,
  //   stretch: 0,
  //   depth: 100,
  //   modifier: 1,
  //   slideShadows: true,
  // },
  // pagination: {
  //   el: '.swiper-pagination',}



  // autoplay:{
  // delay:3000,
  // disableOnInteraction:false,
  // },

  slidesPerView: "auto",
  spaceBetween: 60,
  grabCursor: true,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});







// ========== getItems==========

const wrapper = document.querySelector('body'),
  fa_bars = wrapper.querySelector('.fa-bars'),
  nav_bar = wrapper.querySelector('nav ul'),
  container_of_Services = wrapper.querySelectorAll('.container-of-Services'),
  container_global_item_hidden = wrapper.querySelector('.container-global-item-hidden'),
  All_btn_Experience = wrapper.querySelectorAll('.container-Education-Experience div'),
  All_under_two_btns = wrapper.querySelectorAll('.under-two-btns'),
  child2_of_under_title = wrapper.querySelector('.child2-of-under-title'),
  All_btns = wrapper.querySelectorAll('.child1-of-under-title button'),
  container_of_img_show = wrapper.querySelector('.container-of-img-show'),
  Accordion_item = wrapper.querySelectorAll('.Accordion-item'),
  item_Event = wrapper.querySelectorAll('.item-Event'),
  itmes_have_change = wrapper.querySelectorAll('.change'),
  items_have_background = wrapper.querySelectorAll('.background'),
  btn_start = wrapper.querySelector('.btn-start'),
  All_color =wrapper.querySelectorAll('.container-of-color p'),
  year=wrapper.querySelector('.year'),
  Allbtn= wrapper.querySelectorAll('.child1-of-under-title button')


 year.innerText=new Date().getFullYear()


const clearLocal =(e)=>{
  All_color.forEach(element=>{element.classList.remove('Active-color')})
  localStorage.clear()
  items_have_background.forEach(element=>{
    element.style=''
})
    if(!wrapper.classList.contains('dark')){
      wrapper.querySelectorAll('a').forEach(element=>{
      element.style.color='#000'
     })
     itmes_have_change.forEach(element=>{
      element.style.color="#000"
     })
     Allbtn.forEach(element=>{
      if(element.classList.contains('Active-btn')){
        element.style=''
      }
    })
    }else{
      Allbtn.forEach(element=>{
        if(element.classList.contains('Active-btn')){
          element.style=''
        }
      }) 
    }

 
 
}




 const getDark=()=>{
  return JSON.parse(localStorage.getItem('Dark')||"[]")
   } 
  const saveDark =(obj)=>{
  return  localStorage.setItem('Dark',JSON.stringify(obj))
  }

 const AddDark =(type_dark)=>{
    let data = getDark(),
    obj    = {Dark:type_dark}
    data   = obj
    saveDark(data)
  }

const hendleclicked=(e)=>{
  wrapper.classList.toggle('dark')
  wrapper.className? AddDark('dark'):AddDark('#fff')
}


wrapper.classList.add(`${getDark().Dark}`)   
   
  // localStorage.clear()
   
 
 

  

const getColor =()=>{
  return JSON.parse(localStorage.getItem('color')||"[]")
}


const saveColor=(color)=>{
  localStorage.setItem('color',JSON.stringify(color))
}


// localStorage.clear()

const addcolor=(value_color)=>{
  let color = getColor()
  let object ={color:value_color,}
  color=object
  saveColor(color)
}

let has_color
let color_write


const addColorOfElements=(value_color)=>{
 
  has_color=value_color
  color_write='#ffff'
  Allbtn.forEach(element=>{
    if(element.classList.contains('Active-btn')){
      element.style.backgroundColor=value_color
    }
  })


 itmes_have_change.forEach(element=>{
  element.style.color='#ffff'
 })
 wrapper.querySelectorAll('a').forEach(element=>{
  element.style.color='#ffff'
 })
 items_have_background.forEach(element=>{
  element.style.transition =`all .9s ease`
  element.style.backgroundColor=value_color
  element.style.color="#ffff"
 })
}

const checked =()=>{
  if(getColor().color){
    addColorOfElements(getColor().color)
  const color=  wrapper.querySelector('nav').getAttribute('style').slice(48,65)
  console.log(color)
    All_color.forEach(element=>{
       element.getAttribute('data-color')
      element.getAttribute('data-color') == color ? console.log(element.classList.add('Active-color')) :console.log(false)
    })
  }else{
    
  }
}
checked()

const removeActiveColor= () =>{
  All_color.forEach(element=>{
    element.classList.remove('Active-color')
  })
}
 
  console.log(itmes_have_change)
  const changeColor =(e)=>{
   removeActiveColor()
   console.log(e.target)
   e.target.classList.add('Active-color')
   const color =  e.target.getAttribute('data-color')
   has_color=color
   addcolor(color)
   color_write='#ffff'
   addColorOfElements(color)

  }

  All_color.forEach(element=>{
    element.addEventListener('click',changeColor)
  })












function remvoAllheightofitems(){

    Accordion_item.forEach(element=>{
    element.style.height=``;
    for(let i=0;i<item_Event.length;i++){
    item_Event[i].classList.remove('height')}})
    return;
    
}


function showelementclick(e){
  if(!e.target.classList.contains('height')){

          remvoAllheightofitems()
          Accordion_item[e.target.getAttribute('data-i')].style.height=`${Accordion_item[ e.target.getAttribute('data-i')].scrollHeight}px`;//this is return height dynamique of element when to click
          e.target.classList.add('height')

  }else{
       e.target.classList.remove('height')
       Accordion_item[e.target.getAttribute('data-i')].style.height=``;
  } 
}

item_Event.forEach(element=>{element.addEventListener('click',showelementclick)})






  let All_itmes
const arry_of_All = [
  {
    img: "/Portfolio2/imgTe/imgTe1.jpg",
    title: "Web Design",
    para: "View More"

  },
  {
    img: "/Portfolio2/imgTe/imgTe2.jpg",
    title: "Web Design",
    para: "View More"

  },
  {
    img: "/Portfolio2/imgTe/imgTe3.jpg",
    title: "Web Design",
    para: "View More"

  },
  {
    img: "/Portfolio2/imgTe/imgTe4.jpg",
    title: "App mobil",
    para: "View More"

  },
  {
    img: "/Portfolio2/imgTe/imgTe5.jpg",
    title: "App mobil",
    para: "View More"

  },
  {
    img: "/Portfolio2/imgTe/imgTe6.jpg",
    title: "Brand Design",
    para: "View More"

  },
  {
    img: "/Portfolio2/imgTe/imgTe7.jpg",
    title: "Brand Design",
    para: "View More"

  },

]

let stylle
function removeAddActivebtn(){
   All_btns.forEach(element=>{
    element.classList.remove('Active-btn')
    element.classList.remove('background')
    if(element.getAttribute('style')){
       stylle = element.getAttribute('style')
       element.style=''
    }

   })
}

function changeItems(e) {
   
  child2_of_under_title.innerHTML = ''
  removeAddActivebtn()
  e.target.classList.add('Active-btn')
  e.target.classList.add('background')
  e.target.style=stylle
  console.log(e.target)
  if (e.target.innerText == 'All') {
    for (let i = 0; i < arry_of_All.length; i++) {
      console.log(arry_of_All[i].img)
      CreateItemsOfProtfolio(arry_of_All[i].img, arry_of_All[i].title, arry_of_All[i].para)
    }
  } if (e.target.innerText == 'Web') {
       for (let i = 0; i < arry_of_All.length; i++) {
       
        if(arry_of_All[i].title=='Web Design'){
          console.log(arry_of_All[i])
          CreateItemsOfProtfolio(arry_of_All[i].img, arry_of_All[i].title, arry_of_All[i].para)
        }
        
      }
  }
   if (e.target.innerText == 'App') {
       for (let i = 0; i < arry_of_All.length; i++) {
        if(arry_of_All[i].title=='App mobil'){
          console.log(arry_of_All[i])
          CreateItemsOfProtfolio(arry_of_All[i].img, arry_of_All[i].title, arry_of_All[i].para)
        }
        
      }
  }
   if (e.target.innerText == 'Design') {
       for (let i = 0; i < arry_of_All.length; i++) {
        if(arry_of_All[i].title=='Brand Design'){
          console.log(arry_of_All[i])
          CreateItemsOfProtfolio(arry_of_All[i].img, arry_of_All[i].title, arry_of_All[i].para)
        }
        
      }
  }
}

All_btns.forEach(element => {
  element.addEventListener('click', changeItems)
})

function CreateItemsOfProtfolio(img, title, para) {
  const div = `
   <div class="container-of-itmes-portfolio">
        <div class="container-of-imgs-portfolio">
        <div class="container-Camera-like">
         <i class="fa-solid fa-camera"></i>
         <div  class="container-like">
         <i onclick="showIcon(this)" class="like fa-solid fa-thumbs-up"></i>
         <i onclick="showIcon(this)" class="like fa-solid fa-heart"></i>
         <i onclick="showIcon(this)" class="like fa-solid fa-share"></i>
        
        </div>
       </div>
        <img class="img-of-Portfolio" src=${img} alt="">
        </div>
        <p class="title-portfolio-item" style="color:#000">${title}</p>
        <span class="container-View-More">
        <p class="title-portfolio-item" style="font-size:13px;color:#000">${para}</p>
        <i  style="color:#000" class="fa-solid fa-arrow-right"></i>
        </span>
  </div>`

  child2_of_under_title.innerHTML += div
  refreshData()
  trouveAllItems()
}

for (let i = 0; i < arry_of_All.length; i++) {
  CreateItemsOfProtfolio(arry_of_All[i].img, arry_of_All[i].title, arry_of_All[i].para)
}


function showIcon(div){
  console.log(div.classList.toggle('show-like'))
  if(div.classList.contains('fa-heart')){
    div.classList.toggle('show-denger')
  }
  
}


function refreshData(){
  const All_container_All_img=  child2_of_under_title.querySelectorAll('.container-of-itmes-portfolio .container-of-imgs-portfolio') 
  return All_itmes = All_container_All_img  

 
}

function trouveAllItems(){

  All_itmes.forEach(element=>{
  element.addEventListener('click',e=>{
    if(!e.target.classList.contains('like')){
  console.log(element.querySelector('img').getAttribute('src'))
  console.log(container_of_img_show.querySelector('img').src=element.querySelector('img').getAttribute('src'))
  container_of_img_show.classList.add("show-img-Fixed")
    }

  })
})
}

function AddActive(e) {
  All_btn_Experience.forEach(element => {
    element.classList.remove('active')
  })


  if (e.target.parentElement.classList.contains('Education') || e.target.parentElement.classList.contains('Experience')) {
    e.target.parentElement.classList.add('active')
    const index_of_item = e.target.parentElement.getAttribute('data-index')
    All_under_two_btns.forEach(element => {
      element.classList.remove('show-itmee')
    })
    console.log(All_under_two_btns[parseInt(index_of_item)].classList.add('show-itmee'))

  }
}


All_btn_Experience.forEach(element => {
  element.addEventListener('click', AddActive)
})

const arr_of_items = [{
  h1: 'Web Designer',
  para: 'Service width more than 3 years of Experience.providing quality work to clients and companies',
  skills: {
    skills1: 'i develop the use interface.',
    skills2: 'Web page development.',
    skills3: 'i create UX element interactions.',
    skills4: 'i position your company brand.',
    skills5: 'Design and mackups of products for companies.',
  }

}, {
  h1: 'UI/UX Designer.',
  para: 'Service width more than 3 years of Experience.providing quality work to clients and companies',
  skills: {
    skills1: 'i develop the use interface.',
    skills2: 'Web page development.',
    skills3: 'i create UX element interactions.',
    skills4: 'i position your company brand.',
  }

}, {
  h1: 'Branding Designer',
  para: 'Service width more than 3 years of Experience.providing quality work to clients and companies',
  skills: {
    skills1: 'i develop the use interface.',
    skills2: 'Web page development.',
    skills3: 'i create UX element interactions.',

  }

}]


console.log(arr_of_items)
console.log(arr_of_items[1].skills.skills1)


for (let i = 0; i < container_of_Services.length; i += 1) {
  container_of_Services[i].addEventListener('click', e => {
    container_global_item_hidden.classList.add('show-container-of-item')
    const id_of_item = parseInt(container_of_Services[i].getAttribute('data-id'))
    const data = arr_of_items[id_of_item]
    console.log(data.h1, data.para, data.skills)
    AddItemsOfarry(data.h1, data.para, data.skills,has_color,color_write)
    const all_para = container_global_item_hidden.querySelector('.container-under-title-of-item').querySelectorAll('p')
    console.log(all_para)
    all_para.forEach(element => {
      if (element.innerText === 'undefined') {
        console.log(element.parentElement.remove())
      }
    })
  })

}


function AddItemsOfarry(h1, para, skills,background,color_write) {
  const div = `<div style="background-color:${background};color:${color_write};" class="${color_write='changeee'} container-of-item-hidden">
  <p style="color:${color_write};background-color:${background}" class="close">&#10005;</p>
  <div class="container-title-of-item">
   <h2>${h1}</h2> 
 <p class="paraaa">${para}</p>    
  </div>

<div class="container-under-title-of-item">
     <div>

     <i class="fa-solid fa-circle-check"></i> 
     <p>${skills.skills1}</p> 
      
     </div>
        
      <div>
      <i class="fa-solid fa-circle-check"></i>
      <p>${skills.skills2}</p>
      
      </div>
     
      <div>
          <i class="fa-solid fa-circle-check"></i>
      <p>${skills.skills3}</p>
      
      </div>
          
      <div>
          <i class="fa-solid fa-circle-check"></i>
      <p> ${skills.skills4}</p>
      
      </div>
    
      <div>
          <i class="fa-solid fa-circle-check"></i>
      <p>${skills.skills5}</p>
      
      </div>
</div>
</div>`

  container_global_item_hidden.innerHTML = div
}

function showNav(e) {
  nav_bar.classList.toggle('show-Nav')
}

fa_bars.addEventListener('click', showNav)
document.addEventListener('click', e => {
    
  if (!e.target.classList.contains('ull')
    && !e.target.classList.contains('fa-bars')) {
    nav_bar.classList.remove('show-Nav')
  }
  if (e.target.classList.contains('container-global-item-hidden') || e.target.classList.contains('close')||e.target.classList.contains('colors')) {
    container_global_item_hidden.classList.remove('show-container-of-item')
  }if(e.target.classList.contains('container-of-img-show')||e.target.classList.contains('closee')){
    container_of_img_show.classList.remove("show-img-Fixed")
  }

})


 btn_start.addEventListener('click',clearLocal)



