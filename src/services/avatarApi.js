export async function fetchCharacter(id) {
    const res = await fetch(`https://last-airbender-api.herokuapp.com/api/v1/characters`);
const { _id, name, afilliation, allies, photoUrl} = await res.json();
    return {
        id: _id,
        name: name,
        image: photoUrl,
        afilliation: afilliation,
        allies: allies
    };
}