var boxarea = document.querySelector("#boxarea")


boxarea.addEventListener("mouseenter", function (dets) {

  console.log(dets.screenX)

  gsap.to(boxarea, {
   transform:"translateZ(dets.screenX)" 




  })
  


})