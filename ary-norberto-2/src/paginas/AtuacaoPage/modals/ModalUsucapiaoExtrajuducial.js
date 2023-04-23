import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { ButtonsModals } from "../styled";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function ModalUsucapiaoExtrajuducial() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <ButtonsModals>
        <Button variant="text" onClick={handleOpen}>USUCAPIÃO EXTRAJUDICIAL</Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              DA USUCAPIÃO EXTRAJUDICIAL – Formação de título no Registro de
              Imóveis.
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              É uma das formas de aquisição da propriedade e de alguns outros
              direitos reais limitados tomando a coisa para si pelo uso
              prolongado do tempo (prescrição aquisitiva).
            </Typography>
            <Typography id="modal-modal-title" variant="h6" component="h2">
            Espécies de posses “AD USUCAPIONEM”:
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Extraordinária – 15 anos ininterruptos;<br/>
            Extraordinária - com prazo reduzido 10 anos ininterruptos;<br/>
            Ordinária – 10 anos ininterruptos;<br/>
            Ordinária – com prazo reduzido 5 anos ininterruptos;<br/>
            Constitucional Rural (especial rural) - prazo 5 anos ininterruptos;<br/>
            Constitucional Urbana – (especial urbano) prazo 5 anos ininterruptos;<br/>
            Urbana Coletiva – prazo 5 anos ininterruptos;<br/>
            Familiar - (abandono de lar) prazo 2 anos ininterruptos;<br/>
            Indígena – (integrado ou não) 10 anos ininterruptos;<br/>
            </Typography>
          </Box>
        </Modal>
      </ButtonsModals>
    </div>
  );
}
