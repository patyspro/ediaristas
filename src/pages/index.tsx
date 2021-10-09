import type { NextPage } from "next";
import SafeEnvironment from "ui/components/feedback/SafeEnvironment/SafeEnvironment";
import PageTitle from "ui/components/data-display/PageTitle/PageTitle";
import UserInformation from "ui/components/data-display/UserInformation/UserInformation";
import TextFieldMask from "ui/components/inputs/TextFieldMask/TextFieldMask";
import { Button, Typography } from "@mui/material";
import {FormElementsContainer} from  "ui/styles/pages/index.style"

const Home: NextPage = () => {
  return (
    <div>
      <SafeEnvironment />
      <PageTitle
        title={"Conheça os profissionais"}
        subtitle={
          "Preencha seu endereço e veja todos os profissionais da sua localidade"
        }
      ></PageTitle>
      <FormElementsContainer>
      <TextFieldMask mask={"99.999-999"} label={"Digite seu CEP"} fullWidth  variant={'outlined'}/>
      <Typography color={'error'}> CEP inválido </Typography>
      <Button variant={'contained'} color={'secondary'} sx={{width:'220px'}}> Buscar</Button>
      </FormElementsContainer>
      
      <UserInformation
        name={"Patricia"}
        picture={"https://github.com/patyspro.png"}
        rating={5}
        description={"São Paulo"}
      />
      <UserInformation
        name={"Felipe"}
        picture={""}
        rating={3}
        description={"São Paulo"}
      />

      <UserInformation
        name={"Guilherme"}
        picture={""}
        rating={2}
        description={"São Paulo"}
      />

      <UserInformation
        name={"Jorge"}
        picture={""}
        rating={4}
        description={"São Paulo"}
      />

      <UserInformation
        name={"Samuel"}
        picture={""}
        rating={5}
        description={"São Paulo"}
      />
    </div>
  );
};

export default Home;
