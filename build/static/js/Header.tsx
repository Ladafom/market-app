// import React from "react";
import { Switch, ConfigProvider } from "antd";
import Icon from '@ant-design/icons';
import { DarkIcon, LightIcon } from "../img/ThemeIcons";
import '../css/switch.scss'
import '../css/header.scss'
import {useDarkTheme} from '../zustand/zustandStore'

function Header(){

  const setDarkTheme = useDarkTheme((state)=> state.setDarkTheme)

  function switchTheme(){
    setDarkTheme()
  }

  return(
    <>
      <header className="header">
        <h1>
          Market
        </h1>
        <ConfigProvider
          theme={{
            components: {
              Switch: {
                handleSize:22,
                trackHeight:28,
                trackMinWidth:59,
                handleBg:'#fff',
                colorPrimary:'#C2C2C2',
                colorPrimaryHover: '#C2C2C2',
                colorTextQuaternary:'#17161C',
                colorTextTertiary:'#17161C',
              },
            },
          }}
        >
        <Switch checkedChildren={<Icon component={LightIcon}/>}
          unCheckedChildren={<Icon component={DarkIcon}/>}
          onChange={switchTheme}/>
        </ConfigProvider>
      </header>
      <div className="header-bottom-border"></div>
    </>
  )
}

export default Header