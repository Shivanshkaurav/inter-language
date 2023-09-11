import {  Heading } from '@chakra-ui/react';
import React from 'react';
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation(["home"]);
  return (
    <Heading textAlign={'center'} mt={'10'}>
      {t("home")}
    </Heading>
  );
};

export default Home;
