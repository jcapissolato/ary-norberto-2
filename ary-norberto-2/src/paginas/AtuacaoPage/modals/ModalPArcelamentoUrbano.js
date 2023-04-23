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

export default function ModalParcelamentoUrbano() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
<ButtonsModals>
        <Button variant="text" onClick={handleOpen}>
          PARCELAMENTO DO SOLO URBANO
        </Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              GLEBAS, LOTEAMENTOS, DESMEMBRAMENTOS, FRACIONAMENTO/DESDOBROS.
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Atuação junto ao poder Públicos Municipais para fins viabilizar a
              regularização de glebas em lotes destinados a edificação, abertura
              de novas vias de circulação, logradouros públicos ou
              prolongamento, modificação ou ampliação das vias existentes, fins
              adequar o parcelamento do solo urbano em zonas urbanas e de
              expansão urbana, urbanizável e de urbanização específica.
              <p> Loteamentos;</p>
              <p> Desmembramentos;</p>
              <p> Desdobros;</p>
              <p> Fracionamentos</p>
              <p> Lotes;</p>
              <p> Condomínio de lotes;</p>
              <p> Atas Notariais diversas;</p>
              <p> Loteamento de acesso controlado.</p>
            </Typography>
          </Box>
        </Modal>
      </ButtonsModals>
  );
}