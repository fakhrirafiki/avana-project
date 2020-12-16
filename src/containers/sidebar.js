import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Sidebar, Gap } from '../components'
import { IcMenuActive, ImgLogo, IcPesanan, IcProducts, IcDown, IcUp, IcGlobe, IcSetting, IcPemasaran, IcModul, IcTanggapan, IcLogout, IcNext } from '../assets'


const MenuItem = ({ obj, name, image }) => {
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
    const stateHome = useSelector(state => state.Home.home)
    const dispatch = useDispatch()

    const dashboard = stateHome[0]
    const hq = stateHome[1]
    const agent = stateHome[2]
    const orders = stateHome[3]
    const products = stateHome[4]
    const webstore = stateHome[5]
    const settings = stateHome[6]
    const modules = stateHome[7]

    const [payload, setPayload] = useState({})

    return (
        <Sidebar>
            <Sidebar.ImageWrapper>
                <Sidebar.LogoImage src={ImgLogo} alt="imageLogo" />
            </Sidebar.ImageWrapper>
            <Gap height={20} />
            <Sidebar.WrapperContentSidebar>
                <Sidebar.WrapperButtonStatus>
                    <Sidebar.TextButtonStatus
                        onClick={() => {
                            setPayload({
                                "id": "coupon-code",
                                "isShowed": true,
                                "isAllowed": false,
                            })
                            console.log(payload)

                            dispatch({
                                type: 'SET_MODULE_LIST',
                                payload
                            })
                        }}>UPGRADE</Sidebar.TextButtonStatus>
                </Sidebar.WrapperButtonStatus>
                <Gap height={20} />
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
        </Sidebar >

    )
}
