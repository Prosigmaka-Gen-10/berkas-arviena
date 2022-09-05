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
      <br />

      <label>
        E-mail :
        <input type="email" onChange={event => setEmail(event.target.value)}/>
      </label>

      {email}

      <br />
      <br />

      <label>
        Tanggal Lahir :
        <input type="date" onChange={event => setTanggal(event.target.value)}/>
      </label>

      {tanggal}

      <br/>
      <br/>

      Posisi Pembalap : <br/>
      <label>
        <input type="radio"
        value="MotoGP"
        name="kendaraan" 
        onChange={event => setKendaraan(event.target.value)}
        checked={kendaraan === 'MotoGP' ? true : false} />
        MotoGP
      </label>
      &nbsp;&nbsp;
      <label>
        <input type="radio"
        value="F1"
        name="kendaraan"
        onChange={event => setKendaraan(event.target.value)}
        checked={kendaraan === 'F1' ? true : false} />
        F1
      </label>



      
    </>
  );
}
