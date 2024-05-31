import React, { useCallback, useEffect, useState } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { Table, Row, Cell } from "react-native-table-component";
import * as SQLite from "expo-sqlite/legacy";
import { useFocusEffect } from "expo-router";

const EggsTable = () => {
  const tableHead = [
    "id",
    "Nombre de Poules",
    "Ouefs pondus (jour)",
    "Poids de l'oeuf (g)",
    "Oeufs Cassés",
  ];
  const widthArr = [50, 140, 140, 140, 140];

  const [db, setDb] = useState(SQLite.openDatabase("Farm.db"));
  const [names, setNames] = useState([""]);
  const [rearrangedArray, setRearrangedArray] = useState<
    string[][] | undefined
  >(undefined);

  const fetchData = useCallback(() => {
    db.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM Eggs_data",
        null,
        (txObj, resultSet) => setNames(resultSet.rows._array),
        (txObj, error) => console.log(error)
      );
    });
  }, []);

  useFocusEffect(
    useCallback(() => {
      fetchData();
    }, [fetchData])
  );

  useEffect(() => {
    const order = [3, 2, 5, 0, 8, 7, 9, 1, 6, 4];
    const rearrangedArray = names.map((dataObject) => {
      return Object.values(dataObject);
    });
    setRearrangedArray(rearrangedArray);
    console.log("Eggs", rearrangedArray);
  }, [names]);

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
              {rearrangedArray?.map((rowData, index) => (
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

export default EggsTable;