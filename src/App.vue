<template>

  <ul>
    <li>
      Создать компонент кнопка, в который передается пропсом disabled, loading. Также этот компонент должен уметь рендерить переданный дефолтный слот, который по умолчанию рендерит текст “OK”
    </li>
    <li>
      Компонент таблица
      <ul>
        <li>Компонент принимает параметром columns - массив из объектов типа {name: ‘Название колонки’, key: ‘name’, slot: ‘nameSlot’}</li>
        <li>Компонент принимаем параметров dataSource - массив из объектов типа {name: ‘John’, age: 27, avatar: ‘https://www.meme-arsenal.com/memes/43c9c30bdd5378c3555ce700cad6637f.jpg’} </li>
        <li>Компонент рендерит наименование колонок</li>
        <li>Компонент рендерит данные, которые соответствуют ключам колонок</li>
        <li>Если в объекте колонки есть slot, то вместо данных из dataSource рендерим slot </li>
      </ul>
    </li>
  </ul>

  <app-button
    :disabled="disabled"
    :loading="loading"
  >
  </app-button>

  <app-table
    :columns="columns"
    :dataSource="dataSource"
  >
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

<style>

</style>
