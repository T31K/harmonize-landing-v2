import { default as Heading, default as Text } from 'common/components/Text';
import Container from 'common/components/UI/Container';
import { services } from 'common/data/SaasAppDark';
import Section, { Grid, Item, SectionHeading } from './services.style';

const Services = () => {
  return (
    <Section id="features">
      <Container width="1400px">
        <SectionHeading>
          <Heading
            as="h2"
            content="Get More Done with Less"
          />
          <Text content="A Deep Dive into Our Top-Notch Features!" />
        </SectionHeading>
        <Grid>
          {services.map((service) => (
            <Item key={service.id}>
              <span className="icon">
                <i />
              </span>
              <Heading as="h4" content={service.title} />
            </Item>
          ))}
        </Grid>
      </Container>
    </Section>
  );
};

export default Services;
