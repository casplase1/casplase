import 'babel-polyfill';
import React, {Component} from 'react';
import styled from 'styled-components';
import casplaseLogoInline from './casplase_black_inline.svg';
import casewoodLogo from './Projects/casewood.svg';
import broshakerLogo from './Projects/broshaker.svg';
import donishkiLogo from './Projects/donishki-color-logo.svg';
import nagravirovkuLogo from './Projects/nagravirovku.svg';
import Footer from './Footer';

const Wrapper = styled.div`
  text-align: center;
`;

const Logo = styled.img`
  width: 100px;
  padding-top: 40px;
 
  @media (min-width: 768px) {
    width: 150px;
    padding-top: 50px;
  }
`;

const H1 = styled.h1`
  font-family: surveyor text a,surveyor text b, Georgia, serif;
  font-weight: 300;
  font-size: 35px;
  margin-top: 10px;
  
  @media (min-width: 768px) {
    font-size: 52px;
    margin-top: 20px;
    margin-bottom: 20px;
  }
`;

const SubHeader = styled.span`
  font-size: 22px;
  
  @media (min-width: 768px) {
    font-size: 32px;
  }
`;

const H2 = styled.h2`
  font-family: Roboto-Light, 'sans-serif';
  margin-top: 40px;
  margin-bottom: 0;
  // padding-top: 20px;
  
  @media (min-width: 768px) {
    // padding-top: 40px;
  }
`;

const Projects = styled.div`
  text-align: center;
  max-width: 768px;
  margin: 0 auto;
  padding-bottom: 80px;
`;

const Img = styled.img`
  display: inline-block;
  width: 200px;
  max-height: 150px;
`;

const ImgWrapper = styled.a`
  display: block;
`;

const Description = styled.article`
  font-family: Roboto-Light, 'sans-serif';
  text-align: left;
  padding: 20px 25px;
  color: #454545;
`;

const CardWrapper = styled.div`
  padding: 20px 0;
  
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
  }
`;

const ProjectLink = styled.a`
  display: inline-block;
  padding: 5px 0;
  color: #000;
`;

const HeaderDescription = styled.h2`
  font-family: Roboto-Light, 'sans-serif';
  color: #a0a0a0;
  font-weight: 300;
  letter-spacing: .05em;
  padding: 0 25px;
  font-size: 14px;
  text-align: left;
  
  @media (min-width: 768px) {
    font-size: 16px;
    text-align: center;
  }
`;

const BR = styled.br`
  display: none;

  @media (min-width: 768px) {
    display: block;
  }
`;

const Card = ({logo, link, linkText, alt, text}) => (
  <CardWrapper>
    <ImgWrapper href={link}>
      <Img src={logo} alt={alt}/>
    </ImgWrapper>
    <Description>
      <ProjectLink href={link}>{linkText}</ProjectLink><br />
      {text}
    </Description>
  </CardWrapper>
);

export default () => (
  <Wrapper>
    <Logo src={casplaseLogoInline} alt="Креативное агенство Солоницкий, Панченко и Першин"/>
    <H1>Creative agency <br /><SubHeader>Solonitsky, Panchenko & Pershin</SubHeader></H1>
    <HeaderDescription>Мы - креативное агентство, разрабатываем продукты используя лазерное оборудование, <BR /> фрезеровку, УФ-печать.
      У нас много ресурсов, собственное производство и слаженная команда.​</HeaderDescription>
    <H2>Проекты</H2>
    <Projects>
      <Card
        link="https://nagravirovku.ru"
        linkText="nagravirovku.ru"
        logo={nagravirovkuLogo}
        alt="nagravirovku.ru лазерная резка и гравировка"
        text="Лазерная резка и гравировка любых материалов (дерево, кожа, пластик, оргстекло, и.т.п). Лазерная маркировка металла, фрезеровка. Полноцветная УФ-печать. Быстрый расчет заказа, качественное исполнение."
      />
      <Card
        link="https://casewood.ru"
        linkText="casewood.ru"
        logo={casewoodLogo}
        alt="casewood.ru деревянные чехлы с гравировкой или фото"
        text="Деревянные чехлы с гравировкой на все модели iPhone. Индивидуальный дизайн для каждого клиента. Гравировка логотипов, надписей. Каталог готовых дизайнов, именные чехлы. Нанесение фотографии в ч/б и цвете."
      />
      <Card
        link="https://donishki.ru"
        linkText="donishki.ru"
        logo={donishkiLogo}
        alt="donishki.ru донышки для вязания (плетения) корзинок"
        text="Производство донышек для вязания (плетения) корзинок из трикотажной пряжи. Большой каталог готовых изделий, оптовый и розничный прайс. Разработка дизайна донышек на заказ."
      />
      <Card
        link="https://broshaker.ru"
        linkText="broshaker.ru"
        logo={broshakerLogo}
        alt="broshaker.ru именные шейкеры"
        text="Спортивные именные шейкеры, именные бутылки для воды, именные термосы и термокружки. Уникальность нашего товара – яркий и привлекательный дизайн, созданный самим покупателем! Мы продаём именные товары для спорта и повседневной жизни."
      />
    </Projects>

    <Footer />
  </Wrapper>
);
