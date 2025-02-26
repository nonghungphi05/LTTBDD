import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const expenses = [
  { id: '1', name: 'Groceries', amount: '50' },
  { id: '2', name: 'Rent', amount: '500' },
  { id: '3', name: 'Utilities', amount: '100' },
];

function ExpenseListScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Expense List</Text>
      <FlatList
        data={expenses}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.name}: ${item.amount}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
});

export default ExpenseListScreen;