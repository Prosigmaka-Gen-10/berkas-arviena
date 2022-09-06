import { useState } from "react";
import { Link } from "react-router-dom"

export default function Biodata() {
  const [nama, setNama] = useState();
  const [email, setEmail] = useState();
  const [tanggal, setTanggal] = useState();
  const [kendaraan, setKendaraan] = useState();

  function handleInputNama(eventnya) {
    setNama(eventnya.target.value);
  }

  function handleSubmit () {
    const payload ={
      playername : nama,
      birthdate : tanggal,
      contact : email,
      position : kendaraan,
    }

    console.log(payload)
  }

  return (
    <>
      <label>
        Input Nama : <br />
        <input type="text" onChange={handleInputNama} value={nama}/>
      </label>

      <br/>
      <br />

      <label>
        E-mail :
        <input type="email" onChange={event => setEmail(event.target.value)}/>
      </label>

      <br />
      <br />

      <label>
        Tanggal Lahir : <br/>
        <input type="date" onChange={event => setTanggal(event.target.value)}/>
      </label>

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

      <br/>
      <br/>

      <h4> Preview : </h4>
      <br />
      Nama : {nama}
      <br />
      Email : {email}
      <br />
      Tanggal Lahir : {tanggal}
      <br />
      Posisi Pembalap : {kendaraan}

      <br />
      <br />

      <button onClick={handleSubmit}>
        Submit
      </button>

      <br />

      <Link to="/player-list">
				Lihat List Pemain Disini
			</Link>

      
    </>
  );
}
