import { closeModal, openModal } from '@redq/reuse-modal';
import playIcon from 'common/assets/image/saasAppDark/icons/play.svg';
import banner from 'common/assets/image/saasAppDark/video-banner.png';
import Button from 'common/components/Button';
import Heading from 'common/components/Heading';
import NextImage from 'common/components/NextImage';
import Monitoring from '../Monitoring/index.js';
import Text from 'common/components/Text';
import Container from 'common/components/UI/Container';
import { videoIntro } from 'common/data/SaasAppDark';
import Section, {
  FeatureItem, Figure, IntroFeatures, PlayButton, SectionHeading,
  VideoWrapper
} from './videoIntro.style';



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

const VideoIntro = () => {
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
  const { features } = videoIntro;

  return (
    <Section id="portfolio">
      <Container width="1170px">
        <div style={{'padding': '80px 0'}}>
          <SectionHeading>
            <Heading content="Stay focused" />
            <Text content="Control your music without ever leaving fullscreen mode" />
          </SectionHeading>
          <Figure>
            <NextImage src={banner} alt="video banner" />
            <PlayButton onClick={handleVideoModal}>
              <img src={playIcon?.src} alt="play Icon" />
            </PlayButton>
          </Figure>
        </div>
  
      </Container>
      <Container width="1170px">
        <div style={{'padding-top': '100px'}}>
          <SectionHeading>
            <Heading content="Say goodbye to the mouse" />
            <Text content="Because moving your hand to the mouse is just too much work" />
          </SectionHeading>
          <Figure>
          <NextImage src={banner} alt="video banner" />
          <PlayButton onClick={handleVideoModal}>
            <img src={playIcon?.src} alt="play Icon" />
          </PlayButton>
        </Figure>
        </div>
      </Container>
      
      <Container width="1170px">
        <div style={{'padding-top': '100px'}}>
          <SectionHeading>
            <Heading content="Two is better than one" />
            <Text content="Detects which monitor you’re on, so you don't have to." />
          </SectionHeading>
          <Figure>
            <NextImage src={banner} alt="video banner" />
            <PlayButton onClick={handleVideoModal}>
              <img src={playIcon?.src} alt="play Icon" />
            </PlayButton>
          </Figure>
          </div>
      </Container>
    </Section>
  );
};

export default VideoIntro;
