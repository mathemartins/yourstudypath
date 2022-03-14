import React from "react";
import {Body, Container, Item, Pane, Title} from "./styles/slider";
import {FaArrowAltCircleLeft, FaArrowAltCircleRight} from "react-icons/fa";


export default function Slider({children, ...restProps}) {
    return (
        <Item {...restProps}>
            {children}
        </Item>
    )
}

Slider.Container = function SliderContainer({children, ...restProps}) {
    return <Container {...restProps}>{children}</Container>
};

Slider.Pane = function SliderPane({children, ...restProps}) {
    return <Pane {...restProps}>{children}</Pane>
};

Slider.Title = function SliderTitle({children, ...restProps}) {
    return <Title {...restProps}>{children}</Title>
};

Slider.Body = function SliderBody({children, ...restProps}) {
    return <Body {...restProps}>{children}</Body>
};

Slider.RightArrow = function SliderRightArrow({children, ...restProps}) {
    return (
        <FaArrowAltCircleLeft {...restProps}>
            {children}
        </FaArrowAltCircleLeft>
    )
};

Slider.LeftArrow = function SliderLeftArrow({children, ...restProps}) {
    return <FaArrowAltCircleRight {...restProps}>{children}</FaArrowAltCircleRight>
};
