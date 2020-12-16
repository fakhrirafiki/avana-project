import React from 'react'
import './modules.scss'
import { Gap, Switches } from '../../components'
import ModulesTable from './modulesTable'
// import { IcTransaksi, IcDone, IcBag, IcStatusPesanan1, IcStatusPesanan2, IcStatusPesanan3, IcNext, IcClose, IcRefresh, ILSad } from '../../assets'


export default function Modules() {
    return (
        <div className="wrapper-modules">
            <p className="text-modules-title">All Modules</p>
            <Gap height={10} />
            <p className="text-modules-desc">Selamat datang di dashboard terbaru kami</p>
            <div className="wrapper-content">
                <div className="wrapper-item-content">
                    <p className="title-widget">Statistik Pesanan</p>
                    <Gap height={20} />
                    <ModulesTable />
                </div>
            </div>
        </div>
    )
}
