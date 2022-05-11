import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CharacterCard from '../../components/Character/Card';
import Search from '../../components/Character/Search';
import { fetchBenders } from '../../services/avatarApi';

export default function List() {
    const [benders, setBenders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [progress, setProgress] = useState([]);
    const [amFinding, setAmFinding] = useState(false)
    const benderList = amFinding ? progress : benders;


const find = (search) => {
    setAmFinding(!!search.length);
    const filteredBenders = benders.filter((bender) => 
    bender.name.toLowerCase().includes(search.toLowerCase().trim())
    );
    setProgress(filteredBenders);
}

useEffect(() => {
    const getBenders = async () => {
        const benderData = await fetchBenders();
        setBenders(benderData);
        setLoading(false);
    };
    getBenders();
}, []);


  return (
    <>
    <h3>Benders From the Avatar!</h3>
    {loading ? (
        <p>Loading Benders...</p>
    ) : (
        <>
        <Search onSearch={find} />
        <ul>
            {benderList.map((bender) => {
                return (
                    <li key={bender.id}>
                        <Link to={`/characters/${bender.id}`}>
                            <CharacterCard name={bender.name} photoUrl={bender.photoUrl}/>
                        </Link>
                    </li>
                );
            })}
        </ul>
        </>
    )}
    {amFinding && !progress.length && <p>No Progress!</p>}
    </>
  );
}
