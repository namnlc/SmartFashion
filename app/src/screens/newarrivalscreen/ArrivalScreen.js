import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  ActivityIndicatorBase,
} from 'react-native';

const ArrivalScreen = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState();

  useEffect(() => {
    fetch('https://reactnative.dev/movies.json')
      .then(res => res.json())
      .then(json => setData(json.movies))
      .catch(error => console.log(error))
      .finally(() => setLoading(false));
  }, []);

  return (
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
  );
};

export default ArrivalScreen;
