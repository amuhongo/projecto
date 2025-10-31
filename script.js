function toggleMode(){
    const html = document.documentElement
    
    /*if (html.classList.contains("light")){
      html.classList.remove("light")
    } else {
      html.classList.add("light")
    }*/
   html.classList.toggle("light")
   //pagar imag
  
   const img = document.querySelector("#profile img")

   if(html.classList.contains("light"))
   {
    img.setAttribute("src", './assets/avatar-light.png')
   }
   else{
    img.setAttribute('src',"./assets/avatar.png")
   }
}
/**
 * git remote add origin https://github.com/amuhongo/projecto.git
git branch -M main
git push -u origin main
 */