class Recipe {
  baseUrl = "https://www.themealdb.com/api/json/v1/1/";
  requestOptions = {
    method: "GET"
  };

  async getData(params) {
    const data = await fetch(`${this.baseUrl}${params}`, this.requestOptions)
      .then(response => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .catch(error => {
        console.log(`has been a problem: ${error}`);
      });
    return data.meals && data.meals[0];
  }

  async getRandom(cnt) {
    const dataArr = {};
    for (let i = 0; i < cnt; i++) {
      const data = await this.getData(`random.php`);
      dataArr[data.idMeal] = data;
    }
    return dataArr;
  }

  async getId(id) {
    const data = await this.getData(`lookup.php?i=${id}`);
    return data;
  }

  async getCategory(category) {
    const data = await this.getData(`filter.php?c=${category}`);
    return data;
  }
  async getArea(area) {
    const data = await this.getData(`filter.php?a=${area}}`);
    return data;
  }
  async getName(name) {
    const data = await this.getData(`search.php?s=${name}`);
    return data;
  }
}

export default Recipe;
