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
        <Typography variant="h4" fontFamily={"cursive"}>
          Contactanos...
        </Typography>
        <Typography variant="h5" sx={{ paddingTop: 3 }}>
          ¿Cómo podemos ayudarte?
        </Typography>
        <Divider />

        <ul>
          <li style={{ paddingBottom: 3 }}>
            <Typography variant="body2" color={"GrayText"}>
              ¿Tenés alguna pregunta sobre nuestros productos o servicios?
            </Typography>
          </li>
          <li>
            <Typography variant="subtitle2" color={"GrayText"}>
              ¿Querés realizar un pedido personalizado para tu próximo evento?
            </Typography>
          </li>
        </ul>
        <Divider />
        <Typography variant="h5" sx={{ pt: 4, pb: 2 }}>
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
                color: "white",
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
