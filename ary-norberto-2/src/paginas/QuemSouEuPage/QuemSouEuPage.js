import react from "react";
import Header from "../../componentes/header/Header";
import { BoxFotoSobre, TextoSobre, BoxBackgroundSobre } from "./styled";
import fotoary from '../../ativos/fotoary.jpeg'
import parede from '../../ativos/parede.jpg'
import { Button, Card, CardContent, CardMedia, Typography } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { BoxButtonSobre } from "./styled";

const QuemSouEuPage = () => {

  return (
    <div img src={parede}>
      <Header />
      
      <BoxFotoSobre>
      <Card sx={{ maxWidth: 675 }}>
        <CardMedia
          component="img"
          height="500"
          image={fotoary}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" textAlign={"center"}>
            Ary Norberto Silva
            <hr/>
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <TextoSobre>
            Advogado atuante na advocacia Preventiva, Consultiva e Contenciosa,
            focado em oferecer assessoria jurídica a pessoas físicas e
            jurídicas, com atuação em todo estado de Mato Grosso. Sendo assim,
            um escritório especializado em Direito Imobiliário (regularização de
            Imóveis) rurais e urbanos, atuando ainda no Direito de Família em
            Inventário, Divórcio e Partilha, judicial e extrajudicial; Direito
            Tributário contencioso nas Execuções Fiscais e Administrativamente
            junto as fazendas públicas municipais, estaduais e da união.
            </TextoSobre>
          </Typography>
        </CardContent>
      </Card>
        {/* <FotoSobre img src={fotoary} /> */}
      </BoxFotoSobre>
      <BoxButtonSobre>
        <Button
          variant="contained"
          onClick={() => window.open(`https://wa.me/5565992933370 `)}
        >
          <WhatsAppIcon />
          Solicite um Atendimento
        </Button>
      </BoxButtonSobre>
    </div>
  );
};

export default QuemSouEuPage;
