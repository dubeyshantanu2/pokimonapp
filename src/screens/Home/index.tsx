import {Text, SafeAreaView, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import Styles from './style';
import PokemonCard from '../../components/PokemonCard';
import AddButton from '../../components/AddButton';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../navigation/AppNavigation';
type DetailScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Home'
>;
type Props = {
  navigation: DetailScreenNavigationProp;
};

const HomeScreen = ({navigation}: Props) => {
  const [pokemonData, setPokemonData] = useState<
    {name: string; url: string; sprites: string}[]
  >([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    const fetchPokemons = async () => {
      const firstGenPokemonIdsResponse = await fetch(
        'https://pokeapi.co/api/v2/pokemon?limit=10'
      );
      const firstGenPokemonIdsBody = await firstGenPokemonIdsResponse.json();

      const pokemonDetails = await Promise.all(
        firstGenPokemonIdsBody.results.map(async (p: {url: RequestInfo}) => {
          const pDetails = await fetch(p.url);

          return await pDetails.json();
        })
      );
      setPokemonData(pokemonDetails);
      setTimeout(() => {
        setLoading(false);
      }, 1500);
    };

    fetchPokemons();
  }, []);

  const navigateToDetail = React.useCallback(() => {
    navigation.navigate('Detail', {name: 'Detail'});
  }, [navigation]);

  return (
    <SafeAreaView style={Styles.container}>
      <Text style={Styles.headerText}>Pokedex</Text>
      <AddButton label="Add" onPress={navigateToDetail} />
      {loading ? (
        <Text style={Styles.headerText}>Loading...</Text>
      ) : (
        <FlatList
          data={pokemonData}
          // ItemSeparatorComponent={() => <View style={Styles.separator} />}
          renderItem={({item}) => (
            <PokemonCard
              name={item.name}
              url={item.sprites.front_default}
              onPress={navigateToDetail}
            />
          )}
          keyExtractor={item => item.name}
          showsVerticalScrollIndicator={false}
        />
      )}
    </SafeAreaView>
  );
};

export default HomeScreen;
