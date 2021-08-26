

function dra(event) {
    event.dataTransfer.setData("text", event.target.id);
}
function allowDrop(event) {
    event.preventDefault();
  }
  function drop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("text");
    event.target.appendChild(document.getElementById(data));
  }



// function onChange(){
//     if(rute1 == bilde1) &&
//         (rute2 == bilde2) &&
//         (rute3 == bilde3) &&
//         (rute4 == bilde4) {
//             h1 = "Wooho";
//     } else {
//         h1 = "Puslespill:";            

