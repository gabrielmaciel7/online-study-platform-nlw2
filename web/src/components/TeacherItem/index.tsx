import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

const TeacherItem: React.FC = () => {
  return (
    <article className="teacher-item">
          <header>
            <img src="https://avatars1.githubusercontent.com/u/65022499?s=460&u=fd06f357ea8e416deeb8fe8a0a3f179f54b74124&v=4" alt="Gabriel Maciel" />
            <div>
              <strong>Gabriel Maciel</strong>
              <span>Lorem Ipsum</span>
            </div>
          </header>

          <p>
            blandit cursus risus at ultrices
          <br />
          <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tincidunt arcu non sodales neque sodales ut etiam sit amet. Vitae proin sagittis nisl rhoncus mattis. Leo urna molestie at elementum eu facilisis sed.
          </p>

          <footer>
            <p>
              Preço/hora
              <strong>R$ 100,00</strong>
            </p>

            <button type="button">
              <img src={whatsappIcon} alt="Whatsapp" />
              Entrar em contato
            </button>
          </footer>
        </article>
  );
}

export default TeacherItem;