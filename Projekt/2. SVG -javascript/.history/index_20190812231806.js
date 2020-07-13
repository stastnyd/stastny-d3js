
const axios = require('axios');
// Make a request for a user with a given ID
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
axios
  .get('http://127.0.0.1:5000/drzave')
  .then((response) => {
    // handle success
    const idDrzave = document.getElementById('in1');
    const objekt = response.data[0].id;
    console.log(objekt, 'ovo je novi array');
    idDrzave.value = objekt;
  })
  .catch((error) => {
    // handle error
    console.log(error);
  })
  .finally(() => {
    // always executed
  });