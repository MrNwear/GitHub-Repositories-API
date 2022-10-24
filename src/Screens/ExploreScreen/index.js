import {View, Text, FlatList, ActivityIndicator} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Card, Icon} from '@rneui/base';
import {Image} from 'react-native';
import styles from './style';
import {getExploreData} from '../../redux/actions/repositoriesAction';

export default function ExploreScreen() {
  const [pageNumber, setPageNumber] = useState(1);
  const exploreData = useSelector(state => state.repos.exploreData);
  const dispatch = useDispatch();
  const handleLoadMore = () => {
    setPageNumber(pageNumber + 1);
  };
  function renderFooter() {
    return <ActivityIndicator />;
  }
  useEffect(() => {
    dispatch(getExploreData());
  });

  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <Text>{'nullddsd'}</Text>
      <FlatList
        data={exploreData}
        renderItem={item => renderItems(item)}
        keyExtractor={item => item.id}
        ListFooterComponent={renderFooter}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.5}
      />
    </View>
  );
}
const renderItems = item => {
  const posterURL = item.item.owner.avatar_url;
  return (
    <Card containerStyle={styles.container}>
      <View>
        <Image source={{uri: posterURL}} style={styles.posterStyle} />
        <View style={{flexDirection: 'row'}}>
          <Text>Trending Repository</Text>
          <Icon name="staro" color={'#45a333'} size={22} type={'AntDesign'} />
        </View>
        <View style={styles.movieDetailsWrapper}>
          <View style={styles.titleAndDateWrapper}>
            <Text style={styles.titleStyle}>{item.item.full_name}</Text>
            <Text>
              <Text style={styles.overviewHeadStyle}>Date : </Text>
              {item.item.release_date}
            </Text>
          </View>
          <Text>
            <Text style={styles.overviewHeadStyle}>Description : </Text>
            {item.item.overview}
          </Text>
        </View>
      </View>
    </Card>
  );
};
