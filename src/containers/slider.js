import React from 'react';
import sliderData from '../fixtures/sliderData'
import {Slider} from '../components'


export function SliderContainer() {
    return (
        <Slider.Container>
            {sliderData.map((item) => (
                <Slider key={item.id}>
                    <Slider.Pane>
                        <Slider.Title>{item.title}</Slider.Title>
                        <Slider.Body>{item.body}</Slider.Body>
                    </Slider.Pane>
                </Slider>
            ))}
        </Slider.Container>
    )
}
