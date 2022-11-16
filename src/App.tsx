import React, { useState } from "react";
import { searchApi } from "./api";

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
    <div className="relative px-6 lg:px-8">
      <div className="mx-auto max-w-3xl pt-20 pb-12 sm:pt-48">
        <div className="flex shadow-sm space-x-4 justify-center">
          <input
            className="block w-96 rounded-md border border-slate-300 border-gray-500 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder="소환사 이름 검색"
            onChange={onChange}
            value={id}
          />
          <button
            className="py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
            onClick={onClick}
          >
            검색
          </button>
        </div>
      </div>
      <div className="mx-auto  max-w-3xl justify-center ">
        {db != null
          ? db
              .filter((i) => i.queueType == "RANKED_SOLO_5x5")
              .map((i) => (
                <div className="w-auto" key={i.leagueId}>
                  <div className="flex justify-center">
                    닉네임: <h1>{i.summonerName}</h1>
                  </div>
                  <div className="flex justify-center">
                    티어: <h1>{i.tier}</h1>
                  </div>
                  <div className="flex justify-center">
                    랭크 : <h1>{i.rank}</h1>
                  </div>
                  <div className="flex justify-center">
                    포인트 : <h1>{i.leaguePoints}</h1>
                  </div>
                </div>
              ))
          : "dd"}
      </div>
    </div>
  );
}

export default App;
