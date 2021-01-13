import React from 'react';
import TrashIcon from '@material-ui/icons/Delete';

import { ITodo } from '../../interfaces';
import classes from './TodoList.module.scss';

interface TodoListProps {
  todos: Array<ITodo>;
  onToggle: (id: number) => void;
  onRemove: (id: number) => void;
}

export const TodoList: React.FC<TodoListProps> = ({
  todos,
  onToggle,
  onRemove,
}: TodoListProps): React.ReactElement => {
  if (!todos.length) {
    return <div className={classes.todoEmpty}>пока дел нет</div>;
  }

  return (
    <ul>
      {todos.map(({ id, completed, title }) => {
        const cls = [classes.todo];

        if (completed) {
          cls.push(classes.completed);
        }

        return (
          <li key={id} className={cls.join(' ')}>
            <label>
              <input type="checkbox" checked={completed} onChange={() => onToggle(id)} />
              <span>{title}</span>
            </label>
            <div>
              <TrashIcon
                onClick={() => onRemove(id)}
                style={{ cursor: 'pointer', color: '#e57373' }}
              />
            </div>
          </li>
        );
      })}
    </ul>
  );
};
