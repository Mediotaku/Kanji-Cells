import React, { useCallback, useState } from "react";
import { StyleSheet, Text, View, TextInput, FlatList } from "react-native";
import { openDatabaseFromFile } from ".src/utils/db.js";

var db = await openDatabaseFromFile("./JMDict.db");

const SearchBar = () => {
  const [searchedList, setSearchedList] = useState([]);

  const onSearchChange = useCallback(
    (text) => {
      console.log(results);
      setSearchedList(["jajja"]);
    },
    [searchedList, setSearchedList]
  );

  return (
    <View>
      <TextInput onChangeText={onSearchChange} style={styles.input} />
      <FlatList
        data={searchedList}
        renderItem={({ item }) => (
          <View>
            <Text>{item.kanji}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default SearchBar;
