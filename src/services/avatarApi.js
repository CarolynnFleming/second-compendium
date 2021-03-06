export async function fetchBender(id) {
    const res = await fetch(`https://last-airbender-api.herokuapp.com/api/v1/characters/${id}`);
    const bender  = await res.json();
    const { _id, name, afilliation, allies, photoUrl} = bender;
      return{ 
        id: _id,
        name: name,
        photoUrl: photoUrl,
        afilliation: afilliation,
        allies: allies
    };
}

export async function fetchBenders() {
    const res = await fetch('https://last-airbender-api.herokuapp.com/api/v1/characters');
   
    const bender = await res.json();
    return bender.map((people) => ({
        id: people._id,
        name: people.name,
        photoUrl: people.photoUrl,
        afilliation: people.afilliation,
        allies: people.allies
    }));
}