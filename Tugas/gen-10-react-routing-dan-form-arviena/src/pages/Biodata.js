import { useState } from "react";

export default function Biodata() {
  const [nama, setNama] = useState();
  const [email, setEmail] = useState();
  const [tanggal, setTanggal] = useState();
  const [kendaraan, setKendaraan] = useState();

  function handleInputNama(eventnya) {
    setNama(eventnya.target.value);
  }

  return (
    <>
      <label>
        Input Nama : <br />
        <input type="text" onChange={handleInputNama} value={nama}/>
      </label>

      {nama}

      <br/>
      <br 