---
title: Vue.js Framework
emoji: 💚
order: 2
---

# Vue.js Framework

Vue.js is a progressive JavaScript framework for building user interfaces.

## Core Features

### Reactive Data Binding

Vue's reactivity system makes it easy to keep your UI in sync with your data:

```javascript title="Vue Instance with Reactive Data"
new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
})
```

### Single File Components

```vue title="Single File Component Example"
<template>
  <div class="example">
    <h1>{{ title }}</h1>
    <button @click="increment">Count: {{ count }}</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'Vue Component',
      count: 0
    }
  },
  methods: {
    increment() {
      this.count++
    }
  }
}
</script>

<style scoped>
.example {
  padding: 20px;
  background: #f0f0f0;
}
</style>
```

## Composition API

Vue 3 introduces the Composition API for better logic reuse:

```javascript title="Composition API with Reactive References"
import { ref, computed, onMounted } from 'vue'

export default {
  setup() {
    const count = ref(0)
    const double = computed(() => count.value * 2)
    
    function increment() {
      count.value++
    }
    
    onMounted(() => {
      console.log('Component mounted!')
    })
    
    return {
      count,
      double,
      increment
    }
  }
}
```

> ⚠️ **Warning:** Don't mix Options API and Composition API in the same component unless necessary.

## Vue Router

```javascript title="Vue Router Configuration"
const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/user/:id', component: User }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})
```