import React from 'react';
import { Text, View } from 'react-native';

const App = () => {
  return (
    // 1. View cha: Chiếm toàn bộ màn hình và căn giữa các con của nó
    <View style={{ 
      flex: 1, 
      justifyContent: 'center', 
      alignItems: 'center' 
    }}>

      {/* 2. Hình vuông */}
      <View style={{ 
        width: 100, 
        height: 100, 
        backgroundColor: 'skyblue',
        // (Tuỳ chọn) Căn dòng chữ "Hello world" vào giữa hình vuông luôn
        justifyContent: 'center',
        alignItems: 'center' 
      }}>
        <Text>Hello, world</Text>
      </View>

    </View>
  );
};

export default App;