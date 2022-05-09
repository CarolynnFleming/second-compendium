import { useEffect, useState } from "react";
import { Link, useParams } from 'react-router-dom';
import CharacterCard from "../../components/Character/Card";
import { fetchCharacter } from "../../services/avatarApi";

export default function Detail(){
    const [bender, setbender] = useState({});
    const [loading, setLoading] = useState(true);
    const { id } = useParams();
}