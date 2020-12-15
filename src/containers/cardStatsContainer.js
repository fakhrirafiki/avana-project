import React from 'react'
import { Gap, CardStats } from '../../components'
import { IcTransaksi, IcDone, IcBag, IcStatusPesanan1, IcStatusPesanan2, IcStatusPesanan3, IcNext, IcClose, IcRefresh, ILSad } from '../../assets'


export function SidebarContainersss() {
    return (
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
    )
}
