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

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    let pictureDisplay = "";

    if (name === "Eric_Zemmour") {
      pictureDisplay = "https://urlz.fr/pfmI";
    } else {
      pictureDisplay = data.originalimage.source;
    }

    personPicture.innerHTML = `<img src="${pictureDisplay}" style='width: 200px; height: auto'>`;
    personName.innerHTML = `<a href="${data.content_urls.desktop.page}" target="_blank">${data.titles.normalized}</a>`;
    personBio.innerHTML = data.extract;
  } catch (error) {
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
  } catch (error) {
    console.error("Error:", error);
  }
});
