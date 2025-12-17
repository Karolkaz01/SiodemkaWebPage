import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import "./styles.css";
import logo from "./images/logoSiodemka.png";
import heroImage from "./images/1.jpg";
import aboutImage from "./images/Copilot_20251204_214308.png";
import { Grid } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: { main: "#1d1d1dff" },
    secondary: { main: "#ee573a" },
    background: { default: "#2b2b2bff" },
    text: { primary: "#ffffff" },
  },
  typography: {
    fontFamily:
      "Roboto, Inter, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial",
  },
});

function NavBar(): JSX.Element {
  return (
    <AppBar
      position="static"
      color="primary"
      elevation={3}
      sx={{
        backgroundColor: (theme) => theme.palette.primary.main,
        boxShadow: "0 6px 20px #1d1d1dff",
        borderBottom: "1px solid #1d1d1dff",
        py: 1.25,
      }}
    >
      <Toolbar sx={{ gap: 2 }}>
        <Avatar
          src={logo}
          alt="Siódemka"
          variant="square"
          sx={{ width: 60, height: 60, borderRadius: 0 }}
        />

        <Box sx={{ display: "flex", flexDirection: "column", lineHeight: 1 }}>
          <Typography
            variant="h6"
            component="div"
            sx={{ fontSize: 26, fontWeight: 800, color: "#fff" }}
          >
            Siódemka s.c.
          </Typography>
          <Typography
            variant="caption"
            component="div"
            sx={{ fontSize: 14, color: "rgba(255,255,255,0.85)" }}
          >
            Pracownia reklamy i druku
          </Typography>
        </Box>

        <Box sx={{ flexGrow: 1 }} />

        <Box sx={{ display: "flex", gap: 1 }}>
          <Button color="inherit" href="#home">
            Start
          </Button>
          <Button color="inherit" href="#aboutUs">
            O nas
          </Button>
          <Button color="inherit" href="#contact">
            Kontakt
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

function Main(): JSX.Element {
  return (
    <main>
      <Container maxWidth="xl" disableGutters>
        <Box id="home" className="hero-box">
          <Box className="hero-left" sx={{ flex: 1, color: "white" }}>
            <Typography
              variant="h2"
              component="h1"
              sx={{
                fontWeight: 400,
                fontSize: 86,
                lineHeight: 1.02,
                fontFamily: "Teko, sans-serif",
              }}
            >
              TWÓJ DRUK,
              <br />
              NASZA PASJA
            </Typography>

            <Typography
              variant="body1"
              sx={{
                mt: 3,
                fontSize: 25,
                maxWidth: 640,
                color: "rgba(255,255,255,0.9)",
              }}
            >
              Twoją wizję zamieniamy w rzeczywistość. Od wizytówek po oklejanie
              pojazdów - tworzymy spójne projekty z pasją i profesjonalizmem.
            </Typography>
          </Box>

          <Box
            className="hero-right"
            sx={{
              flex: 1,
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              component="img"
              src={heroImage}
              alt="hero"
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
                display: { xs: "none", md: "block" },
              }}
            />
          </Box>
        </Box>
      </Container>

      <Container id="aboutUs" sx={{ py: 8 }}>
        <Box className="about-grid" sx={{ width: "100%" }}>
          <Box className="about-left">
            <Typography
              variant="h2"
              component="h2"
              sx={{
                fontWeight: 400,
                fontSize: 66,
                lineHeight: 1.02,
                fontFamily: "Teko, sans-serif",
                mb: 2,
              }}
            >
              JAKOŚĆ , KTÓRA SIĘ WYRÓŻNIA
            </Typography>

            <Typography variant="body1" sx={{ mb: 2, fontSize: 16 }}>
              Jesteśmy młodą dynamiczną firmą z Zawiercia, stworzoną przez
              zespół z kilkunastoletnim doświadczeniem w branży reklamowej i
              poligraficznej. Łączymy świeże spojrzenie z bogatą praktyką, aby
              dostarczyć rozwiązania, które skutecznie wspierają rozwój marek
              naszych klientów.
            </Typography>

            <Typography variant="body1" sx={{ mb: 2, fontSize: 16 }}>
              Działamy lokalnie i on-line. Zawiercie to nasz dom, ale dzięki
              sieci jesteśmy dostępni dla klientów z całej Polski. Niezależnie
              od tego, czy potrzebujesz szybkiego projektu czy kompleksowej
              kampanii - jesteśmy by pomóc.
            </Typography>

            <Typography variant="body1" sx={{ mb: 2, fontSize: 16 }}>
              Dlaczego my? Nie jesteśmy tylko wykonawcami - jesteśmy partnerami
              w tworzeniu Twojej marki. Każde zlecenie traktujemy indywidualnie,
              wkładając w nie serce, wiedzę i kreatywność.
            </Typography>
            <ul>
              <li>Sprawna realizacja zamównień</li>
              <li>Nieszablonowe projekty</li>
              <li>Obsługa od A do Z</li>
            </ul>
          </Box>

          <Box className="about-right">
            <Box
              component="img"
              src={aboutImage}
              alt="about"
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
                display: "block",
              }}
            />
          </Box>
        </Box>
      </Container>

      {/* placeholder contact section to demonstrate nav linking */}
      <Container id="contact" sx={{ py: 8 }}>
        <Box sx={{ mb: 4 }}>
          <Typography
            variant="h2"
            component="h2"
            sx={{
              fontWeight: 400,
              fontSize: 66,
              lineHeight: 1.02,
              fontFamily: "Teko, sans-serif",
              mb: 2,
            }}
          >
            Skontaktuj się z nami
          </Typography>

          <Typography variant="body1">
            Masz pytania? Chcesz omówić swój projekt? Jesteśmy tutaj, aby pomóc!
            Skontaktuj się z nami poprzez e-mail, telefon lub odwiedź nas
            osobiście.
          </Typography>
        </Box>
        <Grid container spacing={4} alignItems="stretch">
          <Grid
            item
            xs={4}
            sx={{
              display: "flex",
              alignItems: "stretch",
            }}
          >
            <Box sx={{ width: "100%", height: 450, display: "flex" }}>
              <Stack
                spacing={2}
                sx={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  py: 1,
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <EmailIcon sx={{ fontSize: 44, color: "rgba(255,255,255,0.9)" }} />
                  <Link href="mailto:biuro@siodemka-reklamy.pl" sx={{ color: "inherit" }}>
                    <Typography variant="body1">biuro@siodemka-reklamy.pl</Typography>
                  </Link>
                </Box>

                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <PhoneIcon sx={{ fontSize: 44, color: "rgba(255,255,255,0.9)" }} />
                  <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                    <Link href="tel:+48783609661" sx={{ color: "inherit" }}>
                      <Typography variant="body1">783 609 661</Typography>
                    </Link>
                    <Typography variant="body1" sx={{ opacity: 0.8 }}>/</Typography>
                    <Link href="tel:+48601792066" sx={{ color: "inherit" }}>
                      <Typography variant="body1">601 792 066</Typography>
                    </Link>
                  </Box>
                </Box>

                <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1 }}>
                  <LocationOnIcon sx={{ fontSize: 44, color: "rgba(255,255,255,0.9)" }} />
                  <Box>
                    <Typography variant="body1">Zawiercie 42-400 ul. Górnośląska 37</Typography>
                    <Typography variant="body2" sx={{ mt: 0.5, fontWeight: 600 }}>
                      Pon-Pt 9:00 - 17:00
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <FacebookIcon sx={{ fontSize: 44, color: "rgba(255,255,255,0.9)" }} />
                  <Link
                    href="https://www.facebook.com/profile.php?id=61583830106500"
                    target="_blank"
                    rel="noopener"
                    sx={{ color: "inherit" }}
                  >
                    <Typography variant="body1">Siódemka s.c.</Typography>
                  </Link>
                </Box>
              </Stack>
            </Box>
          </Grid>

          <Grid item xs={8}>
            <Box sx={{ height: 450, boxSizing: "border-box" }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d188.67630215256446!2d19.41763130087409!3d50.48736064610473!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4717236bd7e04353%3A0x43238cea23a1b82c!2sSi%C3%B3demka%20s.c.%20Pracownia%20reklamy%20i%20druku!5e0!3m2!1spl!2spl!4v1766012427221!5m2!1spl!2spl"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </main>
  );
}

