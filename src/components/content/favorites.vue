<template>
  <div class="favorites">
    <h1 class="header">Favorites</h1>
    <table class="tg">
      <thead>
        <tr>
          <th class="tg-tizx">Name</th>
          <th class="tg-tizx">Artist</th>
          <th class="tg-tizx">Album</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="tg-tizx"></td>
          <td class="tg-tizx"></td>
          <td class="tg-tizx"></td>
        </tr>
        <tr>
          <td class="tg-tizx"></td>
          <td class="tg-tizx"></td>
          <td class="tg-tizx"></td>
        </tr>
        <tr>
          <td class="tg-tizx"></td>
          <td class="tg-tizx"></td>
          <td class="tg-tizx"></td>
        </tr>
        <tr>
          <td class="tg-tizx"></td>
          <td class="tg-tizx"></td>
          <td class="tg-tizx"></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "favorites",
};
</script>

<style scoped>
.favorites {
  margin: 0 auto;
}

.header {
  color: #d6cd81;
}
table {
  width: 100%;
}

.tg {
  border-collapse: collapse;
  border-spacing: 0;
}
.tg td {
  border-color: black;
  border-style: solid;
  border-width: 1px;
  font-family: Arial, sans-serif;
  font-size: 14px;
  overflow: hidden;
  padding: 10px 5px;
  word-break: normal;
}
.tg th {
  border-color: black;
  border-style: solid;
  border-width: 1px;
  font-family: Arial, sans-serif;
  font-size: 14px;
  font-weight: normal;
  overflow: hidden;
  padding: 10px 5px;
  word-break: normal;
}
.tg .tg-tizx {
  background-color: #000000;
  border-color: #ffffff;
  color: #ffffff;
  text-align: left;
  vertical-align: top;
}
</style>
