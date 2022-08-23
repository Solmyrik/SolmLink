import React from 'react';
import style from './List.module.scss';
import { motion, AnimatePresence } from 'framer-motion';

const List = ({ list, link, theme }) => {
  const copyLink = (index) => {
    navigator.clipboard.writeText(list[index]);
  };
  return (
    <div className={theme ? style.section : style.section__dark}>
      <div className={style.section__container}>
        {list.map((item, i) => {
          return (
            <AnimatePresence>
              <motion.div
                className={style.section__item}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}>
                <div className={style.section__links}>
                  <div className={style.section__link}>{link[i].slice(0, 30) + '...'}</div>
                  <div className={style.section__newlink}>{item}</div>
                </div>
                <button onClick={() => copyLink(i)} className={style.section__button}>
                  Скопировать
                </button>
              </motion.div>
            </AnimatePresence>
          );
        })}
      </div>
    </div>
  );
};

export default List;
