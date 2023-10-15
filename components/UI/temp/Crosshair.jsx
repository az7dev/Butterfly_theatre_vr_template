import React from 'react';
import styled from 'styled-components';

const CrosshairStyle = styled.div`
    height: 5px;
    width: 5px;
    background-color: white;
    border-radius: 50%;
    border: solid 1px gray;
    margin: auto;
`;

export default function Crosshair() {
    return <CrosshairStyle />;
}
