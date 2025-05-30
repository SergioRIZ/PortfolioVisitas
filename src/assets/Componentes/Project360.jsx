import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

const UnityProject = () => {
    const { unityProvider } = useUnityContext({
        loaderUrl: "buildUnity/Build/Build.loader.js",
        dataUrl: "buildUnity/Build/Build.data",
        frameworkUrl: "buildUnity/Build/Build.framework.js",
        codeUrl: "buildUnity/Build/Build.wasm",
    });
    return (
        <span style={{ width: "100%", height: "100%", margin: "0 auto"}}>
            < Unity
                unityProvider={unityProvider}
                matchWebGLToCanvasSize={true}
                style={{ width: "100%", height: "auto" }}
            />
        </span>

    );
}

export default UnityProject;