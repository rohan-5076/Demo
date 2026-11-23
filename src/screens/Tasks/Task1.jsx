import { useState } from "react";
import { Alert, Button, Text, View } from "react-native";

const Task1 = ()=>{

    const [count, setCount] = useState(0);
    return(
        <View className='m-4'>
        <Text>Q - Create a Counter Using useState() </Text>
        <View>
            <Text className="bg-gray-200 text-center py-4 rounded-xl my-5" >{count}</Text>
            <View className='flex-row justify-center gap-4'>

            <Button
            title="+"
            onPress={()=>setCount((count)=> count+1)}
            
            />
            <Button
            onPress={()=>setCount((count)=>count>0 ? count-1 : 0)}
            
            title="-"
            />
            <Button
            onPress={()=>setCount(0)}
            
            title="reset"
            />
            </View>
        </View>
        </View>
    )
}
export default Task1;