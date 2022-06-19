<template>
  <app-button
    :disabled="disabled"
    :loading="loading"
  >
  </app-button>

  <app-table
    :columns="columns"
    :dataSource="dataSource"
  >

    <template #header="{ nameColumn }">
      {{ nameColumn }}
    </template>
    
    <template #name="{ item }">
      <span v-if="item">{{ item.name }}</span>
    </template>

    <template #age="{ item }">
      <span v-if="item">{{ item.age }}</span>
    </template>

    <template #avatar="{ item }">
      <img v-if="item" :src="item.avatar">
    </template>
  
  </app-table>

</template>

<script>
import {ref, reactive} from 'vue'
import AppButton from './components/AppButton.vue'
import AppTable from './components/AppTable.vue'

export default {
  setup() {
    const disabled = ref(false)
    const loading = ref(false)
    const columns = reactive([
      {
        name: 'Имя',
        key: 'name',
        slot: 'name'
      },
      {
        name: 'Возраст',
        key: 'age'
      },
      {
        name: 'Аватар',
        key: 'avatar',
        slot: 'avatarImage'
      },
    ])
    const dataSource = reactive([
      {
        id: 1,
        name: 'John',
        age: 27,
        avatar: 'https://www.meme-arsenal.com/memes/43c9c30bdd5378c3555ce700cad6637f.jpg'
      },
       {
        id: 2,
        name: 'Peter',
        age: 30,
        avatar: 'https://www.meme-arsenal.com/memes/43c9c30bdd5378c3555ce700cad6637f.jpg'
      }
    ])

    return {
      disabled,
      loading,
      columns,
      dataSource
    }
  },
  components: {AppButton, AppTable}
}
</script>