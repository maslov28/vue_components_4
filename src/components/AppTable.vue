<template>
  <table>
    <tr>
      <th 
        v-for="column in columns" 
        :key="column.key" 
      >
        <slot :nameColumn="column.name" name="header"></slot>
      </th>
    </tr>
    <tr v-for="person in dataSource" :key="person.id">
      <td v-for="column in columns" :key="column.key">
        <slot :name="column.key" :item="person[column.key]">
          {{ column.slot }}
        </slot>
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