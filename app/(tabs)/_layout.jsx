import { View, Image,Text } from 'react-native';
import React from 'react';
import { Tabs } from 'expo-router';
import { icons } from "../../constants";

const Tabslayout = () => {

  const TabIcon = ({ icon, color,name, focused }) => {
    return (
      <View className="flex items-center justify-center gap-2">
        <Image
          source={icon}
          resizeMode="contain"
          style={{ tintColor: color, width: 24, height: 24 }}
        />
         <Text
        className={`${focused ? "font-psemibold" : "font-pregular"} text-[10px] `}
        style={{ color: color }}
      >
        {name}
      </Text>
      </View>
    );
  };

  return (
    <Tabs
    screenOptions={{
      tabBarActiveTintColor: "#FFA001",
          tabBarInactiveTintColor: "#CDCDE0",
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: "#161622",
            borderTopWidth: 1,
            borderTopColor: "#232533",
            height: 70,
          },
        }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.home}
              name="Home"
              color={color}
              focused={focused}
            />
            
          ),
        }}
      />
      <Tabs.Screen
        name="create"
        options={{
          title: 'Create',
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.plus}
              name="Create"
              color={color}
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="bookmark"
        options={{
          title: 'Bookmark',
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.bookmark}
              name="Bookmark"
              color={color}
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.profile}
              name="Profile"
              color={color}
              focused={focused}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default Tabslayout;