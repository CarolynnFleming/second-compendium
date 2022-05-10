import { loadPartialConfig } from '@babel/core';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CharacterCard from '../../components/Character/Card';
import Search from '../../components/Character/Search';
import { fetchBenders } from '../../services/avatarApi';

export default function List() {
    const [beders, setBenders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [progress, setProgress] = useState([]);
    const [amFinding, setAmFinding] = useState(false)
    const benderList = amFinding ? progress : benders;

  return (
    <div>List</div>
  )
}
