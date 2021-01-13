import React from 'react';

import classes from './TodoForm.module.scss';

interface TodoFormProps {
  onAdd: (title: string) => void;
}

export const TodoForm: React.FC<TodoFormProps> = ({ onAdd }: TodoFormProps): React.ReactElement => {
  const [title, setTitle] = React.useState<string>('');

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setTitle(event.currentTarget.value);
  };

  const keyPressHandler = (event: React.KeyboardEvent): void => {
    if (event.key === 'Enter') {
      if (title !== '') {
        onAdd(title);
        setTitle('');
      }
    }
  };

  return (
    <div>
      <div className={classes.inputField}>
        <label htmlFor="title" className={classes.active}>
          Введите название дела
        </label>
        <input
          onKeyPress={keyPressHandler}
          onChange={changeHandler}
          value={title}
          type="text"
          id="title"
          required
        />
      </div>
    </div>
  );
};
