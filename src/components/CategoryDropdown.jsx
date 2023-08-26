import React,{ useState, useEffect } from 'react'
import axios from '../api/axios';

function CategoryDropdown() {
  const [ listKategori, setlistKategori ] = useState([]);
  useEffect(() => {
    axios
      .get(`/categories/`)
      .then((res) => {
        setlistKategori([...res.data.data]);
      })
      .catch((err) => {
        console.log(err);
        setlistKategori([]);
      });
  }, []);

  return (
    listKategori.map((kategori) => (
      <option key={kategori.category_id} value={kategori.name}>
        {kategori.name}
      </option>
    ))
  )
}

export default CategoryDropdown