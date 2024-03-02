class Database {
  data: Business[] = [];

  constructor() {
    this._fetchData();
  }

  async _fetchData() {
    const response = await fetch("https://www.divineappointments.sg/api/");
    const jsonResponse = await response.json();
    this.data = jsonResponse.data;
  }

  async findMany() {
    return this.data;
  }

  async findFirst(params: { where: { name: string } }) {
    // returns json so find the first item that matches the name
    return this.data.find(
      (item: { name: string }) => item.name === params.where.name
    );
  }
}

export const db = new Database();
