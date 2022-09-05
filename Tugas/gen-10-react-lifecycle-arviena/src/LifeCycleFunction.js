import { useEffect, useState } from "react";

const listBarang = [
  {
    nama: "Hoodie",
    harga: 25000,
  },
  {
    nama: "Kaos",
    harga: 5000,
  },
  {
    nama: "Jumper",
    harga: 35000,
  },
  {
    nama: "Blouse",
    harga : 15000,
  }
];

export default function LifeCycleFunction() {
  const [products, setProducts] = useState([]);
  const [carts, setCarts] = useState([]);
  const [totalPrice, setTotalPrice] = useState([]);

  function addItems(produknya) {
    const keranjangNow = [...carts];
    keranjangNow.push(produknya);
    setCarts(keranjangNow);
  }

  function delItems(indexnya) {
    const keranjangNow = [...carts];
    keranjangNow.splice(indexnya, 1);
    setCarts(keranjangNow);
  }

  function delAll(produknya){
    const keranjangNow = [...carts]
    keranjangNow.length = 0
    setCarts(keranjangNow)
  }

  useEffect(() => {
    setProducts(listBarang);
  }, []);

  useEffect(() => {
    let hitungTotalHarga = 0;

    for (const cart of carts) {
      hitungTotalHarga = hitungTotalHarga + cart.harga;
    }

    setTotalPrice(hitungTotalHarga);
  }, [carts]);

  return (
    <>
      <h4>Daftar Produk:</h4>
      <ul>
        {products.map((product, indexproduk) => (
          <li>
            {product.nama} | Rp. {product.harga}
            <button onClick={() => addItems(product)}>Keranjang</button>
          </li>
        ))}
      </ul>

      <h4>Daftar Keranjang:</h4>
      <ul>
        {carts.map((cart, cartindex) =>
        <li>
            {cart.nama} |
            Rp. {cart.harga}

            <button onClick={() => delItems(cartindex)}>
                Hapus
            </button>
        </li>
        )}
      </ul>

      <button onClick={() => delAll(carts)}>
        Hapus Semuanya
      </button>

      <p>Total Harga : {totalPrice}</p>
    </>
  );
}
