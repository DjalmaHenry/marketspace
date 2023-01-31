import { Platform } from "react-native";
import { useTheme } from "native-base";
import {
  createBottomTabNavigator,
  BottomTabNavigationProp,
} from "@react-navigation/bottom-tabs";

import HomeSvg from "@assets/home.svg";
import TagSvg from "@assets/tag.svg";
import ExitSvg from "@assets/exit.svg";

import { Home } from "@screens/Home";
import { MyAds } from "@screens/MyAds";
import { SignOut } from "@screens/SignOut";
import { ManageAd } from "@screens/ManageAd";
import { AdDetails } from "@screens/AdDetails";

type AppRoutes = {
  home: undefined;
  myAds: undefined;
  signOut: undefined;
  manageAd: undefined;
  adDetails: undefined;
};

export type AppNavigatorRoutesProps = BottomTabNavigationProp<AppRoutes>;

const { Navigator, Screen } = createBottomTabNavigator<AppRoutes>();

export function AppRoutes() {
  const { sizes, colors } = useTheme();

  const iconSize = sizes[8];

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: colors.white,
          borderTopWidth: 0,
          height: Platform.OS === "android" ? "auto" : 96,
          paddingBottom: sizes[10],
          paddingTop: sizes[6],
        },
      }}
    >
      <Screen
        name="home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <HomeSvg fill={color} width={iconSize} height={iconSize} />
          ),
        }}
      />

      <Screen
        name="myAds"
        component={MyAds}
        options={{
          tabBarIcon: ({ color }) => (
            <TagSvg fill={color} width={iconSize} height={iconSize} />
          ),
        }}
      />

      <Screen
        name="signOut"
        component={SignOut}
        options={{
          tabBarIcon: ({ color }) => (
            <ExitSvg fill={color} width={iconSize} height={iconSize} />
          ),
        }}
      />

      <Screen
        name="manageAd"
        component={ManageAd}
        options={{ tabBarButton: () => null }}
      />

      <Screen
        name="adDetails"
        component={AdDetails}
        options={{ tabBarButton: () => null }}
      />
    </Navigator>
  );
}
