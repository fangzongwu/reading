import { StyleSheet } from "react-native";
export default StyleSheet.create({
	container: {
		flexDirection: "row", 
		flexWrap: "wrap", 
		justifyContent: "center"
	},
	textStyle: {
		margin: 15, 
		paddingTop: 8, 
		paddingBottom: 8, 
		paddingLeft: 15, 
		paddingRight: 15, 
		borderWidth: 0.5,
		borderRadius: 13,
	},
	onBlur: {
		color: "#20CFC9",
		borderWidth: 0.1,
		backgroundColor: "#fff",
	},
	Blur: {
		color: "#fff",
		borderWidth: 0.1,
		backgroundColor: "#20CFC9",
	}
})