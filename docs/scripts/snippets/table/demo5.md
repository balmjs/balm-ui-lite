```html
<ui-table :thead="true">
  <template slot="thead">
    <tr>
      <th>ID</th>
      <th>Name</th>
      <th>Quantity</th>
      <th>Price</th>
    </tr>
  </template>
  <template slot="tbody">
    <tr v-for="item in data">
      <td>{{ item.id }}</td>
      <td><a :href="`/#/user/${item.id}`">{{ item.name }}</a></td>
      <td>{{ item.quantity }}</td>
      <td>{{ item.price }}</td>
    </tr>
  </template>
</ui-table>
```
