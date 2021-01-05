class Recipe {
  async getRandom(cnt) {
    const requestOptions = {
      method: "GET"
    };
    const dataArr = {};
    for (let i = 0; i < cnt; i++) {
      const data = await fetch(
        "https://www.themealdb.com/api/json/v1/1/random.php",
        requestOptions
      )
        .then(response => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .catch(error => {
          console.log(`getRandom has been a problem: ${error}`);
        });
      dataArr[data.meals[0].idMeal] = data.meals[0];
    }
    return dataArr;
  }
}

export default Recipe;
