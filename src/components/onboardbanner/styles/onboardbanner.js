import styled from "styled-components/macro";

export const Inner = styled.div`
    width: 720px;
    height: 560px;
    display: flex;
    align-items: flex-end;
    background-color: #f2f3f8;
    overflow: hidden;
`;

export const Container = styled.div`
    width: 720px;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 600px;
    background-color: var(--neutral--white);
`;

export const Pane = styled.div`
    width: 1008px;
    height: 818px;
    position: relative;
    margin-left: -140px;
    margin-bottom: -255.71px;
`;

export const OverlayImage = styled.img`
    position: absolute;
    width: 720px;
    height: 430px;
    top: 0;
    left: 140px;
`;

export const DeviceImage = styled.img`
    position: absolute;
    width: 1008px;
    height: 760px;
    top: 58px;
    left: 0;
`;
