export default function CharacterCard({name, photoUrl}) {
    
    return(
        <div>
            <p>{name}</p>
            <img alt="bender" src={photoUrl}/>
        </div>
    )
}