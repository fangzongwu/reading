import React, {Component} from "react";
import {Text} from 'react-native';
import {StackNavigator, TabNavigator, } from "react-navigation";
import MainContainer from "./containers/MainContainer";
import CategoryContainer from "./containers/CategoryContainer";
import Feedback from "./containers/Feedback";
import About from "./containers/About";
import Icon from "react-native-vector-icons/FontAwesome";

const TabNavigators = TabNavigator({
	Main: {screen: MainContainer, navigationOptions: { title: "首页", tabBarIcon: () => (
			<Icon  
				name="home" 
				size={20}   
				color="#20CFC9"  
			/>
		)}},
	Category: {screen: CategoryContainer, navigationOptions: { title: "分类", tabBarIcon: () => (
			<Icon  
				name="cog" 
				size={20}   
				color="#20CFC9"  
			/>
		),headerRight: 
			<Icon.Button  
				name="pencil" 
				backgroundColor="transparent"
				underlayColor="transparent"
				activeOpacity={0.8}
				style={{marginRight: 10}}
				onPress={() => {
					alert(1);
				}}  
			/>
}},
	Feedback: {screen: Feedback, navigationOptions: { title: "幽默", tabBarIcon: () => (
			<Icon  
				name="picture-o" 
				size={20}   
				color="#20CFC9"  
			/>
		)}},
	About: {screen: About, navigationOptions: { title: "关于", tabBarIcon: () => (
			<Icon  
				name="user" 
				size={20}   
				color="#20CFC9"  
			/>
		)}},
},{
	tabBarPosition: 'bottom',
	swipeEnabled: false,
	tabBarOptions: {
		activeTintColor: '#20CFC9',
		inactiveTintColor: '#20CFC9',
		showIcon: true, //针对Android
		indicatorStyle: {//针对Android
			height: 0,
		},
		labelStyle: {
			fontSize: 13,
		},
		style: {
			backgroundColor: "#fff",
		},
		iconStyle: {
			// color: "#fff",
		}
	},
})

export default StackNavigator({
	//首屏幕;
	Home: {
		screen: TabNavigators,
		navigationOptions: {
			headerStyle: {backgroundColor: "#20CFC9"},
			headerTintColor: "#fff",
		}
	},
}, {
	headerMode: "screen",
})