import React from 'react'
import './home.scss'
import { Gap } from '../../components'
import { IcTransaksi, IcDone, IcBag, IcStatusPesanan1, IcStatusPesanan2, IcStatusPesanan3, IcNext, IcClose, IcRefresh, ILSad } from '../../assets'

const Home = () => {
    return (
        <div className="wrapper-home">
            <p className="text-home-title">Dashboardmu</p>
            <Gap height={10}/>
            <p className="text-home-desc">Selamat datang di dashboard terbaru kami</p>
            <div className="wrapper-content">
                <div className="wrapper-item-content">
                    <p className="title-widget">Statistik Pesanan</p>
                    <Gap height={20} />
                    <div className="card">
                        <div className="wrapper-content-statistik">
                            <div className="item-content-statistik">
                                <img src={IcTransaksi} className="img-icon" alt="Icon Transaksi" />
                                <Gap height={10} />
                                <p className="text-value">0</p>
                                <Gap height={10} />
                                <p className="text-desc">Transaksi</p>
                            </div>
                            <div className="item-content-statistik item-center">
                                <img src={IcDone} className="img-icon" alt="Icon Transaksi" />
                                <Gap height={10} />
                                <p className="text-value">0</p>
                                <Gap height={10} />
                                <p className="text-desc">Sukses</p>
                            </div>
                            <div className="item-content-statistik">
                                <img src={IcBag} className="img-icon" alt="Icon Transaksi" />
                                <Gap height={10} />
                                <p className="text-value">0</p>
                                <Gap height={10} />
                                <p className="text-desc">Penjualan (IDR)</p>
                            </div>
                        </div>
                        <Gap height={165} />
                        <div className="wrapper-footer-statistik">
                            <p className="text-footer">6 December 2020</p>
                            <p className="text-footer">16 December 2020</p>
                            <p className="text-footer">26 December 2020</p>
                        </div>
                    </div>
                </div>
                <div className="wrapper-item-content">
                    <p className="title-widget">Status Pesanan</p>
                    <Gap height={20} />
                    <div className="wrapper-content-status-pesanan">
                        <div className="card">
                            <div className="wrapper-icon">
                                <img src={IcStatusPesanan1} className="image-icon" alt="icon" />
                            </div>
                            <Gap width={10} />
                            <div className="wrapper-text">
                                <p className="text-value">0 Pesanan</p>
                                <Gap height={5} />
                                <p className="desc-value">Belum Dibayar</p>
                            </div>
                            <img src={IcNext} className="image-icon-next" alt="icon" />
                        </div>
                        <div className="card">
                            <div className="wrapper-icon purple">
                                <img src={IcStatusPesanan2} className="image-icon" alt="icon" />
                            </div>
                            <Gap width={10} />
                            <div className="wrapper-text">
                                <p className="text-value">0 Pesanan</p>
                                <Gap height={5} />
                                <p className="desc-value">Telah Dibayar</p>
                            </div>
                            <img src={IcNext} className="image-icon-next" alt="icon" />
                        </div>
                        <div className="card">
                            <div className="wrapper-icon blue">
                                <img src={IcStatusPesanan3} className="image-icon" alt="icon" />
                            </div>
                            <Gap width={10} />
                            <div className="wrapper-text">
                                <p className="text-value">0 Pesanan</p>
                                <Gap height={5} />
                                <p className="desc-value">Telah Dikirim</p>
                            </div>
                            <img src={IcNext} className="image-icon-next" alt="icon" />
                        </div>
                        <div className="card">
                            <div className="wrapper-icon green">
                                <img src={IcDone} className="image-icon" alt="icon" />
                            </div>
                            <Gap width={10} />
                            <div className="wrapper-text">
                                <p className="text-value">0 Pesanan</p>
                                <Gap height={5} />
                                <p className="desc-value">Selesai</p>
                            </div>
                            <img src={IcNext} className="image-icon-next" alt="icon" />
                        </div>
                        <div className="card">
                            <div className="wrapper-icon red">
                                <img src={IcClose} className="image-icon" alt="icon" />
                            </div>
                            <Gap width={10} />
                            <div className="wrapper-text">
                                <p className="text-value">0 Pesanan</p>
                                <Gap height={5} />
                                <p className="desc-value">Dibatalkan</p>
                            </div>
                            <img src={IcNext} className="image-icon-next" alt="icon" />
                        </div>
                        <div className="card">
                            <div className="wrapper-icon red">
                                <img src={IcRefresh} className="image-icon" alt="icon" />
                            </div>
                            <Gap width={10} />
                            <div className="wrapper-text">
                                <p className="text-value">0 Pesanan</p>
                                <Gap height={5} />
                                <p className="desc-value">Dikembalikan</p>
                            </div>
                            <img src={IcNext} className="image-icon-next" alt="icon" />
                        </div>
                    </div>
                    
                </div>
                <div className="wrapper-item-content">
                    <p className="title-widget">Product Terlaris</p>
                    <Gap height={20} />
                    <div className="card notice">
                        <img src={ILSad} className="image-sad" alt="icon" />
                        <Gap height={10} />
                        <p className="text-desc">Tidak ada penjualan di periode ini.</p>
                    </div>
                </div>
                <div className="wrapper-item-content">
                    <p className="title-widget">Pemesanan Terbaru</p>
                    <Gap height={20} />
                    <div className="card notice">
                        <img src={ILSad} className="image-sad" alt="icon" />
                        <Gap height={10} />
                        <p className="text-desc">Belum ada pesanan saat ini.</p>
                        <Gap height={10} />
                        <div className="btn-pesanan">
                            <p className="textButton">Buat Pesanan</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
