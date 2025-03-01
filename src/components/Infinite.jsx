import Slider from 'react-infinite-logo-slider'

const Infinite = () => {
    
    return (
        <Slider
            width="250px"
            duration={10}
            pauseOnHover={true}
            blurBorders={false}
            blurBorderColor={'#fff'}
        >
            <Slider.Slide>
                <div>
                Detect. Verify. Stay safe!
                </div>
            </Slider.Slide>
            <Slider.Slide>
                <div>
                Deepfakes cannot fool our AI!
                </div>
            </Slider.Slide>
            <Slider.Slide>
                <div>
                Fake or real?
                </div>
            </Slider.Slide>
        </Slider>
    )
}              
                     
export default Infinite;