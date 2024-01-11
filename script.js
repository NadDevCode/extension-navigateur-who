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

    const personPicture = document.getElementById("picture");
    personPicture.innerHTML = `<img src="${data.originalimage.source}" style='width: 200px; height: 200px'>`;
    //console.log(personPicture);
    const personName = document.getElementById("name");
    personName.innerHTML = data.titles.normalized;
    //console.log(personName);
    const personBio = document.getElementById("description");
    personBio.innerHTML = data.extract;
    //console.log(personBio);
  } catch (error) {
    console.error("Error fetching data:" + error.message);
  }
}

myButton.addEventListener("click", async (e) => {
  e.preventDefault();
  const inputName = document
    .getElementById("personName")
    .value.replace(" ", "_");

  try {
    await apiWiki(inputName);
  } catch {
    console.error("Error:" + error);
  }
});
