import {
  Button,
  Container,
  Divider,
  Grid,
  TextField,
  Typography,
} from "@mui/material";

export default function Contact() {
  return (
    <>
      <Container sx={{ paddingTop: 5 }}>
        <Typography variant="h2">Contactanos...</Typography>
        <Typography variant="h4" sx={{ paddingTop: 3 }}>
          ¿Cómo podemos ayudarte?
        </Typography>
        <Divider />

        <ul>
          <li>
            <Typography variant="subtitle2" sx={{ fontSize: "22px" }}>
              ¿Tenés alguna pregunta sobre nuestros productos o servicios?
            </Typography>
          </li>
          <li>
            <Typography variant="subtitle2" sx={{ fontSize: "22px" }}>
              ¿Querés realizar un pedido personalizado para tu próximo evento?
            </Typography>
          </li>
        </ul>
        <Divider />
        <Typography variant="h4" sx={{ pt: 2, pb: 2 }}>
          Dejanos un mensaje...
        </Typography>

        <Grid container>
          <Grid item xs={12} md={6}>
            <TextField
              multiline
              minRows={3}
              label={"Comentario"}
              name="comentario"
              fullWidth
            />
          </Grid>
          <Grid item md={6} />
          <Grid item xs={12} md={6} sx={{ pt: 3 }}>
            <Button
              fullWidth
              variant="contained"
              style={{
                backgroundColor: "rgb(255, 180, 162)",
              }}
            >
              Enviar comentario
            </Button>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
