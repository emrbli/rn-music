import { View, FlatList, SafeAreaView } from 'react-native';
import music_data from '@/data/sample.json';
import { SongCard } from '@/components/SongCard/SongCard';
import { NativeWindStyleSheet } from "nativewind";
import { SearchBar } from '@/components/SearchBar/SearchBar';
import { useState } from 'react';

NativeWindStyleSheet.setOutput({
  default: "native",
});

export default function App() {

  const [musicList, setMusicList] = useState(music_data);

  const renderSongs = ({ item }: any) => <SongCard {...item} />


  const seperatorComponent = () => <View className='w-full bg-gray-300 h-[1px] rounded-full'></View>

  const handleSearch = (val: string) => { 
     const filteredList = music_data.filter(song=> {
      const searchedText = val.toLocaleLowerCase()
      const currentTitle = song.title.toLocaleLowerCase()

      return currentTitle.indexOf(searchedText) > -1
     });

     setMusicList(filteredList)
   }

  return (
    <SafeAreaView className="flex-1 ">
      <View className="flex-1 ">
        <SearchBar onChangeText={(val) => handleSearch(val)} />
        <FlatList data={musicList} ItemSeparatorComponent={seperatorComponent} keyExtractor={(item, index) => index.toString()} renderItem={renderSongs} />
      </View>
    </SafeAreaView>
  );
}


