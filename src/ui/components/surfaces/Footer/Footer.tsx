/* eslint-disable @next/next/no-img-element */
import React from "react";
import {
  FooterStyled,
  FooterContainer,
  FooterTitle,
  Applist,
} from "./Footer.style";
import { Typography, Box } from "@mui/material";

const Footer = () => {
  return (
    <FooterStyled>
      <FooterContainer>
        <Box sx={{maxWidth:'400px'}} >
          <FooterTitle> Quem somos</FooterTitle>
          <Typography variant={'body2'} sx={{mt:2}}>
            O e-diaristas te ajuda a encontrar um profissional perfeito para
            realizar a limpeza da sua casa. Garantimos os melhores profissionais
            com total segurança e praticidade! São milhares de clientes
            satisfeitos por todo o país.
          </Typography>
        </Box>

        <Box>
          <FooterTitle> Baixe nossos aplicativos</FooterTitle>
          <Applist>
            <li>
              <a href={"/"} target={"_blank"} rel={"noopener noreferrer"}>
                <img src={"/img/logos/app-store.png"} alt={"App Aplle Store"} />
              </a>
            </li>
            <li>
              <a href={"/"} target={"_blank"} rel={"noopener noreferrer"}>
                <img
                  src={"/img/logos/google-play.png"}
                  alt={"App Google Play"}
                />
              </a>
            </li>
          </Applist>
        </Box>
      </FooterContainer>
    </FooterStyled>
  );
};

export default Footer;
