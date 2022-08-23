import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { API_URL } from '../../config';
import style from './Form.module.scss';

const Form = ({ onChangeList, link, setLink, theme }) => {
  const [mount, isMount] = useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    mode: 'onSubmit',
  });

  const onSubmit = (data) => {
    setLink(data.Url);
  };
  useEffect(() => {
    if (mount) {
      fetch(API_URL + link, {
        method: 'Post',
      })
        .then((value) => {
          return value.json();
        })
        .then((json) => {
          onChangeList(json.result.short_link, link);
        });
    }
    isMount(true);
  }, [link]);

  return (
    <section className={theme ? style.section : style.section__dark}>
      <div className={style.section__container}>
        <form className={style.form} action="" onSubmit={handleSubmit(onSubmit)}>
          <input
            className={errors.Url ? style.input_error : style.input}
            type="url"
            placeholder="Вставьте ссылку"
            {...register('Url', {
              required: '',
              pattern: {
                value:
                  /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g,
              },
            })}
          />
          <button className={style.button}>Укоротить</button>
          {errors.Url && <div>{errors.Url.message}</div>}
        </form>
      </div>
    </section>
  );
};

export default Form;
