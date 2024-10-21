import React, { useEffect, useState } from 'react';

const Car: React.FC = () => {
    const [position, setPosition] = useState({ top: 100, left: 100 });

    const moveCar = (e: KeyboardEvent) => {
        const step = 10; // Define how many pixels the car will move
        switch (e.key) {
            case 'ArrowUp':
                setPosition((prev) => ({ ...prev, top: prev.top - step }));
                break;
            case 'ArrowDown':
                setPosition((prev) => ({ ...prev, top: prev.top + step }));
                break;
            case 'ArrowLeft':
                setPosition((prev) => ({ ...prev, left: prev.left - step }));
                break;
            case 'ArrowRight':
                setPosition((prev) => ({ ...prev, left: prev.left + step }));
                break;
            default:
                break;
        }
    };

    useEffect(() => {
        window.addEventListener('keydown', moveCar);
        return () => {
            window.removeEventListener('keydown', moveCar);
        };
    }, []);

    return (
        <div
            className="absolute text-4xl transition-all duration-150"
            style={{
                top: position.top,
                left: position.left,
            }}
        >
            🚗
        </div>
    );
};

export default Car;
