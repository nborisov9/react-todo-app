import React from 'react';
import { useHistory } from 'react-router-dom';

import classes from './AboutPage.module.scss';

export const AboutPage: React.FC = (): React.ReactElement => {
  const history = useHistory();

  const changeUrlHandler = () => {
    history.push('/');
  };

  return (
    <div className={classes.aboutWrapper}>
      <h1 className={classes.title}>Страница информации</h1>
      <p className={classes.text}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo aperiam saepe optio quibusdam!
        Perferendis ipsa voluptatem repudiandae architecto perspiciatis eveniet!
      </p>

      <button onClick={changeUrlHandler} className={classes.button}>
        Обратно к списку дел
      </button>
    </div>
  );
};
