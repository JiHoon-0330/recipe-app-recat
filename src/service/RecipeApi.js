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
            throw new Error("getRandom: Network response was not ok");
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

  async getId(id) {
    const requestOptions = {
      method: "GET"
    };
    const data = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`,
      requestOptions
    )
      .then(response => {
        if (!response.ok) {
          throw new Error("getId: Network response was not ok");
        }
        return response.json();
      })
      .catch(error => {
        console.log(`getId has been a problem: ${error}`);
      });
    return data.meals && data.meals[0];
  }

  async getCategory(category) {
    const requestOptions = {
      method: "GET"
    };
    const data = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`,
      requestOptions
    )
      .then(response => {
        if (!response.ok) {
          throw new Error("getCategory: Network response was not ok");
        }
        return response.json();
      })
      .catch(error => {
        console.log(`getCategory has been a problem: ${error}`);
      });
    return data.meals && data.meals;
  }
}

export default Recipe;
