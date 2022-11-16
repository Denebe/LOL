import axios from "axios";

const PROXY_URL =
  window.location.hostname === "localhost"
    ? ""
    : "https://kr.api.riotgames.com";

export const searchApi = (id: string, setData: any) => {
  const url = `${PROXY_URL}/lol/summoner/v4/summoners/by-name/${id}`;

  const options = {
    method: "GET",
    headers: {
      "X-Riot-Token": "RGAPI-c6c73859-98b3-47b0-8797-5f97d53fdc2f",
      "Content-Type": "application/json",
    },
    url,
  };
  axios(options).then(
    (r) => {
      console.log("connect");
      const pd: string = r.data.id;
      const rankApi = () => {
        const url = `${PROXY_URL}/lol/league/v4/entries/by-summoner/${pd}`;

        const options = {
          method: "GET",
          headers: {
            "X-Riot-Token": "RGAPI-c6c73859-98b3-47b0-8797-5f97d53fdc2f",
            "Content-Type": "application/json",
          },
          url,
        };
        axios(options).then(
          (r) => {
            console.log("connect");
            console.log(r.data);
            return setData(r.data);
          },
          (error) => {
            console.log(error);
          }
        );
      };
      rankApi();
      console.log();
    },
    (error) => {
      console.log(error);
    }
  );
};
