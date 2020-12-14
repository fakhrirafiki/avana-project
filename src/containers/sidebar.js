import React from 'react'
import { Sidebar, Gap } from '../components'
import { IcMenuActive, ImgLogo, IcPesanan, IcProducts, IcDown, IcUp, IcGlobe, IcSetting, IcPemasaran, IcModul, IcTanggapan, IcLogout } from '../assets'


export function SidebarContainer() {
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
                    {true &&
                        <Sidebar.WrapperItemMenu>
                            <Sidebar.IconMenuImage src={IcMenuActive} />
                            <Gap width={10} />
                            <Sidebar.TextItemMenu>Dashboard</Sidebar.TextItemMenu>
                        </Sidebar.WrapperItemMenu>
                    }
                    {true &&
                        <Sidebar.WrapperItemMenu>
                            <Sidebar.IconMenuImage src={IcPesanan} />
                            <Gap width={10} />
                            <Sidebar.TextItemMenu>Pesananku</Sidebar.TextItemMenu>
                        </Sidebar.WrapperItemMenu>
                    }

                </Sidebar.WrapperContentSidebar>
            </Sidebar>
        </div>
    )
}
