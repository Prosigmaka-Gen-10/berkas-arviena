import React from "react";

const listBarang = [
    {
        nama: 'Hoodie',
        harga: 25000
    },
    {
        nama: 'Kaos',
        harga: 5000
    },
    {
        nama: 'Jumper',
        harga: 35000
    },
]

export default class LifeCycleClassTugas extends React.Component{
    constructor (){
        super()

        this.state = {
            products: [],
            carts: []
        }
    }

    componentDidMount () {
        this.setState({ products: listBarang })
    }

    componentDidUpdate (prevProps, prevState) {
        if (prevState.carts.length !== this.state.carts.length) {

            let totalan = 0;

            for (const keranjang of this.state.carts) {
                totalan = totalan + keranjang.harga
            }

            this.setState({ totalanHarga : totalan})
        }
    }

    tambahkanKeKeranjang (produkYangAkanDitambahkan) {
		const keranjangSekarang = [...this.state.carts]
		keranjangSekarang.push(produkYangAkanDitambahkan)
		this.setState({ carts: keranjangSekarang })
	}

    delKeranjang (produknya) {
        const keranjangNow = [...this.state.carts]
        const index = keranjangNow.indexOf(produknya)
        
        if (index !== -1) {
            keranjangNow.splice(index,1)
            this.setState({carts: keranjangNow})
        }
    }

    render () {
        return(
            <div>
                <p> Daftar Barang: </p>
                <ul>
                    {this.state.products.map((barang) => (
                        <li>
                            {barang.nama} |
                            Rp. {barang.harga} |
                            
                            <button onClick={()=> this.tambahkanKeKeranjang(barang)}>
                                Keranjang 
                            </button>
                        </li>
                    ))}
                </ul>

                <p> Keranjang </p>

                <ul>
                    {this.state.carts.map((carts) =>
                    <li>
                        {carts.nama} |
                        Rp. {carts.harga} |

                        <button onClick={() => this.delKeranjang(carts)}>
                            Delete
                        </button>
                    </li>
                    )}
                </ul>

                <p> Total: {this.state.totalanHarga}</p>
            </div>
        )
    }
}