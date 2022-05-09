export default function CharacterCard({ name, allies, photoUrl, affiliation }) {
    return(
        <div>
            <p>{name}</p>
            <img alt="The bender" src={photoUrl}/>
            <p>{allies}</p>
            <p>{affiliation}</p>
        </div>
    )
}