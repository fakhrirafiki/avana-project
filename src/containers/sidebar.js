import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Sidebar, Gap } from '../components'
import { IcMenuActive, ImgLogo, IcPesanan, IcProducts, IcDown, IcUp, IcGlobe, IcSetting, IcPemasaran, IcModul, IcTanggapan, IcLogout } from '../assets'


const MenuItem = ({ obj, name, image }) => {
    const [toggleIconMenu, setToggleIconMenu] = useState(false)
    return (
        <>
            {
                obj.isShowed &&
                <Sidebar.WrapperItemMenu onClick={() => setToggleIconMenu(!toggleIconMenu)} isAllowed={obj.isAllowed}>
                    <Sidebar.IconMenuImage src={image} alt="imageIcon" />
                    <Gap width={10} />
                    <Sidebar.TextItemMenu isAllowed>{name}</Sidebar.TextItemMenu>

                    {obj.childs && <Sidebar.IconButtonArrow src={toggleIconMenu ? IcDown : IcUp} alt="imageIcon" />}
                </Sidebar.WrapperItemMenu>
            }
            {/* {if(!obj.childs) return} */}
            {obj.childs && toggleIconMenu &&
                <Sidebar.WrapperItemSubmenu>
                    {obj.childs.map((child) => {
                        if (!child.isShowed) return false
                        return <Sidebar.TextItemMenu key={child.id} isAllowed={child.isAllowed}>{child.id}</Sidebar.TextItemMenu>
                    })}
                </Sidebar.WrapperItemSubmenu>
            }
        </>
    )
}

const SubMunuItem = (child) => {
    const [toggleIconMenu, setToggleIconMenu] = useState(false)

    return <Sidebar.TextItemMenu className={`${!child.isAllowed && 'not-allowed'}`}>{child.id}</Sidebar.TextItemMenu>

}






export function SidebarContainer() {
    const stateGlobal = useSelector(state => state)
    const [showSubmenu, setShowSubmenuProduct] = useState(false)

    const dashboard = stateGlobal.Home.home[0]
    const hq = stateGlobal.Home.home[1]
    const agent = stateGlobal.Home.home[2]
    const orders = stateGlobal.Home.home[3]
    const products = stateGlobal.Home.home[4]
    const webstore = stateGlobal.Home.home[5]
    const settings = stateGlobal.Home.home[6]
    const modules = stateGlobal.Home.home[7]

    return (
        <div>
            <Sidebar>
                <Sidebar.ImageWrapper>
                    <Sidebar.LogoImage src={ImgLogo} alt="imageLogo" />
                </Sidebar.ImageWrapper>
                <Gap height={20} />
                <Sidebar.WrapperButtonStatus>
                    <Sidebar.TextButtonStatus>Admin</Sidebar.TextButtonStatus>
                </Sidebar.WrapperButtonStatus>
                <Gap height={20} />
                <Sidebar.WrapperContentSidebar>
                    <MenuItem obj={dashboard} name='Dashboard' image={IcMenuActive} />
                    <MenuItem obj={hq} name='HQ' image={IcGlobe} />
                    <MenuItem obj={agent} name='AGENT' image={IcPemasaran} />
                    <MenuItem obj={orders} name='ORDERS' image={IcPesanan} />
                    <MenuItem obj={products} name='PRODUCTS' image={IcProducts} />
                    <MenuItem obj={webstore} name='WEBSTORE' image={IcPemasaran} />
                    <MenuItem obj={settings} name='SETTINGS' image={IcSetting} />
                    <MenuItem obj={modules} name='MODULES' image={IcModul} />

                    <Gap height={40} />
                    <Sidebar.WrapperItemMenu isAllowed>
                        <Sidebar.IconMenuImage src={IcTanggapan} alt="imageIcon" />
                        <Gap width={10} />
                        <Sidebar.TextItemMenu isAllowed>Tanggapan</Sidebar.TextItemMenu>
                    </Sidebar.WrapperItemMenu >
                    <Gap height={40} />
                    <Sidebar.WrapperItemMenu isAllowed>
                        <Sidebar.IconMenuImage src={IcLogout} alt="imageIcon" />
                        <Gap width={10} />
                        <Sidebar.TextItemMenu isAllowed>Logout</Sidebar.TextItemMenu>
                    </Sidebar.WrapperItemMenu>
                </Sidebar.WrapperContentSidebar>
            </Sidebar>
        </div>
    )
}
