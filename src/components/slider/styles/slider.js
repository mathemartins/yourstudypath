import styled, {css} from 'styled-components/macro';

export const AlignTextMiddle = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Item = styled.div``;

export const Container = styled.div`
    width: 720px;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 300px;
    background-color: var(--neutral--white);
`;

export const Pane = styled.div``;

export const Title = styled.h1`
    ${AlignTextMiddle}
    width: 311px;
    height: 29px;
    color: var(--grey);
    font-size: var(--font-size-xxl);
    text-align: center;
    letter-spacing: -0.12px;
`;

export const Body = styled.p`
    ${AlignTextMiddle}
    width: 311px;
    height: 72px;
    color: var(--light-grey);
    font-size: var(--font-size-m);
    text-align: center;
    letter-spacing: 0;
    line-height: 24.4px;
`;
