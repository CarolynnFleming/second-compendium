import { useState } from "react";


export default function Search({ onSearch }) {
    const [finder, setfinder] = useState('');

    const change = (event) => {
        setfinder(event.target.value);
        onSearch(event.target.value);
    };

    
  return (
    <div>Search</div>
  )
}


