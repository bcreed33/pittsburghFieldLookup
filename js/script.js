/*const petForm = document.querySelector('#pet-form');

petForm.addEventListener('submit', fetchAnimals);

// Fetch Animals From API
function fetchAnimals(e) {
  e.preventDefault();

  // Get User Input
  const animal = document.querySelector('#animal').value;
  const zip = document.querySelector('#zip').value;

  // Validate Zip
  if (!isValidZip(zip)) {
    showAlert('Please Enter A Valid Zipcode', 'danger');
    return;
  }

  // Fetch Pets
  fetchJsonp(
    `http://api.petfinder.com/pet.find?format=json&key=YOURKEYHERE&animal=${animal}&location=${zip}&callback=callback`,
    {
      jsonpCallbackFunction: 'callback'
    }
  )
    .then(res => res.json())
    .then(data => showAnimals(data.petfinder.pets.pet))
    .catch(err => console.log(err));
}

// // JSONP Callback
// function callback(data) {
//   console.log(data);
// }

// Show Listings Of Pets
function showAnimals(pets) {
  const results = document.querySelector('#results');
  // Clear First
  results.innerHTML = '';
  // Loop Through Pets
  pets.forEach(pet => {
    console.log(pet);
    const div = document.createElement('div');
    div.classList.add('card', 'card-body', 'mb-3');
    div.innerHTML = `
      <div class="row">
        <div class="col-sm-6">
          <h4>${pet.name.$t} (${pet.age.$t})</h4>
          <p class="text-secondary">${pet.breeds.breed.$t}</p>
          <p>${pet.contact.address1.$t} ${pet.contact.city.$t} ${
      pet.contact.state.$t
    } ${pet.contact.zip.$t}</p>
          <ul class="list-group">
            <li class="list-group-item">Phone: ${pet.contact.phone.$t}</li>
            ${
              pet.contact.email.$t
                ? `<li class="list-group-item">Email: ${
                    pet.contact.email.$t
                  }</li>`
                : ``
            }
            <li class="list-group-item">Shelter ID: ${pet.shelterId.$t}</li>
          </ul>
        </div>
        <div class="col-sm-6 text-center">
          <img class="img-fluid rounded-circle mt-2" src="${
            pet.media.photos.photo[3].$t
          }">
        </div>
      </div>
    `;

    results.appendChild(div);
  });
}
*/


const ballFieldsData = [];
const endpoint3 = "https://data.wprdc.org/dataset/87c77ec3-db98-4b2a-8891-d9b577b4c44d/resource/d569b513-44c0-4b65-9241-cc3d5c506760/download/fieldsimg.geojson";
fetch(endpoint3)
.then(blob => blob.json())
.then(ballFields);
 /*   .then(blob => blob.json())
    .then(data => ballFieldsData.push(...data.features))
console.log(ballFieldsData);

const fielddata = ballFieldsData.map(function(x){
        const fieldName = x.properties.name;
        console.log(fieldName);
        
        const parkName = x.properties.park;
        let haslights = "yes";
        if(x.properties.has_lights !== 1){
            haslights = "no";
        }
        let infieldType = "Dirt"
        if (x.properties.infield_type == "Grass with Skinned Baselines" || x.properties.infield_type == "Grass"){
            infieldType = "Grass"
        };
        const rightField = x.properties.right_field_distance;
        const centerField = x.properties.center_field_distance;
        const leftField = x.properties.left_field_distance;

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
        `
    });
    document.querySelector('#results').innerHTML = fielddata;
*/










function ballFields(z){
  console.log(z.features);
    const fieldinfo = z.features;
    const fielddata = fieldinfo.map( function(x){
        const fieldName = x.properties.name;
        const parkName = x.properties.park;
        let haslights = "yes";
        if(x.properties.has_lights !== 1){
            haslights = "no";
        }
        let infieldType = "Dirt"
        if (x.properties.infield_type == "Grass with Skinned Baselines" || x.properties.infield_type == "Grass"){
            infieldType = "Grass"
        };
        const rightField = x.properties.right_field_distance;
        const centerField = x.properties.center_field_distance;
        const leftField = x.properties.left_field_distance;

        return`
            <div class="col-sm-6">
            <h4>${fieldName}</h4>
            <p class="text-secondary">Park Name - ${parkName}</p>
            <ul class="list-group">
                <li class="list-group-item">Has Lights : ${haslights}</li>
                <li class="list-group-item">Infield type : ${infieldType} </li>   
                <li class="list-group-item">Out Filed Distance </br>
                Left : ${leftField} yards </br> Center : ${centerField} yards </br> Right: ${rightField} yards</li>
            </ul>
            </div>
        `
    });
    document.querySelector('#results').innerHTML = fielddata;
};

   