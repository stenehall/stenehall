const randomPokemonId = Math.floor(Math.random() * Math.floor(150)) + 1
const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomPokemonId}`)
const pokemon = await res.json()
const name = pokemon.name
const imgSrc = pokemon.sprites.front_default


const template = `<p align="center">
    <img src="${imgSrc}" width="150" height="150">
</p>
<h3 align="center">You have been greeted by - <b>${name}</b></h3>
<h3 align="center">Have a nice day!</h3>
### Hi there 👋
<!--
**stenehall/stenehall** is a ✨ _special_ ✨ repository because its \`README.md\` (this file) appears on your GitHub profile.
Here are some ideas to get you started:
- 🔭 I’m currently working on ...
- 🌱 I’m currently learning ...
- 👯 I’m looking to collaborate on ...
- 🤔 I’m looking for help with ...
- 💬 Ask me about ...
- 📫 How to reach me: ...
- 😄 Pronouns: ...
- ⚡ Fun fact: ...
-->`



const write = Deno.writeTextFile("./README.md", template);

