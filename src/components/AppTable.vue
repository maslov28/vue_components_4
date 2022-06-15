<template>
  <table>
    <tr>
      <th 
        v-for="column in columns" 
        :key="column.key" 
      >
        {{ column.name }}
      </th>
    </tr>
    <tr v-for="person in dataSource" :key="person.id">
      <td v-for="column in columns" :key="column.key">
        <img :src="person[column.key]" v-if="column.key === 'avatar'">
        <span v-else>{{person[column.key]}}</span>
      </td>
    </tr>
  </table>
</template>

<script>
export default {
  props: {
    columns: Array,
    dataSource: Array,
  }

}
</script>

<style>

</style>