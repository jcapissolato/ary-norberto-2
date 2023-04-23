import react from "react";
import Header from "../../componentes/header/Header";
import { useNavigate } from "react-router-dom";
import ModalImoveisRurais from "./modals/ModalImoveisRurais";
import ModalUsucapiaoExtrajuducial from "./modals/ModalUsucapiaoExtrajuducial";
import ModalUsucapiao from "./modals/ModalUsucapiao";
import ModalUsucapiaoJudicial from "./modals/ModalUsucapiaoJudicial";
import ModalParcelamentoUrbano from "./modals/ModalPArcelamentoUrbano";
import ModalReurb from "./modals/ModalReurb";
import ModalReurbSocial from "./modals/ModalReurbSocial";
import ModalReurbEspecifico from "./modals/ModalReurbEspecifico";
import ModalImoveisPublicos from "./modals/ModalImoveisPublicos";
import ModalReurbInominada from "./modals/ModalReurbInominada";
import { Button, Card, CardContent, Typography } from "@mui/material";
import parede from "../../ativos/parede.jpg";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import {
  BoxCardImobiliario,
  BoxButtonAtuacao,
  TextoCardImobiliario,
  ButtonsModals,
  Background,
  BoxCardTributario,
  BoxCardCivil,
  ButtonAtuacao,
} from "./styled";

const AtuacaoPage = () => {
  const navigate = useNavigate();
  return (
    <Background>
      <Header />
      <BoxCardImobiliario>
        <Card>
          <CardContent>
            <Typography variant="h5" component="div">
              DIREITO IMOBILIÁRIO
              <hr />
            </Typography>
            <Typography variant="body2" sx={{ mb: 1.5 }} color="text.secondary">
              <TextoCardImobiliario>
                Atuando extrajudicial junto aos cartórios de notas e registro de
                imóveis, com conhecimento nos meios (ordinários e
                extraordinários) de regularizar imóveis (rurais e urbanos)
                trabalhando para assegurar aos seus possuidores direitos a
                moradia, habitação e a propriedade com requerimentos aos
                Tabelionatos e Registros de Imóveis Competentes para:
              </TextoCardImobiliario>
              <p>
                <TextoCardImobiliario>
                  Abertura de matricula; <br />
                  De registros e averbações diversas;
                  <br />
                  Retificação de Registros;
                  <br /> Públicos contenciosos ou não;
                  <br />
                  Apresentação de Plantas e Memoriais descritivos;
                  <br /> Cancelamentos de Registros e Averbações;
                  <br /> Escritura Pública;
                  <br /> Atas Notariais diversas;
                  <br /> Atas Notariais fins Requerimentos Usucapião.
                </TextoCardImobiliario>
              </p>
              <hr />
            </Typography>
            <ButtonsModals >
              <ModalParcelamentoUrbano variant="text"/>
              <ModalImoveisRurais />
              <ModalUsucapiao />
              <ModalUsucapiaoExtrajuducial />
              <ModalUsucapiaoJudicial />
              <ModalReurb />
              <ModalReurbSocial />
              <ModalReurbEspecifico />
              <ModalImoveisPublicos />
              <ModalReurbInominada />
            </ButtonsModals>
          </CardContent>
        </Card>
      </BoxCardImobiliario>
      <BoxCardTributario>
        <Card>
          <CardContent>
            <Typography variant="h5" component="div">
              DIREITO TRIBUTÁRIO
              <hr />
            </Typography>
            <Typography variant="body2" sx={{ mb: 1.5 }} color="text.secondary">
              Defesa no contecioso nas execuções fiscais e processos
              administrativos.
            </Typography>
          </CardContent>
        </Card>
      </BoxCardTributario>
      <BoxCardCivil>
        <Card>
          <CardContent>
            <Typography variant="h5" component="div">
              DIREITO FAMÍLIA E SUCESSÕES
              <hr />
            </Typography>
            <Typography variant="body2" sx={{ mb: 1.5 }} color="text.secondary">
              Inventário, divórcio, partilha de bens, reconhecimento e
              dissolução de união estável.
            </Typography>
          </CardContent>
        </Card>
      </BoxCardCivil>
      <BoxButtonAtuacao>
        
          <Button
            variant="contained"
            onClick={() => window.open(`https://wa.me/5565992933370 `)}
          >
            <WhatsAppIcon />
            Solicite um Atendimento
          </Button>
        
      </BoxButtonAtuacao>
      <br/>
      <br/>
      <br/>
    </Background>
  );
};

export default AtuacaoPage;
