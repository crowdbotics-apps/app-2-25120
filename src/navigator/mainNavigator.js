import React from "react"
import { createDrawerNavigator } from "@react-navigation/drawer"
import { NavigationContainer } from "@react-navigation/native"

import SplashScreen from "../features/SplashScreen"
import SideMenu from "./sideMenu"
//@BlueprintImportInsertion
import Maps216329Navigator from '../features/Maps216329/navigator';
import Additem216328Navigator from '../features/Additem216328/navigator';
import Maps216324Navigator from '../features/Maps216324/navigator';
import UserProfile216320Navigator from '../features/UserProfile216320/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
  //@BlueprintNavigationInsertion
Maps216329: { screen: Maps216329Navigator },
Additem216328: { screen: Additem216328Navigator },
Maps216324: { screen: Maps216324Navigator },
UserProfile216320: { screen: UserProfile216320Navigator },

  /** new navigators can be added here */
  SplashScreen: {
    screen: SplashScreen
  }
}

const Drawer = createDrawerNavigator()

const AppContainer = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <SideMenu {...props} />}>
        {Object.keys(AppNavigator).map(s => (
          <Drawer.Screen name={s} component={AppNavigator[s].screen} />
        ))}
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default AppContainer
