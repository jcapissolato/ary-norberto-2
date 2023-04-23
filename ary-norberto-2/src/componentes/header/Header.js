import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import logo from "../../ativos/logo.png";
import { LogoStyle } from "./styled";
import ButtonGroup from "@mui/material/ButtonGroup";
import {useNavigate} from 'react-router-dom'
import { goToAtuacaoPage, goToContatoPage, goToHomePage, goToQuemSouEuPage } from "../../routes/coordinator";

export default function Header() {
  const navigate = useNavigate()

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="relative">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <LogoStyle img src={logo} />
          </IconButton>
          <ButtonGroup variant="text">
          <Button onClick={()=>goToHomePage(navigate)} size="small" color="inherit">Home</Button>
          <Button onClick={()=>goToQuemSouEuPage(navigate)} size="small" color="inherit">Sobre</Button>
          <Button  onClick={()=>goToAtuacaoPage(navigate)} size="small" color="inherit">Atuação</Button>
          <Button onClick={()=>goToContatoPage(navigate)} size="small" color="inherit">Contato</Button>
          </ButtonGroup>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
