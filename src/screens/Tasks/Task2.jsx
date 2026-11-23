import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

const Task1 = () => {
  const [users, setUsers] = useState([]);

  const data = async () => {
    try {
      const res = await axios.get(
        'https://jsonplaceholder.typicode.com/users'
      );

      return res.data;

    } catch (e) {
      console.log(e);
      return [];
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const result = await data();
      setUsers(result);
    };

    fetchData();
  }, []);

  return (
    <View className='m-5'>
        <Text className='font-bold mb-5'>Q - Fetch API Data Using useEffect()</Text>
      {users.map((item) => (
        <Text key={item.id}>{item.id} :    {item.name}</Text>
      ))}
    </View>
  );
};

export default Task1;