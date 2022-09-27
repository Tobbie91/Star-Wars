const main = () => {
  const starWarsData = async () => {
    try {
      const response = await fetch("https://swapi.dev/api/people");
      const data = await response.json();
      const result = data.results;
      return result;
    } catch (error) {
      console.log(error);
    }
  };
  const displayCharData = async () => {
    try {
      const displayStarWarsData = await starWarsData();

      let html = "";

      displayStarWarsData.map((element, index) => {
        let htmlEl = `    
                  <div class="box">
                      <img src=./img/image${index}.jpeg alt="star-wars"/>

                          <h4 class="h4"> ${element.name}</h4>
                          <details>
                              <p>Gender: ${element.gender}</p>
                              <p>Height: ${element.height}</p>
                          </details>    
                  </div>
              `;
        html += htmlEl;
      });

      let containerEl = document.getElementById("container");
      containerEl.innerHTML = html;
    } catch (error) {
      console.log(error);
    }
  };

  displayCharData();
};
main();
