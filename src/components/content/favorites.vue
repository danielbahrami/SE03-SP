<template>
  <div class="favorites">
    <h1 class="header">Favorites</h1>
    <table class="table">
      <tr>
        <th>Name</th>
        <th>Artist</th>
        <th>Album</th>
      </tr>
      <tr>
        <td>My Universe</td>
        <td>Coldplay</td>
        <td>Music of Spheres</td>
      </tr>
      <tr>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td></td>
        <td></td>
        <td></td>
      </tr>
    </table>
  </div>
</template>

<script>

export default {
  name: "favorites"
}

</script>

<style scoped>

.favorites {
  margin-left: 10em;
}

th {
  border: 2px solid #FFFFFF;
}

td {
  border: 2px solid #FFFFFF;
}

.header {
  color: #D6CD81;
}

.table {
  color: #FFFFFF;
  text-align: left;
  width: 100%;
}

</style>