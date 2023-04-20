import Box from 'common/components/Box';
import Heading from 'common/components/Heading';
import Text from 'common/components/Text';
import Container from 'common/components/UI/Container';
import { statsCounter } from 'common/data/SaasAppDark';
import Link from 'next/link';
import { Icon } from 'react-icons-kit';
import { androidArrowForward } from 'react-icons-kit/ionicons/androidArrowForward';
import Section, { Grid } from './statsCounter.style';

const StatsCounter = () => {
  const { blockTitle, posts } = statsCounter;
  const { subtitle, title, text, button } = blockTitle;
  return (
    <></>
  );
};

export default StatsCounter;
