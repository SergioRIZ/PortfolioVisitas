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
                                height: "600px", // Aumentado de 400px a 600px
                                borderRadius: isFullscreen ? "0" : "8px",
                                transition: "border-radius 0.3s ease"
                            }}
                        />
                        
                        {isLoaded && (
                            <button 
                                className="fullscreen-icon-btn"
                                onClick={handleFullscreen}
                                title={isFullscreen ? "Salir de pantalla completa" : "Pantalla completa"}
                            >
                                {isFullscreen ? (
                                    // Ícono para salir de pantalla completa
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <polyline points="4,14 10,14 10,20"></polyline>
                                        <polyline points="20,10 14,10 14,4"></polyline>
                                        <line x1="14" y1="10" x2="21" y2="3"></line>
                                        <line x1="3" y1="21" x2="10" y2="14"></line>
                                    </svg>
                                ) : (
                                    // Ícono para pantalla completa
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <polyline points="15,3 21,3 21,9"></polyline>
                                        <polyline points="9,21 3,21 3,15"></polyline>
                                        <line x1="21" y1="3" x2="14" y2="10"></line>
                                        <line x1="3" y1="21" x2="10" y2="14"></line>
                                    </svg>
                                )}
                            </button>
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