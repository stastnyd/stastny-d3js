
const axios = require('axios');
// Make a request for a user with a given ID
axios
  .get('http://127.0.0.1:5000/drzave')
  .then((response) => {
    // handle success
    const idDrzave = document.getElementById('in1');
    const arrayObject =[];
    const objekt = response.data;
    arrayObject.push(objekt);
    const newArray=Object.Keys(arrayObject);
    console.log(newArray, 'ovo je novi array');
    idDrzave.value = newArray.id;
  })
  .catch((error) => {
    // handle error
    console.log(error);
  })
  .finally(() => {
    // always executed
  });