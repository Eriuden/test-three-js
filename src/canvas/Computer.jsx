import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../loader"

//A noter, il existe des tonnes de modèles gratuit sur le net
//On a déjà ici des éléments de base, il faudra juste retravailler les lumières
//SketchFab m'a été conseillé

export const Computers = () => {
    //import du modèle de base (non présent ici cependant)
    const computer = useGLTF("./desktop_pc/scene.gltf")

    /*mesh est la base d'un élément en three JS
    HemisphereLight, et bien, il faut une srouce de lumière en 3D !
    pinLight crée un point de lumière, comme un mini soleil, et là par contre
    ca peut générer des ombres
    SpotLight, comme son nom l'indique, fait une source de lumière principale
    */

    return (
        <mesh>
            <hemisphereLight intensity={0.15} groundColor={"black"} />
            <pointLight intensity={1} />
            <spotLight
                position={[-20,50,10]} 
                angle={0.12}
                penumbra={1}
                intensity={1}
                castShadow
                shadow-mapsize={1024}
            />
            <primitive 
                object={computer.scene}
                scale={0.75}
                position=/*x,y,z*/{[0,-3.25,-1.5]}
                rotation={[-0.01,-0.2,-0.1]}
            />
        </mesh>
    )
}

/*Suspense sert d'attente au chargement du composant
orbitsControls est en quelque sorte la caméra, du moins, elle lui permet d'orbiter
*/
export const computersCanvas = () => {

    const [isMobile, setIsMobile] = useState(false)

    useEffect(()=> {
        const mediaQuery = window.matchMedia('(max-width:500')

        setIsMobile(mediaQuery.matches)

        const handleMediaQueryChange = (e) => {
            setIsMobile(e.matches)
        }

        mediaQuery.addEventListener("change", handleMediaQueryChange)

        return()=> {
            mediaQuery.removeEventListener("change", handleMediaQueryChange)
        }
    }, [])

    return(

        <Canvas frameloop="demand"
            shadows
            camera={{ position: [20,3,5], fov: 25 }}
            gl={{ preserveDrawingBuffer: true}}
        >

        <Suspense fallback={<CanvasLoader />}>
            <OrbitControls enableZoom={false}
                maxPolarAngle={Math.PI /2}
                minPolarAngle={Math.PI /2}
            />
            <Computers />
        </Suspense>

        <Preload all />

    </Canvas>

    )
    
}