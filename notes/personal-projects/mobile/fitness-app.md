---
title: Fitness Tracker App
emoji: 💪
order: 1
---

# Fitness Tracker App

Mobile application for tracking workouts, nutrition, and fitness progress.

## Tech Stack

### Frontend
- **Framework**: React Native
- **State Management**: Redux Toolkit
- **Navigation**: React Navigation v6
- **UI Components**: React Native Elements
- **Charts**: Victory Native

### Backend
- **API**: Node.js with Express
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: JWT with refresh tokens
- **File Storage**: AWS S3 for images

## Core Features

### User Authentication
```javascript
// Auth Context
import { createContext, useContext, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const signIn = async (email, password) => {
    try {
      const response = await api.post('/auth/login', { email, password });
      const { user, tokens } = response.data;
      
      await AsyncStorage.setItem('accessToken', tokens.access);
      await AsyncStorage.setItem('refreshToken', tokens.refresh);
      
      setUser(user);
      return { success: true };
    } catch (error) {
      return { success: false, error: error.message };
    }
  };

  const signOut = async () => {
    await AsyncStorage.multiRemove(['accessToken', 'refreshToken']);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, signIn, signOut, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
```

### Workout Tracking
```javascript
// Workout Model
const WorkoutSchema = {
  id: 'string',
  userId: 'string',
  name: 'string',
  date: 'date',
  duration: 'number', // minutes
  exercises: [
    {
      name: 'string',
      sets: [
        {
          reps: 'number',
          weight: 'number',
          restTime: 'number'
        }
      ]
    }
  ],
  notes: 'string',
  createdAt: 'date',
  updatedAt: 'date'
};

// Workout Timer Component
const WorkoutTimer = () => {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds + 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  const formatTime = (totalSeconds) => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const secs = totalSeconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes
      .toString()
      .padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <View style={styles.timerContainer}>
      <Text style={styles.timerText}>{formatTime(seconds)}</Text>
      <TouchableOpacity
        style={[styles.button, isActive ? styles.pauseButton : styles.startButton]}
        onPress={() => setIsActive(!isActive)}
      >
        <Text style={styles.buttonText}>{isActive ? 'Pause' : 'Start'}</Text>
      </TouchableOpacity>
    </View>
  );
};
```

## Data Visualization

### Progress Charts
```javascript
import { VictoryChart, VictoryLine, VictoryAxis } from 'victory-native';

const ProgressChart = ({ data, metric }) => {
  return (
    <VictoryChart
      padding={{ left: 80, right: 40, top: 20, bottom: 60 }}
      height={250}
    >
      <VictoryAxis
        dependentAxis
        label={metric}
        style={{
          axisLabel: { fontSize: 16, padding: 35 },
          tickLabels: { fontSize: 14 }
        }}
      />
      <VictoryAxis
        label="Date"
        style={{
          axisLabel: { fontSize: 16, padding: 35 },
          tickLabels: { fontSize: 14, angle: -45 }
        }}
      />
      <VictoryLine
        data={data}
        x="date"
        y="value"
        style={{
          data: { stroke: "#3182CE", strokeWidth: 3 }
        }}
        animate={{
          duration: 1000,
          onLoad: { duration: 500 }
        }}
      />
    </VictoryChart>
  );
};
```

> ⚠️ **Warning:** Always validate user input for workout data to prevent incorrect calculations!

## Offline Functionality

```javascript
// Offline sync manager
import NetInfo from '@react-native-community/netinfo';

class OfflineManager {
  constructor() {
    this.pendingSync = [];
    this.isOnline = true;
    
    NetInfo.addEventListener(this.handleConnectivityChange);
  }

  handleConnectivityChange = (state) => {
    this.isOnline = state.isConnected;
    if (this.isOnline && this.pendingSync.length > 0) {
      this.syncPendingData();
    }
  };

  async saveWorkoutOffline(workout) {
    const offlineWorkouts = await AsyncStorage.getItem('offlineWorkouts');
    const workouts = offlineWorkouts ? JSON.parse(offlineWorkouts) : [];
    workouts.push({ ...workout, synced: false });
    await AsyncStorage.setItem('offlineWorkouts', JSON.stringify(workouts));
    
    if (this.isOnline) {
      this.syncPendingData();
    }
  }

  async syncPendingData() {
    const offlineWorkouts = await AsyncStorage.getItem('offlineWorkouts');
    if (!offlineWorkouts) return;
    
    const workouts = JSON.parse(offlineWorkouts);
    const unsynced = workouts.filter(w => !w.synced);
    
    for (const workout of unsynced) {
      try {
        await api.post('/workouts', workout);
        workout.synced = true;
      } catch (error) {
        console.error('Sync failed:', error);
      }
    }
    
    await AsyncStorage.setItem('offlineWorkouts', JSON.stringify(workouts));
  }
}
```

## Push Notifications

- [ ] Workout reminders
- [ ] Achievement notifications
- [ ] Friend activity updates
- [ ] Weekly progress summaries