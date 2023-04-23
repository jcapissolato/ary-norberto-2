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

export default function ModalReurb() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <ButtonsModals>
        <Button variant="text" onClick={handleOpen}>REGULARIZAÇÃO PELA REURB</Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              REURB – REGULARIZAÇÃO FUNDIÁRIA URBANA, TÍTULOS DE LEGITIMAÇÃO
              FUNDIÁRIA.
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Uma das formas originária de aquisição da propriedade sobre área
              pública ou privada. Atuação junto ao Poder Público Municipal para
              entrega de títulos de propriedade as pessoas, retirando-as da
              clandestinidade e, levando aos Cartórios de Registros de Imóveis
              formando uma nova relação jurídica.
            </Typography>
          </Box>
        </Modal>
      </ButtonsModals>
    </div>
  );
}
