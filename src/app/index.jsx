import { StyleSheet, Text, View } from "react-native";
import { Boton } from "taskflow-ui";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text>Edit src/app/index.tsx to edit this screen.</Text>
      <Boton
        titulo="Guardar"
        variante="peligro"
        onPress={() => console.log("hola")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
