import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  ActivityIndicator,
  FlatList,
  View,
  Image,
} from 'react-native';
import HeaderHome from './components/Header';
import {styles} from './components/Style';
import Card from '../../components/card/Card';
const HomeScreen = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('https://picsum.photos/v2/list')
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => console.error(error))
      .finally(() => setLoading(false));
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <HeaderHome />
      {/* {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data}
          numColumns="2"
          keyExtractor={({id}, index) => id}
          renderItem={({item}) => (
            <Card
              title={item.author}
              name={item.id}
              sourceImage={{uri: item.download_url}}
            />
          )}
        />
      )} */}
    </SafeAreaView>
  );
};

export default HomeScreen;
