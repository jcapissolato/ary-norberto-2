import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import styled from "styled-components";

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
const StyleButton = styled.div`
margin-left: 4px ;
` 

export default function ModalImoveisPublicos() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <div>
        <StyleButton>
        <Button variant="text" onClick={handleOpen}>REURB SOBRE IMÓVEIS PÚBLICOS</Button>
        </StyleButton>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
            REURB SOBRE IMÓVEIS PÚBLICOS
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Também nas modalidades S e E. Quando ocorrer sobre bens públicos a
              Administração poderá definir quais instrumentos serão ao mais
              adequados para titulação dos imóveis.
            </Typography>
          </Box>
        </Modal>
      </div>
    </div>
  );
}
