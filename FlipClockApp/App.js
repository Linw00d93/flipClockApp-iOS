import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import FlipClock from 'react-native-flip-clock';

const App = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.container}>
      <FlipClock
        size={120}
        time={currentTime}
        backgroundColor="#222"
        digitBackgroundColor="#222"
        digitTextColor="#fff"
        separatorColor="#fff"
      />
      <Text 
style={styles.timeText}>{currentTime.toLocaleTimeString()}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#222',
  },
  timeText: {
    fontSize: 40,
    color: '#fff',
    marginTop: 20,
  },
});

export default App;

