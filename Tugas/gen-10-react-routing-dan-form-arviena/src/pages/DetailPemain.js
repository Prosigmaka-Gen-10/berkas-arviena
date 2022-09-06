import { Link, useParams } from "react-router-dom";

export default function DetailPemain() {
  const params = useParams();

  return (
    <>
      <h2> Biodata Pemain </h2>

      <p>{params.namapemain}</p>

      <Link to="/">Back to Home</Link>
    </>
  );
}
