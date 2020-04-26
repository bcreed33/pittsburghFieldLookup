const endpoint = "https://data.wprdc.org/dataset/87c77ec3-db98-4b2a-8891-d9b577b4c44d/resource/d569b513-44c0-4b65-9241-cc3d5c506760/download/fieldsimg.geojson";
fetch(endpoint)
    .then(blob => blob.json())
    .then(data => ballFieldsData.push(...data.features));


const ballFieldsData = [];

function findField(match, ballFieldsData) {
  return ballFieldsData.filter( field =>{
    const regex = new RegExp(match, 'g');
    return field.properties.name.match( regex )
  }); 
}
    
function showFields() {
  const matchArray = findField(this.value, ballFieldsData);
  console.log('this is match array');
  console.log(matchArray);
  const someField = matchArray.map(x =>  {
    const select = x.properties;
    const regex = new RegExp(this.value, 'gi');
    const fieldName = select.name.replace(regex, `<span style="color:red">${this.value}</span>`);
    const parkName = select.park;
    let haslights = "yes";
    if(select.has_lights !== 1){
        haslights = "no";
    }
    let infieldType = "Dirt"
    if (select.infield_type == "Grass with Skinned Baselines" || select.infield_type == "Grass"){
        infieldType = "Grass"
    };
    const rightField = select.right_field_distance;
    const centerField = select.center_field_distance;
    const leftField = select.left_field_distance;

    return`
        <div class="col-sm-6" style=" display:block;float:left">
        <h4>${fieldName}</h4>
        <p class="text-secondary">Park Name - ${parkName}</p>
        <ul class="list-group">
            <li class="list-group-item">Has Lights : ${haslights}</li>
            <li class="list-group-item">Infield type : ${infieldType} </li>   
            <li class="list-group-item">Out Filed Distance </br>
            Left : ${leftField} yards </br> Center : ${centerField} yards </br> Right: ${rightField} yards</li>
        </ul>
        </div>
        `;
      }).join('');
      document.querySelector('#results').innerHTML = someField;
}


const searchIn = document.querySelector('#fieldLookUp');
searchIn.addEventListener('change', showFields);
searchIn.addEventListener('keyup', showFields);
