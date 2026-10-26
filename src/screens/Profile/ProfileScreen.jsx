import { ScrollView } from 'react-native';
import UserBox from './UserBox';

function ProfileScreen() {
  return (
    <ScrollView className="flex-1 bg-gray-50">
      <UserBox />
    </ScrollView>
  );
}

export default ProfileScreen;
