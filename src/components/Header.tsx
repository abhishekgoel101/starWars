import {Pressable, StyleSheet, Text, View} from 'react-native';
import {ListSeprator} from './ListSeprator';
import {useNavigation} from '@react-navigation/native';

const Header = ({title, canGoBack}: {title: string; canGoBack?: boolean}) => {
  const navigation = useNavigation();

  const goBack = () => {
    if (navigation.canGoBack()) {
      navigation.goBack();
    }
  };

  return (
    <View style={styles.header}>
      {canGoBack && (
        <Pressable style={{marginLeft: 16}} onPress={goBack}>
          <Text style={{color: 'blue', fontSize: 16, fontWeight: '700'}}>
            {'<Back'}
          </Text>
        </Pressable>
      )}
      <Text style={[styles.title, canGoBack && styles.centerTitle]}>
        {title}
      </Text>
      <ListSeprator />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    height: 50,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: 'black',
    flexGrow: 1,
    textAlign: 'center',
  },
  centerTitle: {
    marginRight: 44,
  },
});
