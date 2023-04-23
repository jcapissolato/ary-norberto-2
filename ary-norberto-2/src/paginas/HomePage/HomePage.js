import react from "react";
import Header from "../../componentes/header/Header";
import { useNavigate } from "react-router-dom";
import logo from "../../ativos/logo.png";
import {
  BoxButtonHome,
  BoxLogoHome,
  BoxTextoHome,
  ButtonHome,
  LogoHome,
  TextoHome,
} from "./styled";
import { Button } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Header />
      <BoxLogoHome>
        <LogoHome img src={logo} />
      </BoxLogoHome>
      <BoxTextoHome>
        <TextoHome>
          O direito imobiliário é um ramo do direito privado que aponta as
          relações jurídicas e de direito que envolvam a posse, compra, venda,
          doação, sucessão, troca e propriedade de bens imóveis, inclusive a
          incorporação imobiliária
        </TextoHome>
      </BoxTextoHome>
      <BoxButtonHome>
        <Button
          variant="contained"
          onClick={() => window.open(`https://wa.me/5565992933370 `)}
        >
          <WhatsAppIcon />
          Solicite um Atendimento
        </Button>
      </BoxButtonHome>
    </div>
  );
};

export default HomePage;
