export async function fetchCharacter(id) {
    const res = await fetch(`https://last-airbender-api.herokuapp.com/api/v1/characters/${id}`);
const { bender } = await res.json();
const { _id, name, afilliation, allies, photoUrl} = bender;
      return{ 
        id: _id,
        name: name,
        image: photoUrl,
        afilliation: afilliation,
        allies: allies
    };
}

export async function fetchCharacters() {
    const res = await fetch('https://last-airbender-api.herokuapp.com/api/v1/characters');
    const { bender } = await res.json();
    return bender.map(({_id, name, afilliation, allies, photoUrl}) => ({
        id: _id,
        name: name,
        image: photoUrl,
        afilliation: afilliation,
        allies: allies
    }));
}