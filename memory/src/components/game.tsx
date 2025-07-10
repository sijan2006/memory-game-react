import { useEffect, useState } from "react";
import "../App.css";

type pokemon = {
  name: string;
  id: number;
  img: string;
};

export default function Gamestart() {
  const [resetscore, setscore] = useState(0);
  const [highscore, sethighscore] = useState(0);
  const [list, setlist] = useState<pokemon[]>([]);
  const [clicklist, setclicklist] = useState<number[]>([]);

  // Fetch pokemons when component mounts
  useEffect(() => {
    const fetchpoke = async () => {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=12");
      const data = await response.json();
      const promise = data.results.map(async (pokemon: any) => {
        const pokeres = await fetch(pokemon.url);
        const pokedata = await pokeres.json();
        return {
          id: pokedata.id,
          name: pokedata.name,
          img: pokedata.sprites.front_default,
        };
      });
      const results = await Promise.all(promise);
      setlist(results);
    };
    fetchpoke();
  }, []);

  // ✅ Shuffle directly inside handleClick
  const handleclick = (id: number) => {
    if (clicklist.includes(id)) {
      setscore(0);
      setclicklist([]);
      return;
    }

    const updatedClickList = [...clicklist, id];
    setclicklist(updatedClickList);

    setscore((prevScore) => {
      const newscore = prevScore + 1;
      sethighscore((prevHigh) => (newscore > prevHigh ? newscore : prevHigh));
      return newscore;
    });

    const shuffled = shufflesarray([...list]);
    setlist(shuffled);
  };

  function shufflesarray<T>(array: T[]): T[] {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }
  

  return (
    <div>
        <h5 className="info">Avoid clicking the same thing twice or you are out. Can you get to 12 ?</h5>
      <h2 className="score">Score: <div className="scoredata">{resetscore}</div> | High Score: <div className="scoredata">{highscore}</div></h2>
      <div className="pokebox">
        {list.map((poke) => (
          <div key={poke.id} onClick={() => handleclick(poke.id)}>
            <img src={poke.img} alt={poke.name} />
          
          </div>
        ))}
      </div>
    </div>
  );
}
