import {React,useState} from 'react';
import { View } from 'react-native';
import MainStyle from '../../global_style/MainStyle';
import {Text,PlatformPressable} from "@react-navigation/elements"
import { useLinkBuilder } from "@react-navigation/native"
import {Ionicons} from "@expo/vector-icons"
export default function BottomTabNav({ state,descriptors,navigation }) {

  const { buildHref  } = useLinkBuilder();
  const {id,setId} = useState(1);
  return (
    <View style={{ flexDirection: 'row' ,height:"7%"}}>
      {
        state.routes.map((route,index)=>{
          
          const{options} = descriptors[route.key];
          const label = route.name;

          const hasFocus = state.index === index;

          const onPress = ()=>{
            const event = navigation.emit({
              type:'tabPress',
              target:route.key,
              canPreventDefault:true
            });

            if(!hasFocus && !event.defaultPrevent){
              navigation.navigate(route.name,route.params);
            }
          }
          const onLongPress = ()=>{
            navigation.emit({
              type:"tabLongPress",
              target:route.key
            });
          }

          return(
            <PlatformPressable
              href={buildHref (route.name,route.params)}
              onPress={onPress}
              onLongPress={onLongPress}
              style={{flex:1, flexDirection:"column", alignItems:"center"}}
              key={()=>{
                setId(id++);
                return id-1;
              }}>
                <Ionicons name='home' size={30}/>
              <Text>{label}</Text>
            </PlatformPressable>
          )
          
        })
      }
    </View>
  );
};

