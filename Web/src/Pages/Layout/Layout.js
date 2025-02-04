import React, { Component } from 'react'
import Routes from '../../Routes'
import { Sidebar as Sidebarcomponent, LoadingPage, Navbar } from '../../Components'
import { Icon, Menu, Segment, SidebarPushable, SidebarPusher, Sidebar, Label } from 'semantic-ui-react';
import UsernotificationSidebar from '../../Containers/Usernotifications/UsernotificationSidebar';
import { STORAGE_KEY_PATIENTCARE_ACCESSTOKEN, STORAGE_KEY_PATIENTCARE_LANGUAGE } from '../../Utils/Constants';
import VersionTracker from '../../Components/About/VersionTracker';
export default class Layout extends Component {

  constructor(props) {
    super(props)
    this.state = {
      visible: false
    }
  }

  componentDidMount() {
    window.addEventListener("focus", this.onFocus)
    window.addEventListener("blur", this.onBlur);
    const { GetActiveUser, GetUserRoles, GetTableMeta, GetUserMeta, Checktoken, GetUsagetypes, GetPPFiles } = this.props
    const routes = [
      "/Login",
      "/login",
      "/Register",
      "/register",
      "/Forget-password",
      "/Forgetpassword",
      "/forgetpassword",
      "/Passwordreset",
    ]

    const currentPath = window.location.pathname;

    if (!routes.some(route => currentPath.toLowerCase().startsWith(route.toLowerCase()))) {
      const token = localStorage.getItem(STORAGE_KEY_PATIENTCARE_ACCESSTOKEN)
      GetActiveUser()
      GetUserRoles()
      GetTableMeta()
      GetUsagetypes()
      GetUserMeta()
      GetPPFiles()
      Checktoken({
        token: token || ''
      })
    }
  }

  componentDidUpdate() {
    const { Profile, isMobile, handlemobile } = this.props
    this.handleLanguage()

    if (isMobile !== Profile.Ismobile) {
      handlemobile(isMobile)
    }
  }

  onFocus = () => {
    const { handleFocus } = this.props
    handleFocus(true)
  }

  onBlur = () => {
    const { handleFocus } = this.props
    handleFocus(false)
  }

  render() {

    const { Profile, Files, iconOnly, seticonOnly, history, logOut, isMobile, hideMobile, sethideMobile, handleViewmodal, Istokenchecking, Usagetypes, handleNotificationSidebar, fillnotification } = this.props

    return (
      Istokenchecking || Profile.isLogging || Profile.isFetching ?
        <LoadingPage />
        :
        <SidebarPushable className='!-m-2' as={Segment} style={{ overflow: 'hidden' }}>
          <UsernotificationSidebar />
          <SidebarPusher >
            <div className=' dark:bg-Contentbg overflow-hidden bg-white' >
              <Navbar
                iconOnly={isMobile ? true : iconOnly}
                seticonOnly={seticonOnly}
                Profile={Profile}
                logOut={logOut}
                isMobile={isMobile}
                Files={Files}
                Usagetypes={Usagetypes}
                sethideMobile={sethideMobile}
                hideMobile={hideMobile}
                handleViewmodal={handleViewmodal}
                fillnotification={fillnotification}
                history={history}
                handleNotificationSidebar={handleNotificationSidebar}
                setVisible={() => { this.setState({ visible: !this.state.visible }) }}
              />
              <div className='flex flex-row justify-start items-start '>
                <Sidebarcomponent
                  history={history}
                  iconOnly={isMobile ? true : iconOnly}
                  seticonOnly={seticonOnly}
                  Profile={Profile}
                  isMobile={isMobile}
                  hideMobile={hideMobile}
                />
                <div className={`mt-[58.61px]  w-full min-w-[0px] contentWrapper`}>
                  <div className='w-full '>
                    <Routes Profile={Profile} />
                  </div>
                </div>
              </div>
            </div>
            <VersionTracker
              Profile={Profile}
            />
          </SidebarPusher>
        </SidebarPushable>
    )
  }

  handleLanguage = () => {
    const { Profile } = this.props
    if (Profile && Profile.meta && Profile.meta.Language) {
      if (Profile?.i18n && (Profile?.i18n?.i18n?.language !== Profile.meta.Language)) {
        Profile?.i18n?.i18n?.changeLanguage(Profile.meta.Language || 'tr');
      }
      localStorage.setItem(STORAGE_KEY_PATIENTCARE_LANGUAGE, Profile.meta.Language)
    }
  }
}
