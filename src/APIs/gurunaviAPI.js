import axios from "axios";

const gurunaviAPI = (word, lat, lon) => {
  let search = word;
  //空白処理 未対応
  if (search === "") {
    search = "c";
  }
  console.log(search);
  // const lat = "35.676263";
  // const lng = "139.7702";
  // const key = "60a78637e5a596b7969c4d4f46672d20";
  const key = "de39093d9eb5bb6d286d8db4809b2a98";

  const freeword = `${search}`;
  // const freeword = `${search}%20-インターネット`;
  const range = 5;
  const show_number = 100;
  const url = `https://api.gnavi.co.jp/RestSearchAPI/v3/?keyid=${key}&latitude=${lat}&longitude=${lon}&hit_per_page${show_number}&range=${range}&freeword=${freeword}`;

  return axios.get(url);
};

export default gurunaviAPI;
