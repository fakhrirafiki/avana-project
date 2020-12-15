import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Sidebar, Gap } from '../components'
import { IcMenuActive, ImgLogo, IcPesanan, IcProducts, IcDown, IcUp, IcGlobe, IcSetting, IcPemasaran, IcModul, IcTanggapan, IcLogout, IcNext } from '../assets'


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
                    {obj.childs.map((child) => < SubMunuItem child={child} key={child.id} />)}
                </Sidebar.WrapperItemSubmenu>
            }
        </>
    )
}

const SubMunuItem = ({ child }) => {
    const [toggleSubSubMenu, setToggleSubSubMenu] = useState(false)

    if (!child.isShowed) return false
    return (<>
        <Sidebar.TextItemMenu isAllowed={child.isAllowed}
            onMouseEnter={() => setToggleSubSubMenu(!toggleSubSubMenu)}
            onMouseLeave={() => setToggleSubSubMenu(!toggleSubSubMenu)}
        >
            {child.id}
            {child.childs && <Sidebar.IconButtonArrow src={IcNext} alt="imageIcon" />}
            {child.childs && toggleSubSubMenu &&
                <Sidebar.WrapperItemSubSubmenu >
                    {
                        child.childs.map((grandChild) => {
                            if (!grandChild.isShowed) return false
                            return <Sidebar.TextItemMenu isAllowed={grandChild.isAllowed} key={grandChild.id}>{grandChild.id}</Sidebar.TextItemMenu>
                        })

                    }
                </Sidebar.WrapperItemSubSubmenu>
            }
        </Sidebar.TextItemMenu>
    </>)
}



export function SidebarContainer() {
    const stateGlobal = useSelector(state => state)

    const dashboard = stateGlobal.Home.home[0]
    const hq = stateGlobal.Home.home[1]
    const agent = stateGlobal.Home.home[2]
    const orders = stateGlobal.Home.home[3]
    const products = stateGlobal.Home.home[4]
    const webstore = stateGlobal.Home.home[5]
    const settings = stateGlobal.Home.home[6]
    const modules = stateGlobal.Home.home[7]

    return (
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

    )
}
