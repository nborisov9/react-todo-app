import React from 'react';

import TodoForm from '../../components/TodoForm';
import TodoList from '../../components/TodoList';
import { ITodo } from '../../interfaces';

declare var confirm: (question: string) => boolean;

export const TodosPage: React.FC = (): React.ReactElement => {
  const [todos, setTodos] = React.useState<Array<ITodo>>([]);

  React.useEffect(() => {
    const saved: Array<ITodo> = JSON.parse(localStorage.getItem('todos') || '[]');
    setTodos(saved);
  }, []);

  React.useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addHandler = (title: string): void => {
    const newTodo: ITodo = {
      title,
      id: Date.now(),
      completed: false,
    };

    setTodos((prev) => [newTodo, ...prev]);
  };

  const toggleHadnler = (id: number) => {
    setTodos((prev) =>
      prev.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      }),
    );
  };

  const removeHandler = (id: number): void => {
    const isConfirm = confirm('Вы действительно хотите удалить запись?');
    isConfirm && setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <>
      <TodoForm onAdd={addHandler} />
      <TodoList onToggle={toggleHadnler} onRemove={removeHandler} todos={todos} />
    </>
  );
};
