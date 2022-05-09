import { useEffect, useState } from "react";
import { Link, useParams } from 'react-router-dom';
import CharacterCard from "../../components/Character/Card";
import { fetchBender, fetchCharacter } from "../../services/avatarApi";

export default function Detail(){
    const [bender, setBender] = useState({});
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        const getBender = async () => {
            const benderData = await fetchBender(id);
            setBender(benderData);
            setLoading(false);
        }
        getBender();
    }, [id]);

    return (
        <>
        <p>
            <Link to="/">Back to the Begining</Link>
        </p>
        {loading ? (
            <p>Loading Bender...</p>
        ) : (
            <h1>
                <CharacterCard name={`Bender: ${bender.name}`} />
            </h1>
        )}
        </>
    );
}