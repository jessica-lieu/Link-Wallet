/* globals Chart:false, feather:false */
if(document.querySelector("#submit_button") != null){
  document.querySelector("#submit_button").onclick = submit;
}

function submit(){
  console.log("clicked")
}
(function () {
  'use strict'

  feather.replace({ 'aria-hidden': 'true' })
})()