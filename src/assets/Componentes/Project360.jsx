import React, { useState, useEffect } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

const UnityProject = () => {
    const [hasStarted, setHasStarted] = useState(false);
    
    const {
        unityProvider,
        isLoaded,
        loadingProgression,
        requestFullscreen,
        unload,
    } = useUnityContext({
        loaderUrl: "buildUnity/Build/Build.loader.js",
        dataUrl: "buildUnity/Build/Build.data",
        frameworkUrl: "buildUnity/Build/Build.framework.js",
        codeUrl: "buildUnity/Build/Build.wasm",
    });

    const [isFullscreen, setIsFullscreen] = useState(false);

    // Manejar cambios de pantalla completa
    useEffect(() => {
        const handleFullscreenChange = () => {
            setIsFullscreen(!!document.fullscreenElement);
        };

        document.addEventListener("fullscreenchange", handleFullscreenChange);
        return () => {
            document.removeEventListener("fullscreenchange", handleFullscreenChange);
        };
    }, []);

    // Función para pantalla completa
    const handleFullscreen = () => {
        if (isLoaded) {
            requestFullscreen(true);
        }
    };

    // Función para iniciar Unity
    const handleStartUnity = () => {
        setHasStarted(true);
    };

    // Cleanup al desmontar
    useEffect(() => {
        return () => {
            if (typeof unload === "function") {
                unload();
            }
        };
    }, [unload]);

    return (
        <div className="unity-container">
            {!hasStarted ? (
                <div className="unity-start-screen">
                    <div className="start-content">
                        <h3>Tour Virtual 360º</h3>
                        <p>Explora este espacio inmersivo en 360 grados</p>
                        <div className="start-features">
                            <span>🎮 Controles intuitivos</span>
                            <span>📱 Compatible móvil</span>
                            <span>🖥️ Pantalla completa</span>
                        </div>
                        <button 
                            className="start-unity-btn"
                            onClick={handleStartUnity}
                        >
                            <span className="btn-icon">▶</span>
                            Iniciar Tour Virtual
                        </button>
                    </div>
                </div>
            ) : (
                <>
                    {!isLoaded && (
                        <div className="unity-loading">
                            <div className="loading-bar">
                                <div 
                                    className="loading-progress"
                                    style={{ width: `${loadingProgression * 100}%` }}
                                />
                            </div>
                            <p>Cargando tour virtual... {Math.round(loadingProgression * 100)}%</p>
                        </div>
                    )}
                    
                    <div 
                        className="unity-game-wrapper"
                        style={{ 
                            display: isLoaded ? "block" : "none",
                            position: "relative"
                        }}
                    >
                        <Unity
                            unityProvider={unityProvider}
                            matchWebGLToCanvasSize={true}
                            style={{ 
                                width: "100%", 
                                height: "400px",
                                borderRadius: isFullscreen ? "0" : "8px",
                                transition: "border-radius 0.3s ease"
                            }}
                        />
                        
                        {isLoaded && (
                            <div className={`unity-controls ${isFullscreen ? "fullscreen-mode" : ""}`}>
                                <button 
                                    className="control-btn fullscreen-btn"
                                    onClick={handleFullscreen}
                                    title="Pantalla completa"
                                >
                                    {isFullscreen ? "Salir de pantalla completa" : "Pantalla completa"}
                                </button>
                            </div>
                        )}

                        {isFullscreen && (
                            <div className="fullscreen-info">
                                <p>Presiona ESC para salir de pantalla completa</p>
                            </div>
                        )}
                    </div>
                </>
            )}
        </div>
    );
};

export default UnityProject;