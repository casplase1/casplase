/* eslint react/prop-types: 0 */

import React, { Component } from 'react';
import styled from 'styled-components';
import contactsEmail from './contact-email.svg';
import contactsPhone from './contact-phone.svg';
import contactsMessenger from './contact-messengers.svg';
import logowhite from './logowhite.svg';

const Wrapper = styled.div`
  background-color: #3b3b3b;
  position: relative;
`;

const ContactsWrapper = styled.div`
  padding: 15px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  @media (min-width: 768px) {
    max-width: 970px;
  }
`;

const Contacts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const ContactWrapper = styled.div`
  width: 175px;
  display: flex;
  align-items: center;
  padding: 15px;
`;

const ContactIcon = styled.img`
  width: 20px;
  margin-right: 10px;
`;

const Label = styled.div`
  text-align: left;
  font-family: 'Roboto-Light', sans-serif;
  font-weight: bold;
  color: #9d9d9d;
  font-size: 12px;
  padding-bottom: 5px;
`;

const Info = styled.a`
  font-family: 'Roboto-Light', sans-serif;
  font-size: 16px;
  color: #ffffff;
`;

const Logo = styled.img`
  display: none; 
 
  @media (min-width: 768px) {
    display: block;
    height: 50px;
    padding: 5px;
    opacity: 0.5;
  }
`;

const Contact = props => (
  <ContactWrapper>
    <ContactIcon src={props.icon} />
    <div>
      <Label>{props.label}</Label>
      <Info href={props.href}>{props.info}</Info>
    </div>
  </ContactWrapper>
);

export default () => (
  <Wrapper>
    <ContactsWrapper>
      <Contacts>
        <Logo src={logowhite} />
        <Contact
          icon={contactsEmail}
          label="Email"
          info="info@casplase.ru"
          href="mailto:info@casplase.ru"
          // onClick={() => (yaCounter48967208.reachGoal('mail'))}
        />
        <Contact
          icon={contactsPhone}
          label="Телефон для связи"
          info="+7 (903) 006-99-90"
          href="tel:+79030069990"
        />
        <Contact
          icon={contactsMessenger}
          label="WhatsApp, Telegram"
          info="+7 (903) 006-99-90"
          href="whatsapp://send?text=Здравствуйте!&phone=+79030069990"
        />
      </Contacts>
    </ContactsWrapper>
  </Wrapper>
);
