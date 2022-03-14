import React from 'react';
import {Container, DeviceImage, Inner, OverlayImage, Pane} from "./styles/onboardbanner";

export default function OnboardBanner({children, ...restProps}) {
    return (
        <Inner {...restProps}>
            {children}
        </Inner>
    )
}

OnboardBanner.Container = function OnboardBannerContainer({children, ...restProps}) {
    return <Container {...restProps}>{children}</Container>
};

OnboardBanner.Pane = function OnboardBannerPane({children, ...restProps}) {
    return <Pane {...restProps}>{children}</Pane>
};

OnboardBanner.OverlayImage = function OnboardBannerOverlayImage({children, ...restProps}) {
    return <OverlayImage {...restProps}>{children}</OverlayImage>
};

OnboardBanner.DeviceImage = function OnboardBannerDeviceImage({children, ...restProps}) {
    return <DeviceImage {...restProps}>{children}</DeviceImage>
};
