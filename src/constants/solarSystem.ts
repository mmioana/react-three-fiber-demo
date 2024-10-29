export const SOLAR_SYSTEM_CONFIG = {
    Sun: {
        position: [0, 0, 0],
        radius: 2.4,
        orbitalSpeed: 0,
        orbitalRadius: 0,
        moons: [],
        texture: "/images/textures/sun.jpg",
        rotationSpeed: 0.01
    },
    Mercury: {
        position: [4.88, 0, 0],
        radius: 0.2,
        orbitalSpeed: 0.02,
        orbitalRadius: 2.5,
        moons: [],
        texture: "/images/textures/mercury.jpg",
        rotationSpeed: 0.02
    },
    Venus: {
        position: [6.23, 0, 0],
        radius: 0.4,
        orbitalSpeed: 0.015,
        orbitalRadius: 3.5,
        moons: [],
        texture: "/images/textures/venus.jpg",
        rotationSpeed: 0.01,
        atmosphere: {
            position: [1.1, 64, 64],
            opacity: 0.2,
            texture: "/images/textures/venus-athmosphere.jpg",
            emissiveIntensity: 0.15,
            emissiveColor: "#ffffff"
        }
    },
    Earth: {
        position: [6.5, 0, 0],
        radius: 0.4,
        orbitalSpeed: 0.01,
        orbitalRadius: 4.5,
        moons: [
            {
                name: "Moon",
                radius: 0.1,
                orbitalSpeed: 0.02,
                orbitalRadius: 1.2,
                texture: "/images/textures/moon.jpg",
                rotationSpeed: 0.1
            }
        ],
        texture: "/images/textures/earth.jpg",
        rotationSpeed: 0.01
    },
    Mars: {
        position: [7.0, 0, 0],
        radius: 0.3,
        orbitalSpeed: 0.007,
        orbitalRadius: 5.5,
        moons: [
            {
                name: "Phobos",
                radius: 0.05,
                orbitalSpeed: 0.03,
                orbitalRadius: 0.9,
                texture: "/images/textures/phobos.jpg",
                rotationSpeed: 0.1
            },
            {
                name: "Deimos",
                radius: 0.03,
                orbitalSpeed: 0.02,
                orbitalRadius: 1.0,
                texture: "/images/textures/deimos.jpg",
                rotationSpeed: 0.1
            }
        ],
        texture: "/images/textures/mars.jpg",
        rotationSpeed: 0.02
    },
    Jupiter: {
        position: [8.0, 0, 0],
        radius: 0.9,
        orbitalSpeed: 0.005,
        orbitalRadius: 6.5,
        moons: [],
        texture: "/images/textures/jupiter.jpg",
        rotationSpeed: 0.005
    },
    Saturn: {
        position: [9.0, 0, 0],
        radius: 0.75,
        orbitalSpeed: 0.004,
        orbitalRadius: 7.5,
        moons: [],
        texture: "/images/textures/saturn.jpg",
        rotationSpeed: 0.005,
        ring: {
            radius: 1.5,
            thickness: 0.05,
            texture: "/images/textures/saturn-ring.png"
        }
    },
    Uranus: {
        position: [10.0, 0, 0],
        radius: 0.5,
        orbitalSpeed: 0.003,
        orbitalRadius: 8.5,
        moons: [],
        texture: "/images/textures/uranus.jpg",
        rotationSpeed: 0.004
    },
    Neptune: {
        position: [11.0, 0, 0],
        radius: 0.5,
        orbitalSpeed: 0.002,
        orbitalRadius: 9.5,
        moons: [],
        texture: "/images/textures/neptune.jpg",
        rotationSpeed: 0.004
    },
    Pluto: {
        position: [12.0, 0, 0],
        radius: 0.2,
        orbitalSpeed: 0.001,
        orbitalRadius: 10.5,
        moons: [],
        texture: "/images/textures/pluto.jpg",
        rotationSpeed: 0.005
    }
} as const;
