<template>
  <div class="p-4 bg-gray-800 text-white rounded">
    <h2 class="text-xl mb-4">Spread Operator Challenge</h2>
    <ul class="mb-4">
      <li
        v-for="item in items"
        :key="item.id"
        class="flex justify-between py-1"
      >
        <span>{{ item.name }}: {{ item.value }}</span>
        <button @click="removeItem(item.id)" class="text-red-400">
          Remove
        </button>
      </li>
    </ul>
    <form @submit.prevent="addItem" class="flex space-x-2">
      <input v-model="newItem.name" placeholder="Name" class="px-2 py-1" />
      <input
        v-model.number="newItem.value"
        placeholder="Value"
        class="px-2 py-1"
      />
      <button type="submit" class="bg-blue-500 px-4 py-1">Add</button>
    </form>
  </div>
</template>

<script setup>
import { ref, computed, watch } from "vue";

const items = ref([
  { id: 1, name: "Sample A", value: 10 },
  { id: 2, name: "Sample B", value: 20 },
]);
const newItem = ref({ name: "", value: null });
let nextId = 3;

function addItem() {
  // TODO(1): Check that newItem.value.name is a non-empty string
  // TODO(2): Check that newItem.value.value is a positive number
  // TODO(3): Use object spread to create a new object with id: nextId and the fields from newItem.value
  // TODO(4): Push the new object into items.value
  // TODO(5): Increment nextId using the spread operator in an expression
  // TODO(6): Reset newItem.value to an empty object using spread
}

function removeItem(id) {
  // TODO(7): Use array filter and spread to remove the item with the matching id
  // TODO(8): Assign the filtered array back to items.value
}

// TODO(9): Create a computed property named totalValue that uses reduce and spread to sum item.value

// TODO(10): Watch the items array and log the new length whenever it changes

// TODO(11): Destructure the first item from items.value using array spread syntax
// TODO(12): Destructure the remaining items into a variable named restItems

// TODO(13): Use object spread to merge two objects: { a:1, b:2 } and { b:3, c:4 }

// TODO(14): Create a method updateItem(id, patch) that uses map and object spread to update one item
// TODO(15): Call updateItem to change the name of item with id 1 to 'Updated'

// TODO(16): Demonstrate cloning the items array into a new array using spread

// TODO(17): Explain in a comment why spread creates a shallow copy

// TODO(18): Use the spread operator to pass item properties as props into a child component (assume <ItemCard />)

// TODO(19): Add error handling if spread fails because of undefined values

// TODO(20): Add TypeScript type annotations for the newItem and items arrays (optional bonus)
</script>
