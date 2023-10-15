import React from 'react';
import './Footer.css';

export function Footer() {
    const controlOptions = [
        { keys: ['Esc'], action: 'Get Out' },
        { keys: ['Click on Screen'], action: 'Get In' },
        { keys: ['Mouse'], action: 'Rotation' },
        { keys: ['↑', 'W'], action: 'Forward' },
        { keys: ['←', 'A'], action: 'Left' },
        { keys: ['→', 'D'], action: 'Right' },
        { keys: ['↓', 'S'], action: 'Backward' },
        { keys: ['Space'], action: 'Jump' }
    ];
    return (
        <div className="foot">
            <div className="keys">
                {controlOptions.map(({ keys, action }) => (
                    <div className="popup-item" key={action}>
                        <div>{action}</div>
                        <div className="popup-item-keys">
                            {keys.map((key) => (
                                <span className="popup-item-key" key={key}>
                                    <span>{key}</span>
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
