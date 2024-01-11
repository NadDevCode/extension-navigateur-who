const inputName = document.getElementById("personName")

let myButton = docum.getElementById("bouton")

//const inputName = "Chuck Norris"

async function apiWiki(name) {

    try {
        let urlApi = `https://fr.wikipedia.org/api/rest_v1/page/summary/${name}`;
    
        const response = await fetch(urlApi);
    
        if(!response.ok) {
            throw new console.error(`HTTP error! Status: ${response.status}`);
        }
    
        const data = await response.json();
        //console.log(data);
        const personPicture = data.originalimage.source;
        console.log(personPicture);

        const personName = data.titles.normalized;
        console.log(personName);

        const personBio = data.extract;
        console.log(personBio)
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

apiWiki(inputName);  

myButton.addEventListern("click", () => {

})