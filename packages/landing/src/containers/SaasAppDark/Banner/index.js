import { useRef, useEffect } from 'react';
import { openModal, closeModal } from '@redq/reuse-modal';
import Container from 'common/components/UI/Container';
import Text from 'common/components/Text';
import Button from 'common/components/Button';
import videoUrl from "common/assets/videos/demo.mp4"

import Section, {
  BannerContentWrapper,
  BannerContent,
  VideoWrapper,
  Buttons,
  Figure,
} from './banner.style';

// close button for modal
const CloseModalButton = () => (
  <Button
    className="modalCloseBtn"
    variant="fab"
    onClick={() => closeModal()}
    icon={<i className="flaticon-plus-symbol" />}
  />
);

const ModalContent = () => (
  <VideoWrapper>
    <iframe
      title="Video"
      src="https://www.youtube.com/embed/hW98BFnVCm8"
      frameBorder="0"
    />
  </VideoWrapper>
);

const Banner = () => {
  // modal handler
  const handleVideoModal = () => {
    openModal({
      config: {
        className: 'video-modal',
        disableDragging: true,
        default: {
          width: 'auto',
          height: 'auto',
          x: 0,
          y: 0,
        },
      },
      component: ModalContent,
      componentProps: {},
      closeComponent: CloseModalButton,
      closeOnClickOutside: true,
    });
  };
  
  const videoRef = useRef(null);
  const playVideo = () => {
    videoRef.current.play();
  };
  
  useEffect(() => {
    videoRef.current.play();
  }, [])

  return (
    <Section id="home">
      <Container width="1300px">
        <BannerContentWrapper>
          <BannerContent>
            <h2 className="animate__animated animate__fadeInUp">
            Turbocharged music controls
            </h2>
            <Text
              className="animate__animated animate__fadeInUp"
              content="A beautifully designed app for music at your fingertips"
            />
            <Text
              className="animate__animated animate__fadeInUp"
              content="from anywhere, at anytime."
            />
            <Buttons>
              <Button
                colors="primary"
                title="Download Now"
                className="button-one"
              />
              <div style={{'margin-top':'10px'}}> Version 1.2.6 (beta)</div>
          
            </Buttons>
          </BannerContent>
          <Figure className="hero-banner">
            <video ref={videoRef} autoPlay preload="auto"  controls style={{'width': '100%', borderRadius: '20px'}}>
              <source src={videoUrl} type="video/mp4" />
            </video>
          </Figure>
        </BannerContentWrapper>
      </Container>
    </Section>
  );
};

export default Banner;
