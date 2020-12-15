import React from 'react'
import './home.scss'
import { Gap, Wrapper, CardStats } from '../../components'
import { SidebarContainer } from '../../containers/sidebar';
import { IcTransaksi, IcDone, IcBag, IcStatusPesanan1, IcStatusPesanan2, IcStatusPesanan3, IcNext, IcClose, IcRefresh, ILSad } from '../../assets'

const Home = () => {
    return (
        <Wrapper className="wrapper-home">
            <SidebarContainer />
            <Wrapper.TextHomeTitle className="text-home-title">Dashboardmu</Wrapper.TextHomeTitle>
            <Gap height={10} />
            <Wrapper.TextHomeDesc className="text-home-desc">Selamat datang di dashboard terbaru kami</Wrapper.TextHomeDesc>
            <Wrapper.WrapperContent className="wrapper-content">
                <Wrapper.WrapperItemContent className="wrapper-item-content">
                    <Wrapper.TitleWidget className="title-widget">Statistik Pesanan</Wrapper.TitleWidget>
                    <Gap height={20} />

                    <CardStats className="card">
                        <CardStats.WrapperContent className="wrapper-content-statistik">
                            <CardStats.ItemContent className="item-content-statistik">
                                <CardStats.ImgIcon src={IcTransaksi} className="img-icon" alt="Icon Transaksi" />
                                <Gap height={10} />
                                <CardStats.TextValue className="text-value">0</CardStats.TextValue>
                                <Gap height={10} />
                                <CardStats.TextDesc className="text-desc">Transaksi</CardStats.TextDesc>
                            </CardStats.ItemContent>
                            <CardStats.ItemContent className="item-content-statistik item-center">
                                <CardStats.ImgIcon src={IcDone} className="img-icon" alt="Icon Transaksi" />
                                <Gap height={10} />
                                <CardStats.TextValue className="text-value">0</CardStats.TextValue>
                                <Gap height={10} />
                                <CardStats.TextDesc className="text-desc">Sukses</CardStats.TextDesc>
                            </CardStats.ItemContent>
                            <CardStats.ItemContent className="item-content-statistik">
                                <CardStats.ImgIcon src={IcBag} className="img-icon" alt="Icon Transaksi" />
                                <Gap height={10} />
                                <CardStats.TextValue className="text-value">0</CardStats.TextValue>
                                <Gap height={10} />
                                <CardStats.TextDesc className="text-desc">Penjualan (IDR)</CardStats.TextDesc>
                            </CardStats.ItemContent>
                        </CardStats.WrapperContent>
                        <Gap height={165} />
                        <CardStats.WrapperFooter className="wrapper-footer-statistik">
                            <CardStats.TextFooter className="text-footer">6 December 2020</CardStats.TextFooter>
                            <CardStats.TextFooter className="text-footer">16 December 2020</CardStats.TextFooter>
                            <CardStats.TextFooter className="text-footer">26 December 2020</CardStats.TextFooter>
                        </CardStats.WrapperFooter>
                    </CardStats >

                </Wrapper.WrapperItemContent>
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
            </Wrapper.WrapperContent>
        </Wrapper >
    )
}

export default Home



