show();
function show() {
    document.getElementById('app').innerHTML = `
    <h1>Puslespill ftw</h1> <br>
    <hr>

    <div class="gridContainer">
        <div id="rute1" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
        <div id="rute2" ondrop="drop(event)" ondragover="allowDrop(event)"></div> 
        <div id="rute3" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
        <div id="rute4" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
    <div>

<hr>
    <div class="samleboks" ondrop="drop(event)" ondragover="allowDrop(event)">
        
        <div id="bilde1" draggable="true" ondragstart="dra(event)"><br></div>
        <div id="bilde2" draggable="true" ondragstart="dra(event)"><br></div>
        <div id="bilde3" draggable="true" ondragstart="dra(event)"><br></div>
        <div id="bilde4" draggable="true" ondragstart="dra(event)"><br></div>
        
    </div>

    
     


    `;



}


