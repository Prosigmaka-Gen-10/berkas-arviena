import { Link } from "react-router-dom"

export default function PlayerList () {
    return <>
    <h2> Daftar Pemain : </h2>

    <ul>
        <li>
            Michael Schumacher |
            <Link to="/detail-pemain/michael"> Lihat Detail</Link>
        </li>
        <li>
            Valentino Rossi |
            <Link to="/detail-pemain/rossi"> Lihat Detail</Link>
        </li>
        <li>
            Marc Marquez |
            <Link to="/detail-pemain/marc"> Lihat Detail</Link>
        </li>
    </ul>


    </>
}