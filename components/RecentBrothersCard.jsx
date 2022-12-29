import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const styles = StyleSheet.create({
	activeBrothersContainer: {
		backgroundColor: "#ececec",
		borderRadius: 10,
		overflow: "hidden",
		height: 270,
	},
});
export default function RecentBrothersCard() {
	return (
		<View style={{ shadowColor: "black", shadowRadius: 5, shadowOpacity: 0.4 }}>
			<View style={styles.activeBrothersContainer}>
				<View>
					<Image
						source={{
							uri: "https://images.unsplash.com/photo-1625019030820-e4ed970a6c95?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
						}}
						style={{ height: 175, width: 182 }}
					/>
				</View>
				<View style={{ paddingTop: 10, width: 175 }}>
					<Text
						style={{ paddingBottom: 2, marginLeft: "2%", fontWeight: "bold" }}
					>
						Bro. Marcus Brown
					</Text>
					<Text
						style={{
							paddingTop: 2,
							marginLeft: "2%",
							fontWeight: "600",
							fontSize: 10,
						}}
					>
						UI/UX Engineer @ Meta
					</Text>
					<Text
						style={{
							paddingTop: 5,
							marginLeft: "2%",
							fontWeight: "300",
							fontSize: 8,
						}}
					>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
						dolor sit amet, consectetur adipiscing elit.
					</Text>
				</View>
			</View>
		</View>
	);
}
