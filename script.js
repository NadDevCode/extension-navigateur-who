let myButton = document.getElementById("bouton");

//const inputName = "Chuck Norris"

async function apiWiki(name) {
  let urlApi = `https://fr.wikipedia.org/api/rest_v1/page/summary/${name}`;

  try {
    const response = await fetch(urlApi);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    //console.log(data);
    const personPicture = data.originalimage.source;
    console.log(personPicture);

    const personName = data.titles.normalized;
    console.log(personName);

    const personBio = data.extract;
    console.log(personBio);
  } catch (error) {
    console.error("Error fetching data:" + error.message);
  }
}

myButton.addEventListener("click", (e) => {
  e.preventDefault();
  const inputName = document.getElementById("personName").value;
  const result = apiWiki(inputName);
  console.log(result);
});
