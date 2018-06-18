import React from 'react';
import styled from 'styled-components';
import instagramIcon from '../Social/contact-social-insta.svg';
import vkIcon from '../Social/contact-social-vk.svg';
import telegramIcon from '../Social/contact-social-telegram.svg';
import youtubeIcon from '../Social/contact-social-youtube.svg';

const Wrapper = styled.div`
  background-color: #272727;
  padding: 20px;
`;

const Icon = styled.img`
  width: 50px;
  margin: 10px;
`;

const SocialNetworksIcons = styled.div`
  margin: 0 auto;
  text-align: center;
`;

const Requisites = styled.div`
  color: #fff;
  font-family: 'Roboto-Light', sans-serif;
  font-size: 12px;
  padding: 20px;
    
  @media (min-width: 768px) {
    text-align: center;
  }
`;

export default () => (
  <Wrapper>
    <Requisites>
      Индивидуальный предприниматель Панченко Андрей Дмитриевич<br />
      ОГРНИП 318774600098068<br />
      ИНН 771386120991<br />
      Банк МОСКОВСКИЙ ФИЛИАЛ АО КБ "МОДУЛЬБАНК"<br />
    </Requisites>

    <SocialNetworksIcons>
      <a href="https://vk.com/casplase" target="_blank">
        <Icon
          src={vkIcon}
          alt="casplase vkontakte"
        />
      </a>
      <a href="https://instagram.com/casplase/" target="_blank">
        <Icon
          src={instagramIcon}
          alt="casplase instagram"
        />
      </a>
      <a href="https://www.youtube.com/channel/UC2-rv4pDPmTUdjvl5GUBJsA" target="_blank">
        <Icon
          src={youtubeIcon}
          alt="casplase YouTube"
        />
      </a>
      <a href="tg://resolve?domain=andrew1322" target="_blank">
        <Icon
          src={telegramIcon}
          alt="casplase telegram" />
      </a>
    </SocialNetworksIcons>
  </Wrapper>
);
