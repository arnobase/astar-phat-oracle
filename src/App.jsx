import * as React from "react";
import Container from "@mui/material/Container";
import { Content } from "./components/Content";
import { AppHeader } from "./components/AppHeader";
import { ContextProvider } from "./context/ContextProvider";
import { AstarApiProvider } from "./context/AstarApiProvider";
import { PhalaApiProvider } from "./context/PhalaApiProvider";
import { ContractProvider } from "./context/ContractProvider";
import { Grid } from "@mui/material";
import './assets/style.css';

export default function App() {
  return (
      <ContextProvider>
        <AstarApiProvider>
          <PhalaApiProvider>
            <ContractProvider>
              <Container sx={{pt:2}} maxWidth="md">
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <AppHeader /> 
                  </Grid>
                  <Grid item xs={12}>
                    <Content />
                  </Grid>
                </Grid>
              </Container>
            </ContractProvider>
          </PhalaApiProvider>
        </AstarApiProvider>
      </ContextProvider>
  );
}
