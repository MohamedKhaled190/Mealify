let chcol1 = document.getElementById('change-color1')
let chcol2 = document.getElementById('change-color2')

// nav items
let nav = document.querySelector('.nav')
let navh1 =  document.querySelector('.nav-h1')
let navlink =  document.querySelectorAll('.nav-link')

// home items
let home = document.querySelector('.home')
let homeh1 = document.querySelector('.homeh1')
let homelink = document.querySelector('.homelink')
let homebtn = document.querySelector('.homebtn')
let homeicon = document.querySelector('.homeicon')

// chifs items
let chifspan = document.querySelector('.chifspan')
let chifs = document.querySelector('.chefs')
let chifsh2 = document.querySelector('.chifsh2')
let chifsitem = document.querySelectorAll('.chifsitem')
let chifs2h2 =document.querySelectorAll('.chifs2h2')

// gallery items
let gallery =document.querySelector('.gallery')
let galleryh2 = document.querySelector('.galleryh2')
let galleryspan = document.querySelector('.galleryspan')

// contact items
let contact = document.querySelector('.contact')
let contacth2 = document.querySelector('.contacth2')
let contactspan = document.querySelector('.contactspan')
let email =document.querySelectorAll('.email')
let emailp =document.querySelectorAll('.emailp')
let emaili = document.querySelectorAll('.emaili')
let form = document.querySelector('form')
let contactbtn = document.querySelector('.contactbtn')

// footer items
let footerbtn = document.querySelector('.footerbtn')
let footeri = document.querySelectorAll('.footeri')

chcol1.onclick = function(){
chcol1.style.display = 'none'

// nav 
nav.style.background = 'black'
chcol2.style.display = 'block'
chcol2.style.color = 'white'
navh1.style.color = 'white'
navlink[0].style.color = 'white'
navlink[1].style.color = 'white'
navlink[2].style.color = 'white'
navlink[3].style.color = 'white'

// home 
home.style.background ='#252525'
homeh1.style.color = 'white'
homebtn.style.color = 'black'
homebtn.style.background = 'rgb(193, 126, 31)'
homeicon.style.background = 'rgb(193, 126, 31)'

// chifs
chifs.style.background = '#202020'
chifspan.style.color =  'rgb(193, 126, 31)'
chifsh2.style.color = 'white'
chifsitem[0].style.background = '#181818'
chifsitem[1].style.background = '#181818'
chifsitem[2].style.background = '#181818'
chifs2h2[0].style.color = 'white'
chifs2h2[1].style.color = 'white'
chifs2h2[2].style.color = 'white'

// gallery
gallery.style.background = 'black'
gallery.style.color = 'white'
galleryspan.style.color =  'rgb(193, 126, 31)'

// contact
contact.style.background ='#252525'
contacth2.style.color = 'white'
contactspan.style.color =  'rgb(193, 126, 31)'
email[0].style.background = 'black'
email[1].style.background = 'black'
email[2].style.background = 'black'
email[3].style.background = 'black'
emailp[0].style.color = 'white'
emailp[1].style.color = 'white'
emailp[2].style.color = 'white'
emailp[3].style.color = 'white'
emaili[0].style.background = 'rgb(193, 126, 31)'
emaili[1].style.background = 'rgb(193, 126, 31)'
emaili[2].style.background = 'rgb(193, 126, 31)'
emaili[3].style.background = 'rgb(193, 126, 31)'
form.style.background = 'black'
contactbtn.style.background = 'rgb(193, 126, 31)'

// footer
footerbtn.style.background = 'rgb(193, 126, 31)'
footeri[0].style.color = 'rgb(193, 126, 31)'
footeri[1].style.color = 'rgb(193, 126, 31)'
footeri[2].style.color = 'rgb(193, 126, 31)'


}

chcol2.onclick = function(){
    chcol2.style.display = 'none'
    chcol1.style.display = 'block'
    // nav
    nav.style.background = 'white'
    navh1.style.color = 'black'
    navlink[0].style.color = 'rgb(127, 127, 144)'
    navlink[1].style.color = 'rgb(127, 127, 144)'
    navlink[2].style.color = 'rgb(127, 127, 144)'
    navlink[3].style.color = 'rgb(127, 127, 144)'

    // home
    home.style.background ='#eee'
    homeh1.style.color = '#37373f'
    homebtn.style.color = 'white'
    homebtn.style.background = 'rgb(206, 18, 18)'
    homeicon.style.background = 'rgb(206, 18, 18)'

    // chifs
    chifs.style.background = 'white'
    chifspan.style.color =  'rgb(206, 18, 18)'   
    chifsh2.style.color = 'black'
    chifsitem[0].style.background = 'white'
    chifsitem[1].style.background = 'white'
    chifsitem[2].style.background = 'white'
    chifs2h2[0].style.color = 'black'
    chifs2h2[1].style.color = 'black'
    chifs2h2[2].style.color = 'black'

    // gallery
    gallery.style.background = '#eee'
    gallery.style.color = 'black'
    galleryspan.style.color =  'rgb(206, 18, 18)' 

    // contact
    contact.style.background ='#eee'
    contacth2.style.color = 'black'
    contactspan.style.color =  'rgb(206, 18, 18)'
    email[0].style.background = 'white'
    email[1].style.background = 'white'
    email[2].style.background = 'white'
    email[3].style.background = 'white'
    emailp[0].style.color = 'black'
    emailp[1].style.color = 'black'
    emailp[2].style.color = 'black'
    emailp[3].style.color = 'black'
    emaili[0].style.background = ''
    emaili[1].style.background = ''
    emaili[2].style.background = ''
    emaili[3].style.background = ''
    form.style.background = ''
    contactbtn.style.background = ''

    // footer
    footerbtn.style.background = ''
    footeri[0].style.color = ''
    footeri[1].style.color = ''
    footeri[2].style.color = ''
}

