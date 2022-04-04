import { StyleSheet, Text, View } from 'react-native'

export default function MealDetails({duration,complexity,affordability}) {
  return (
    <View>
      <Text>MealDetails</Text>
      <View style={styles.details}>
              <Text style={styles.detailItem}>{duration}m</Text>
              <Text style={styles.detailItem}>{complexity.toUpperCase()}</Text>
              <Text style={styles.detailItem}>{affordability.toUpperCase()}</Text>
            </View>
    </View>
  )
}

const styles = StyleSheet.create({
    details: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        padding: 8,
      },
})