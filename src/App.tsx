import React, { useState } from "react";
import { searchApi } from "./api";
import "./App.css";
//RomvFYLUmsLT0K8f2ungzLsbWw3fnkq0ClZkN3mYE6ZIoDrjW0jDcIaEWZY1adNqDIYWNRnHhoF1Wg
function App() {
  const [id, setId] = useState<string>("");
  const [db, setData] = useState<any[]>([]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);
  };

  const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    searchApi(id, setData);
  };

  return (
    <>
      <div className="App">
        <input onChange={onChange} value={id} />
        <button onClick={onClick}>검색</button>
      </div>
      {db != null
        ? db
            .filter((i) => i.queueType == "RANKED_SOLO_5x5")
            .map((i) => (
              <div key={i.leagueId}>
                닉네임: <h1>{i.summonerName}</h1>
                티어: <h1>{i.tier}</h1>
                랭크 : <h1>{i.rank}</h1>
                포인트 : <h1>{i.leaguePoints}</h1>
              </div>
            ))
        : "dd"}
    </>
  );
}

export default App;
