import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { Table, Row } from "react-native-table-component";

const ExampleThree = () => {
  const tableHead = [
    "Date Dentree en Poutre",
    "Nombre Poules/Poussins",
    "Quantite Daliment Consomme (Par Jour)",
    "Quantite Daliment Consomme (Par Semaine)",
    "Quantite Deau Consomme ",
    "Poids Poules/Poussins",
    "Nombre De mortalite (Par Jour)",
    "N = Destant ",
    "Taut De Mortalite (%)",
  ];
  const widthArr = [160, 160, 200, 200, 140, 140, 160, 100, 160];

  const tableData = [];
  for (let i = 0; i < 10; i += 1) {
    const rowData = [];
    for (let j = 0; j < 9; j += 1) {
      rowData.push(`${i}${j}`);
    }
    tableData.push(rowData);
  }

  return (
    <View style={styles.container}>
      <ScrollView horizontal={true}>
        <View>
          <Table borderStyle={{ borderWidth: 1, borderColor: "#C1C0B9" }}>
            <Row
              data={tableHead}
              widthArr={widthArr}
              style={styles.header}
              textStyle={{ ...styles.text, color: "white" }}
            />
          </Table>
          <ScrollView style={styles.dataWrapper}>
            <Table borderStyle={{ borderWidth: 1, borderColor: "#C1C0B9" }}>
              {tableData.map((rowData, index) => (
                <Row
                  key={index}
                  data={rowData}
                  widthArr={widthArr}
                  style={index % 2 ? styles.evenrow : styles.oddrow}
                  textStyle={styles.text}
                />
              ))}
            </Table>
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: "#fff" },
  header: { height: 50, backgroundColor: "#537791" },
  text: { textAlign: "center", fontWeight: "bold" },
  dataWrapper: { marginTop: -1 },
  evenrow: { height: 40, backgroundColor: "#E7E6E1" },
  oddrow: { height: 40, backgroundColor: "#F7F6E7" },
});

export default ExampleThree;
