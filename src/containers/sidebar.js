import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Sidebar, Gap } from '../components'
import { IcMenuActive, ImgLogo, IcPesanan, IcProducts, IcDown, IcUp, IcGlobe, IcSetting, IcPemasaran, IcModul, IcTanggapan, IcLogout, IcNext } from '../assets'


const MenuItem = ({ obj, name, image, url }) => {
    const [toggleIconMenu, setToggleIconMenu] = useState(false)
    return (
        <>
            {obj.isShowed &&
                <Sidebar.WrapperItemMenu onClick={() => setToggleIconMenu(!toggleIconMenu)} isAllowed={obj.isAllowed}>

                    <Sidebar.IconMenuImage src={image} alt="imageIcon" />
                    <Gap width={10} />
                    <Sidebar.TextItemMenu isAllowed>{name}</Sidebar.TextItemMenu>

                    {obj.childs && <Sidebar.IconButtonArrow src={toggleIconMenu ? IcDown : IcUp} alt="imageIcon" />}

                </Sidebar.WrapperItemMenu>
            }
            {/* {if(!obj.childs) return} */}
            {
                obj.childs && toggleIconMenu &&
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
    return (
        <a href={`/${child.id}`} >

            <Sidebar.TextItemSubMenu isAllowed={child.isAllowed}
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
                                return <Sidebar.TextItemSubMenu isAllowed={grandChild.isAllowed} key={grandChild.id}>{grandChild.id}</Sidebar.TextItemSubMenu>
                            })
                        }
                    </Sidebar.WrapperItemSubSubmenu>
                }
            </Sidebar.TextItemSubMenu>
        </ a>)
}



export function SidebarContainer() {
    const stateHome = useSelector(state => ({ ...state.Home.home }))

    const dashboard = stateHome[0]
    const hq = stateHome[1]
    const agent = stateHome[2]
    const orders = stateHome[3]
    const products = stateHome[4]
    const webstore = stateHome[5]
    const settings = stateHome[6]
    const modules = stateHome[7]

    return (
        <Sidebar>
            <Sidebar.ImageWrapper>
                <a href={'/'}><Sidebar.LogoImage src={ImgLogo} alt="imageLogo" /></a>
            </Sidebar.ImageWrapper>
            <Gap height={20} />
            <Sidebar.WrapperContentSidebar>
                <Sidebar.WrapperButtonStatus>
                    <Sidebar.TextButtonStatus><a href={'/'}>UPGRADE</a></Sidebar.TextButtonStatus>
                </Sidebar.WrapperButtonStatus>
                <Gap height={20} />
                <Sidebar.WrapperItemMenu isAllowed>
                    <Sidebar.IconMenuImage src={IcSetting} alt="imageIcon" />
                    <Gap width={10} />
                    <Sidebar.TextItemMenu isAllowed><a href="all-module">MODULE SETTING</a></Sidebar.TextItemMenu>
                </Sidebar.WrapperItemMenu >
                <MenuItem obj={modules} name='MODULE SETTING' image={IcModul} />
                <MenuItem obj={dashboard} name='DASHBOARD' image={IcMenuActive} />
                <MenuItem obj={hq} name='HQ' image={IcGlobe} />
                <MenuItem obj={agent} name='AGENT' image={IcPemasaran} />
                <MenuItem obj={orders} name='ORDERS' image={IcPesanan} />
                <MenuItem obj={products} name='PRODUCTS' image={IcProducts} />
                <MenuItem obj={webstore} name='WEBSTORE' image={IcPemasaran} />
                <MenuItem obj={settings} name='SETTINGS' image={IcSetting} />

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
        </Sidebar >

    )
}
