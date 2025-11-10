import { useState, useCallback } from "react";
import {
  Container,
  Typography,
  Box,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  IconButton,
  Paper,
  AppBar,
  Toolbar,
  Grid,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { Delete, Download, CameraAlt } from "@mui/icons-material";
import Camera from "../components/Camera"; // Seu componente Camera existente

export default function CameraPage() {
  const [photos, setPhotos] = useState([]);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handlePhotoTaken = useCallback((photoData) => {
    console.log("Foto tirada:", photoData);
    
    // Adiciona a nova foto ao histórico com timestamp
    const newPhoto = {
      id: Date.now(),
      data: photoData,
      timestamp: new Date().toLocaleString("pt-BR"),
    };
    
    setPhotos(prev => [newPhoto, ...prev]);
  }, []);

  const handleDownloadPhoto = useCallback((photoData, filename = "foto") => {
    const link = document.createElement("a");
    link.href = photoData;
    link.download = `${filename}-${Date.now()}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, []);

  const handleDeletePhoto = useCallback((photoId) => {
    setPhotos(prev => prev.filter(photo => photo.id !== photoId));
  }, []);

  const handleDownloadAll = useCallback(() => {
    photos.forEach((photo, index) => {
      setTimeout(() => {
        handleDownloadPhoto(photo.data, `foto-${index + 1}`);
      }, index * 100); // Pequeno delay para evitar bloqueio do navegador
    });
  }, [photos, handleDownloadPhoto]);

  return (
    <Box sx={{ flexGrow: 1, minHeight: "100vh", bgcolor: "grey.900" }}>
      <AppBar position="static" sx={{ bgcolor: "grey.800" }}>
        <Toolbar>
          <CameraAlt sx={{ mr: 2 }} />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Câmera App
          </Typography>
          {photos.length > 0 && (
            <IconButton
              color="inherit"
              onClick={handleDownloadAll}
              title="Baixar todas as fotos"
            >
              <Download />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Grid container spacing={4}>
          {/* Seção da Câmera */}
          <Grid item xs={12} lg={6}>
            <Paper
              elevation={3}
              sx={{
                p: 3,
                bgcolor: "grey.800",
                color: "white",
                borderRadius: 2,
              }}
            >
              <Typography variant="h5" gutterBottom align="center">
                📷 Tirar Foto
              </Typography>
              <Camera onPhotoTaken={handlePhotoTaken} />
            </Paper>
          </Grid>

          {/* Seção do Histórico de Fotos */}
          <Grid item xs={12} lg={6}>
            <Paper
              elevation={3}
              sx={{
                p: 3,
                bgcolor: "grey.800",
                color: "white",
                borderRadius: 2,
                height: "fit-content",
              }}
            >
              <Typography variant="h5" gutterBottom align="center">
                🖼️ Histórico de Fotos ({photos.length})
              </Typography>

              {photos.length === 0 ? (
                <Box
                  sx={{
                    textAlign: "center",
                    py: 8,
                    color: "grey.500",
                  }}
                >
                  <CameraAlt sx={{ fontSize: 64, mb: 2 }} />
                  <Typography variant="h6">
                    Nenhuma foto tirada ainda
                  </Typography>
                  <Typography variant="body2">
                    As fotos que você tirar aparecerão aqui
                  </Typography>
                </Box>
              ) : (
                <ImageList
                  cols={isMobile ? 2 : 3}
                  gap={12}
                  sx={{
                    mt: 2,
                    maxHeight: 600,
                    overflow: "auto",
                    "&::-webkit-scrollbar": {
                      width: 8,
                    },
                    "&::-webkit-scrollbar-track": {
                      bgcolor: "grey.700",
                    },
                    "&::-webkit-scrollbar-thumb": {
                      bgcolor: "grey.500",
                      borderRadius: 2,
                    },
                  }}
                >
                  {photos.map((photo) => (
                    <ImageListItem
                      key={photo.id}
                      sx={{
                        position: "relative",
                        overflow: "hidden",
                        borderRadius: 2,
                        "&:hover": {
                          transform: "scale(1.05)",
                          transition: "transform 0.2s",
                        },
                      }}
                    >
                      <img
                        src={photo.data}
                        alt={`Foto ${photo.id}`}
                        loading="lazy"
                        style={{
                          width: "100%",
                          height: 120,
                          objectFit: "cover",
                          borderRadius: 8,
                        }}
                      />
                      <ImageListItemBar
                        sx={{
                          background:
                            "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
                          borderBottomLeftRadius: 8,
                          borderBottomRightRadius: 8,
                        }}
                        title={photo.timestamp}
                        position="bottom"
                        actionIcon={
                          <Box sx={{ display: "flex", gap: 0.5 }}>
                            <IconButton
                              sx={{ color: "white" }}
                              onClick={() =>
                                handleDownloadPhoto(
                                  photo.data,
                                  `foto-${photo.id}`
                                )
                              }
                              size="small"
                            >
                              <Download fontSize="small" />
                            </IconButton>
                            <IconButton
                              sx={{ color: "white" }}
                              onClick={() => handleDeletePhoto(photo.id)}
                              size="small"
                            >
                              <Delete fontSize="small" />
                            </IconButton>
                          </Box>
                        }
                        actionPosition="right"
                      />
                    </ImageListItem>
                  ))}
                </ImageList>
              )}
            </Paper>
          </Grid>
        </Grid>

        {/* Estatísticas */}
        {photos.length > 0 && (
          <Paper
            elevation={2}
            sx={{
              p: 2,
              mt: 4,
              bgcolor: "grey.800",
              color: "white",
              borderRadius: 2,
            }}
          >
            <Grid container spacing={2} textAlign="center">
              <Grid item xs={4}>
                <Typography variant="h6" color="primary.main">
                  {photos.length}
                </Typography>
                <Typography variant="body2" color="grey.400">
                  Total de Fotos
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography variant="h6" color="success.main">
                  {new Date().toLocaleDateString("pt-BR")}
                </Typography>
                <Typography variant="body2" color="grey.400">
                  Data da Última
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography variant="h6" color="info.main">
                  {Math.round(
                    photos.reduce((acc, photo) => acc + photo.data.length, 0) /
                      1024
                  )}
                  KB
                </Typography>
                <Typography variant="body2" color="grey.400">
                  Tamanho Total
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        )}
      </Container>
    </Box>
  );
}