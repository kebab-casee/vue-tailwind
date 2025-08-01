# Task Manager Add/Delete Challenge

Welcome to your next Vue.js practice! In this challenge, you’ll reinforce your skills by implementing two core features in a simple task manager:

1. **Adding a Task**
2. **Removing a Task**

---

## Starter Code Skeleton

```vue
<script setup>
import { ref } from "vue";

const tasks = ref([]);
const newTask = ref("");
let nextId = 1;

function addTask() {
  // TODO: Create a new task object with a unique `id` and the text from `newTask`.
  //       Push it into `tasks.value`, then clear `newTask.value`.
  if (!newTask.value.name.trim()) return;

  tasks.value.push({
    id: nextId++,
    name: newTask.value.name,
  });

  newTask.value.name = "";
}

function removeTask(id) {
  // TODO: Use `Array.prototype.filter` to remove any task whose `id` matches the passed-in `id`.
  //       Assign the filtered array back to `tasks.value`.
  tasks.value = tasks.value.filter((task) => task.id !== id);
}
</script>
```

---

### Challenge Requirements

1. **Unique IDs**: Ensure each new task has a unique, incrementing `id`.
2. **Reactivity**: All changes to `tasks` should update the UI automatically.
3. **Clear Input**: After adding, `newTask.value` should be reset to an empty string.
4. **Clean Removal**: Removing a task should not mutate the original array—instead, replace it with a new filtered array.

### Bonus

- Prevent adding empty or whitespace-only tasks.
- Add a confirmation prompt before deleting a task.

Good luck, and happy coding! 🚀
