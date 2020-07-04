import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import TabBarHome from '../../components/tabbarhome/TabBarHome';
const ArrivalScreen = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState();
  useEffect(() => {
    fetch('https://reactnative.dev/movies.json')
      .then((res) => res.json())
      .then((json) => setData(json.movies))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <View style={styles.container}>
      <TabBarHome />
      <ScrollView style={styles.container}>
        <View>
          {isLoading ? (
            <ActivityIndicator />
          ) : (
            <FlatList
              data={data}
              keyExtractor={({id}, index) => id}
              renderItem={({item}) => (
                <Text>
                  {item.title}, {item.releaseYear}
                </Text>
              )}
            />
          )}
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: 10,
    //position:'absolute'
  },
});

export default ArrivalScreen;