function Footer(): JSX.Element {
  return (
    <Box
      component="footer"
      sx={{ py: 3, borderTop: "1px solid rgba(255,255,255,0.06)", mt: "auto" }}
    >
      <Container
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 2,
        }}
      >
        <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.9)" }}>
          © 2025 Siódemka s.c. Wszystkie prawa zastrzeżone.
        </Typography>

        <Stack direction="row" spacing={1} alignItems="center">
          <Link
            href="https://www.facebook.com/profile.php?id=61583830106500"
            target="_blank"
            rel="noopener"
            sx={{ color: "inherit" }}
            aria-label="Facebook"
          >
            <IconButton size="small" sx={{ color: "rgba(255,255,255,0.95)" }}>
              <FacebookIcon />
            </IconButton>
          </Link>

          <Link
            href="mailto:biuro@siodemka-reklamy.pl"
            sx={{
              color: "inherit",
              display: "flex",
              alignItems: "center",
              gap: 0.5,
            }}
            aria-label="Email"
          >
            <EmailIcon sx={{ fontSize: 18 }} />
            <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.9)" }}>
              biuro@siodemka-reklamy.pl
            </Typography>
          </Link>

          <Link
            href="https://share.google/sY1SAvxQ4OqbP1EsL"
            target="_blank"
            rel="noopener"
            sx={{
              color: "inherit",
              display: "flex",
              alignItems: "center",
              gap: 0.5,
            }}
            aria-label="Adres"
          >
            <LocationOnIcon sx={{ fontSize: 18 }} />
            <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.9)" }}>
              Zawiercie 42-400 ul. Górnośląska 37
            </Typography>
          </Link>

          <Link
            href="tel:+48783609661"
            sx={{
              color: "inherit",
              display: "flex",
              alignItems: "center",
              gap: 0.5,
            }}
            aria-label="Telefon"
          >
            <PhoneIcon sx={{ fontSize: 18 }} />
            <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.9)" }}>
              783 609 661
            </Typography>
          </Link>
        </Stack>
      </Container>
    </Box>
  );
}

export default function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavBar />
      <Main />
      <Footer />
    </ThemeProvider>
  );
}
