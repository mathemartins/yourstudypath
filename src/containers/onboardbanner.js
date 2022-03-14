import React from 'react';
import {OnboardBanner} from "../components";

export function OnboardBannerContainer() {
    return (
        <OnboardBanner.Container>
            <OnboardBanner>
                <OnboardBanner.Pane>
                    <OnboardBanner.OverlayImage src="images/artboard-mask.png" />
                    <OnboardBanner.DeviceImage src="images/device-macbook-pro.svg"/>
                </OnboardBanner.Pane>
            </OnboardBanner>
        </OnboardBanner.Container>
    )
}
