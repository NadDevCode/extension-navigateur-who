let myButton = document.getElementById("bouton");

async function apiWiki(name) {
  let urlApi = `https://fr.wikipedia.org/api/rest_v1/page/summary/${name}`;

  try {
    const response = await fetch(urlApi);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    const personPicture = document.getElementById("picture");
    personPicture.innerHTML = `<img src="${data.originalimage.source}" style='width: 200px; height: 200px'>`;

    const personName = document.getElementById("name");
    personName.innerHTML = data.titles.normalized;

    const personBio = document.getElementById("description");
    personBio.innerHTML = data.extract;
  } catch (error) {
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
  } catch {
    console.error("Error:" + error);
  }
});
