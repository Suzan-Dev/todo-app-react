export const removeTask = (tasks, e) => {
  const taskName =
    e.target.previousElementSibling.previousElementSibling.innerText;
  return tasks.filter((task) => task !== taskName);
};

export const editTask = (tasks, task) => {
  return tasks.concat([task]);
};
