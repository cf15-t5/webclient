import React, { useState, useEffect } from "react";
import axios from "../api/axios";

function CategoryDropdown({ isHomepage = false }) {
  const [listKategori, setlistKategori] = useState([]);
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

  return listKategori.map((kategori) => (
    <option
      key={kategori.category_id}
      value={isHomepage ? kategori.name : kategori.category_id}
    >
      {kategori.name}
    </option>
  ));
}

export default CategoryDropdown;
