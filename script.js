//BUTTON
let myButton = document.getElementById("bouton");

//DIVS HTML
const personPicture = document.getElementById("picture");
const personName = document.getElementById("name");
const personBio = document.getElementById("description");

async function apiWiki(name) {
  let urlApi = `https://fr.wikipedia.org/api/rest_v1/page/summary/${name}`;

  try {
    const response = await fetch(urlApi);
    console.log(response);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log(data.originalimage);

    if (data.originalimage) {
      let pictureDisplay;
      let bioDisplay;

      switch (name) {
        case "Eric_Zemmour":
          pictureDisplay = "https://urlz.fr/pfmI";
          bioDisplay =
            "Immigration Immigration Immigration Immigration Immigration Immigration Immigration Immigration Immigration Immigration Immigration Immigration Immigration Immigration Immigration Immigration Immigration ImmigrationImmigration Immigration  Immigration Immigration Immigration Immigration Immigration Immigration Immigration Immigration Immigration Immigration Immigration Immigration Immigration Immigration ImmigrationImmigration  Immigration Immigration Immigration Immigration Immigration Immigration Immigration";
          break;
        case "Cyril_Hanouna":
          pictureDisplay = "https://urlr.me/MvbCP";
          bioDisplay = `né le 23 septembre 1974
          Animateur incontesté du chaos médiatique. Avec une subtilité aussi rare qu'une licorne rose, Hanouna a réussi à transformer chaque émission en un « spectacle » où la décence et la logique font leurs adieux.ssion en un « spectacle » où la décence et la logique font leurs adieux.`;
          break;
        case "Emmanuel_Macron":
          pictureDisplay =
            "https://confpeps.org/wp-content/uploads/2023/03/macron-doigt-retraite-750x465.jpg";
          break;
        default:
          pictureDisplay = data.originalimage.source;
          bioDisplay = data.extract;
      }

      personPicture.innerHTML = `<img src="${pictureDisplay}" style='width: 200px; height: auto; border-radius: 10px'>`;
      personName.innerHTML = `<a href="${data.content_urls.desktop.page}" target="_blank">${data.titles.normalized}</a>`;
      personBio.innerHTML = bioDisplay;
    } else {
      personBio.innerHTML = `<i id="hand" class="fa-solid fa-hand-pointer"></i> <br/> Il existe plusieurs liens pour ce nom. Débrouillez-vous !`;
      personName.innerHTML = `<a id="moveText" href="${data.content_urls.desktop.page}" target="_blank">${data.titles.normalized}</a>`;
    }
  } catch (error) {
    console.log(error);
    personName.innerHTML = `Oups ! Cette personne ne semble pas exister...`;
    personPicture.innerHTML = `<img src="./icons/giphy.gif" style='width: 200px; height: auto'>`;
    personBio.innerHTML = "";

    console.error("Error fetching data:" + error.message);
  }
}

const formatName = (inputValue) => {
  const newName = inputValue.split(" ");
  for (var i = 0; i < newName.length; i++) {
    newName[i] = newName[i].charAt(0).toUpperCase() + newName[i].slice(1);
  }
  const nameForApi = newName.join(" ").replace(" ", "_");

  return nameForApi;
};

myButton.addEventListener("click", async (e) => {
  e.preventDefault();
  const inputName = document.getElementById("personName").value;
  const resultFormatName = formatName(inputName);

  try {
    await apiWiki(resultFormatName);
    document.getElementById("personName").value = "";
  } catch (error) {
    console.error("Error:", error);
  }
});
