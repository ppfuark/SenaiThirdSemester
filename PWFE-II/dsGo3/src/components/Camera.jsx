import { useState, useEffect, useRef, useCallback } from "react";

export default function Camera({ onPhotoTaken }) {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [photo, setPhoto] = useState(null);
  const [isCameraActive, setIsCameraActive] = useState(false);
  const [error, setError] = useState(null);

  const startCamera = useCallback(async () => {
    try {
      setError(null);
      const stream = await navigator.mediaDevices.getUserMedia({ 
        video: { 
          facingMode: "environment",
          width: { ideal: 1920 },
          height: { ideal: 1080 }
        } 
      });
      
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        setIsCameraActive(true);
      }
    } catch (error) {
      console.error("Erro ao acessar a câmera:", error);
      setError("Não foi possível acessar a câmera. Verifique as permissões.");
      setIsCameraActive(false);
    }
  }, []);

  const stopCamera = useCallback(() => {
    if (videoRef.current?.srcObject) {
      const tracks = videoRef.current.srcObject.getTracks();
      tracks.forEach((track) => track.stop());
      videoRef.current.srcObject = null;
      setIsCameraActive(false);
    }
  }, []);

  useEffect(() => {
    startCamera();

    return () => {
      stopCamera();
    };
  }, [startCamera, stopCamera]);

  const takePicture = useCallback(() => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    
    if (!video || !canvas || !isCameraActive) return;

    const context = canvas.getContext("2d");
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    
    context.drawImage(video, 0, 0, canvas.width, canvas.height);

    const image = canvas.toDataURL("image/jpeg", 0.8);
    setPhoto(image);
    if (onPhotoTaken) onPhotoTaken(image);
    
    stopCamera();
  }, [isCameraActive, onPhotoTaken, stopCamera]);

  // Função corrigida para download
  const downloadPhoto = useCallback(() => {
    if (!photo) return;

    // Criar um link temporário para download
    const link = document.createElement('a');
    link.href = photo;
    
    // Gerar um nome de arquivo com timestamp
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    link.download = `foto-${timestamp}.jpg`;
    
    // Simular clique no link
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, [photo]);

  const restart = useCallback(() => {
    setPhoto(null);
    setError(null);
    startCamera();
  }, [startCamera]);

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible' && !photo && !isCameraActive) {
        startCamera();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [photo, isCameraActive, startCamera]);

  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-4">
      <div className="relative w-full max-w-md rounded-2xl overflow-hidden shadow-lg bg-gray-800">
        {error ? (
          <div className="w-full aspect-video flex items-center justify-center bg-gray-700 rounded-2xl">
            <div className="text-center p-4">
              <div className="text-4xl mb-2">📷</div>
              <p className="text-red-400">{error}</p>
              <button
                onClick={startCamera}
                className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg"
              >
                Tentar Novamente
              </button>
            </div>
          </div>
        ) : !photo ? (
          <>
            <video
              ref={videoRef}
              autoPlay
              playsInline
              muted
              className="w-full h-auto object-cover rounded-2xl"
            />
            {!isCameraActive && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
              </div>
            )}
          </>
        ) : (
          <img
            src={photo}
            alt="Foto capturada"
            className="w-full h-auto object-cover rounded-2xl"
          />
        )}
        <canvas ref={canvasRef} className="hidden" />
      </div>

      <div className="mt-6 flex gap-4">
        {!photo ? (
          <button
            onClick={takePicture}
            disabled={!isCameraActive}
            className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-medium py-2 px-6 rounded-lg shadow-md transition-all flex items-center gap-2"
          >
            📸 {isCameraActive ? "Tirar Foto" : "Carregando..."}
          </button>
        ) : (
          <div className="flex gap-4">
            <button
              onClick={restart}
              className="bg-gray-700 hover:bg-gray-600 text-white font-medium py-2 px-6 rounded-lg shadow-md transition-all flex items-center gap-2"
            >
              🔁 Nova Foto
            </button>
            <button
              onClick={downloadPhoto}
              className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-6 rounded-lg shadow-md transition-all flex items-center gap-2"
            >
              📥 Baixar Foto
            </button>
          </div>
        )}
      </div>

      {photo && (
        <p className="mt-4 text-sm text-gray-400 text-center max-w-md">
          Foto capturada com sucesso! Clique em "Baixar Foto" para salvar em seu dispositivo.
        </p>
      )}
    </section>
  );
}