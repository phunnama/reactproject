import { View, Text,ActivityIndicator,FlatList } from 'react-native'
import React,{useEffect,useState} from 'react'

const App = () => {

    const[isLoading,setLoading] = useState(true);
    const [data,setData] =useState([]);

    const getMoive = async() => {
      try{
        const reponse = await fetch('https://reactnative.dev/movies.json?fbclid=IwAR1TcpbE4RAcWjvRvdD8E4NJLfhbi9O5YJl-l3F9uqQY75OpbxJIo5hZSuI')
        const json = await reponse.json();
        setData(json.movies)
      }
      catch(error){
        alert(error.message);
      }
      finally{
        setLoading(false);
      }
    }

    useEffect(()=>{
      getMoive();

    },[])

    return (
    <View style={{flex:1,padding:20}}>
      { isLoading ? <ActivityIndicator/> : (
        <FlatList
        data = {data}
        keyExtractor = {({id},index)=>id} 
        renderItem={({item})=>(
          <Text>{item.title}, {item.releaseYear}</Text>

        )}

        />
      )

      }
    </View>
  );
}

export default App