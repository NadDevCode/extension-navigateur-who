//BUTTON
let myButton = document.getElementById("bouton");

//DIVS HTML
const personPicture = document.getElementById("picture");
const personName = document.getElementById("name");
const personBio = document.getElementById("description");

async function apiWiki(name) {
  if (name === "Kévin_Leiba") {
    personName.innerHTML = `<h2>Kévin Leiba</h2>`;
    personPicture.innerHTML = `<img src="https://ca.slack-edge.com/TFLNG6MFU-U05QMC5AVM1-5db909c58838-512" style='width: 200px; height: auto; border-radius: 10px'>`;
    personBio.innerHTML = `Expert en développement web, se démarque par sa maîtrise inégalée de JavaScript. Passionné et énergique, il insuffle une créativité débordante à chaque ligne de code. Son amour pour le sucre syntaxique est à la fois une signature artistique et une source d'inspiration constante. Actif dans le monde open source, Kévin jongle avec les bibliothèques et frameworks tout en maintenant une productivité exceptionnelle, alimentée par une montagne de snacks sucrés. En résumé, Kévin Leiba transcende les normes du développement, combinant expertise technique, créativité, et une énergie infatigable.`;
  } else {
    let urlApi = `https://fr.wikipedia.org/api/rest_v1/page/summary/${name}`;

    try {
      const response = await fetch(urlApi);

      const data = await response.json();
      console.log(data.originalimage);

      if (data.originalimage) {
        personPicture.innerHTML = `<img src="${data.originalimage.source}" style='width: 200px; height: auto; border-radius: 10px'>`;
        personName.innerHTML = `<a href="${data.content_urls.desktop.page}" target="_blank">${data.titles.normalized}</a>`;
        personBio.innerHTML = data.extract;
      } else {
        personBio.innerHTML = `<i id="hand" class="fa-solid fa-hand-pointer"></i> <br/> Il existe plusieurs liens pour ce nom. Débrouillez-vous !`;
        personName.innerHTML = `<a id="moveText" href="${data.content_urls.desktop.page}" target="_blank">${data.titles.normalized}</a>`;
        personPicture.innerHTML = "";
      }
    } catch (error) {
      console.log(error);
      personName.innerHTML = `Oups ! Cette personne ne semble pas exister...`;
      personPicture.innerHTML = `<img src="./icons/giphy.gif" style='width: 200px; height: auto'>`;
      personBio.innerHTML = "";

      console.error("Error fetching data:" + error.message);
    }
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

myButton.addEventListener("click", (e) => {
  e.preventDefault();
  const inputName = document.getElementById("personName").value;
  const resultFormatName = formatName(inputName);

  try {
    apiWiki(resultFormatName);
    document.getElementById("personName").value = "";
  } catch (error) {
    console.error("Error:", error);
  }
});
