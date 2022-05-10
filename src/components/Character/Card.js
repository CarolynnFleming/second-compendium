export default function CharacterCard({name, photoUrl}) {
    
    return(
        <div>
            <p>{name}</p>
            <img src={photoUrl}/>
        </div>
    )
}