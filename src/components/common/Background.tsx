import { Environment, Stars } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader";

export const Background = () => {

    const hdrTexture = useLoader(RGBELoader, '/images/textures/space.hdr');

    return (
        <>
            <Stars
                radius={300}
                depth={60}
                count={5000}
                factor={5}
                saturation={0.5}
                fade
            />
            <Environment background={true} map={hdrTexture} />
        </>
    );
}