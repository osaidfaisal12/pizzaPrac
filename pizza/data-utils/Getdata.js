import axios from "axios";


export async function getData() {
  const response = await axios.get(
    "https://pizza-b2e64-default-rtdb.firebaseio.com/pizza.json"
  );

  const data = response.data

  const items = [];

  for (const key in data) {
    items.push({id:key,...data[key]});
  }

  console.log(items)
  return items;
}
