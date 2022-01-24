import React, { useEffect, useState } from "react";
import PokemonCards from "./js/PokemonCards";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import PokemonInfo from "./js/PokemonInfo";

function App() {
  const [selectPokemons, setselectPokemons] = useState([]);
  const [selectLoad, setselectLoad] = useState(
    "https://pokeapi.co/api/v2/pokemon?limit=20"
  );

  const showPokemon = async () => {
    const feth = await fetch(selectLoad);
    const further = await feth.json();

    setselectLoad(further.next);

    function createPokemon(result) {
      result.forEach(async (elem) => {
        const feth = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${elem.name}`
        );
        const loadMore = await feth.json();
        setselectPokemons((pokemonList) => [loadMore, ...pokemonList]);
        await selectPokemons.sort((a, b) => a.id * b.id);
      });
    }
    createPokemon(further.results);
  };

  useEffect(() => {
    showPokemon();
  }, []);

  function sortID() {
    const copy = Object.assign([], selectPokemons);
    copy.sort((a, b) => a.id - b.id);
    setselectPokemons(copy);
  }

  function sortName() {
    const copy = Object.assign([], selectPokemons);
    copy.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });
    setselectPokemons(copy);
  }

  const [selectLoadNum_1, setSelectLoadNum_1] = useState(
    `https://pokeapi.co/api/v2/pokemon?limit=10`
  );

  async function hideContent_1() {
    const copy = Object.assign([], selectPokemons);
    copy.splice(0, copy.length);
    setselectPokemons(copy);

    const feth = await fetch(selectLoadNum_1);
    const further = await feth.json();

    setSelectLoadNum_1(further.next);

    function createPokemon(result) {
      result.forEach(async (elem) => {
        const feth = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${elem.name}`
        );
        const loadMore = await feth.json();
        setselectPokemons((pokemonList) => [...pokemonList, loadMore]);
        await selectPokemons.sort((a, b) => a.id * b.id);
      });
    }
    createPokemon(further.results);
  }

  const [selectLoadNum_2, setSelectLoadNum_2] = useState(
    `https://pokeapi.co/api/v2/pokemon?limit=20`
  );

  async function hideContent_2() {
    const copy = Object.assign([], selectPokemons);
    copy.splice(0, copy.length);
    setselectPokemons(copy);

    const feth = await fetch(selectLoadNum_2);
    const further = await feth.json();

    setSelectLoadNum_2(further.next);

    function createPokemon(result) {
      result.forEach(async (elem) => {
        const feth = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${elem.name}`
        );
        const loadMore = await feth.json();
        setselectPokemons((pokemonList) => [...pokemonList, loadMore]);
        await selectPokemons.sort((a, b) => a.id * b.id);
      });
    }
    createPokemon(further.results);
  }

  const [selectLoadNum_3, setSelectLoadNum_3] = useState(
    `https://pokeapi.co/api/v2/pokemon?limit=50`
  );

  async function hideContent_3() {
    const copy = Object.assign([], selectPokemons);
    copy.splice(0, copy.length);
    setselectPokemons(copy);

    const feth = await fetch(selectLoadNum_3);
    const further = await feth.json();

    setSelectLoadNum_3(further.next);

    function createPokemon(result) {
      result.forEach(async (elem) => {
        const feth = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${elem.name}`
        );
        const loadMore = await feth.json();
        setselectPokemons((pokemonList) => [...pokemonList, loadMore]);
        await selectPokemons.sort((a, b) => a.id * b.id);
      });
    }
    createPokemon(further.results);
  }

  const [searchName, setsearchName] = useState("");

  function showSearchName() {
    const fillteredName = selectPokemons.filter((names) => {
      return names.name.toLowerCase().includes(searchName.toLowerCase());
    });
    setselectPokemons(fillteredName);
    if (searchName === "") {
      showPokemon();
    }
  }

  function showAside() {
    const aside = document.getElementById("aside");
    const hide = document.querySelector(".hide-aside");
    hide.style.display = "none";
    aside.style.left = 0;
    aside.firstElementChild.addEventListener("click", () => {
      hide.style.display = "";
      aside.style.left = "-250px";
    });
  }

  const [receive, setReceive] = useState([]);

  function showReceive(id) {
    const panel = document.querySelector(".panel");
    const aside = document.querySelector(".hide-aside");
    const wrapper = document.querySelector(".wrapper");
    const pokemonInfo = document.querySelector(".pokemonInfo");
    const sidebar = document.querySelector("aside");
    panel.style.display = "none";
    aside.style.display = "none";
    wrapper.style.display = "none";
    sidebar.style.display = "none";
    pokemonInfo.style.display = "block";
    const result = selectPokemons.filter((note) => {
      if (note.id === id) {
        return note;
      }
    });
    setReceive(result);
  }

  function back() {
    const panel = document.querySelector(".panel");
    const aside = document.querySelector(".hide-aside");
    const wrapper = document.querySelector(".wrapper");
    const pokemonInfo = document.querySelector(".pokemonInfo");
    const sidebar = document.querySelector("aside");
    panel.style.display = "";
    aside.style.display = "";
    wrapper.style.display = "";
    sidebar.style.display = "";
    pokemonInfo.style.display = "none";
  }

  return (
    <>
      <div className="panel">
        <div className="input">
          <TextField
            id="standard-basic"
            label="Name"
            variant="standard"
            onChange={(event) => setsearchName(event.target.value)}
            onKeyUp={() => showSearchName()}
          />
        </div>
        <Button onClick={() => showPokemon()} variant="outlined">
          Загрузить
        </Button>
        <Button onClick={() => sortID()} variant="outlined">
          Сортировать по id
        </Button>
        <Button onClick={() => sortName()} variant="outlined">
          Сортировать по имени
        </Button>
        <div className="btn-block">
          <Button
            className="btn"
            variant="outlined"
            onClick={() => hideContent_1()}
          >
            10
          </Button>
          <Button
            className="btn"
            variant="outlined"
            onClick={() => hideContent_2()}
          >
            20
          </Button>
          <Button
            className="btn"
            variant="outlined"
            onClick={() => hideContent_3()}
          >
            50
          </Button>
        </div>
      </div>
      <div className="hide-aside" onClick={() => showAside()}>
        &#10148;
      </div>
      <aside id="aside">
        <a>&#10006;</a>
        <input
          type="text"
          placeholder="Name"
          onChange={(event) => setsearchName(event.target.value)}
          onKeyUp={() => showSearchName()}
        />
        <button onClick={() => showPokemon()}>Загрузить</button>
        <button onClick={() => sortID()}>Сортировать по id</button>
        <button onClick={() => sortName()}>Сортировать по имени</button>
        <button className="btn" onClick={() => hideContent_1()}>
          10
        </button>
        <button className="btn" onClick={() => hideContent_2()}>
          20
        </button>
        <button className="btn" onClick={() => hideContent_3()}>
          50
        </button>
      </aside>
      <div className="wrapper">
        <div>
          {selectPokemons.map((pokemonStats, index) => (
            <PokemonCards
              key={index}
              id={pokemonStats.id}
              image={pokemonStats.sprites.other.dream_world.front_default}
              name={pokemonStats.name}
              type={pokemonStats.types[0].type.name}
              func={() => showReceive(pokemonStats.id)}
            />
          ))}
        </div>
      </div>
      <div className="pokemonInfo">
        {receive.map((pokemon, index) => (
          <PokemonInfo
            key={index}
            id={pokemon.id}
            image={pokemon.sprites.other.dream_world.front_default}
            name={pokemon.name}
            type={pokemon.types[0].type.name}
            hp={pokemon.stats[0].base_stat}
            attack={pokemon.stats[1].base_stat}
            defence={pokemon.stats[2].base_stat}
            specialAttack={pokemon.stats[3].base_stat}
            specialDefence={pokemon.stats[4].base_stat}
            speed={pokemon.stats[5].base_stat}
            weight={pokemon.weight}
            height={pokemon.height}
            funcBack={() => back()}
          />
        ))}
      </div>
    </>
  );
}

export default App;
