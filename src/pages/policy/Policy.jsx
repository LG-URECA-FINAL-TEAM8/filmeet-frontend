import styled from 'styled-components';
import { policyText } from '../../data/policy/policy';
function Policy() {
  return (
    <PolicyContainer>
      <Title>{policyText.title}</Title>
      <Paragraph>발효일: {policyText.effectiveDate}</Paragraph>

      {policyText.sections.map((section, id) => (
        <div key={id}>
          <SectionTitle>{section.title}</SectionTitle>

          {section.content &&
            section.content.map((paragraph, pIndex) => (
              <Paragraph key={pIndex}>{paragraph}</Paragraph>
            ))}

          {section.purposes && (
            <List>
              {section.purposes.map((purpose, pIndex) => (
                <ListItem key={pIndex}>
                  <strong>{purpose.name}</strong>: {purpose.description}
                </ListItem>
              ))}
            </List>
          )}

          {section.requiredItems && (
            <List>
              {section.requiredItems.map((item, iIndex) => (
                <ListItem key={iIndex}>{item}</ListItem>
              ))}
            </List>
          )}

          {section.safetyMeasures && (
            <List>
              {section.safetyMeasures.map((measure, mIndex) => (
                <ListItem key={mIndex}>{measure}</ListItem>
              ))}
            </List>
          )}

          {section.contactInfo && (
            <ContactSection>
              <Paragraph>이름: {section.contactInfo.name}</Paragraph>
              <Paragraph>이메일: {section.contactInfo.email}</Paragraph>
            </ContactSection>
          )}

          {section.agentInfo && (
            <ContactSection>
              <Paragraph>대리인 성명: {section.agentInfo.name}</Paragraph>
              <Paragraph>대리인 주소: {section.agentInfo.address}</Paragraph>
              <Paragraph>대리인 전화번호: {section.agentInfo.phone}</Paragraph>
              <Paragraph>대리인 이메일: {section.agentInfo.email}</Paragraph>
            </ContactSection>
          )}

          {section.disputeResolutionChannels && (
            <DisputeSection>
              <SectionTitle>분쟁 해결 채널</SectionTitle>
              <List>
                {section.disputeResolutionChannels.map((channel, channelIndex) => (
                  <ListItem key={channelIndex}>
                    {channel.name} - 연락처: {channel.contact} (웹사이트: {channel.website})
                  </ListItem>
                ))}
              </List>
            </DisputeSection>
          )}
        </div>
      ))}
    </PolicyContainer>
  );
}

const PolicyContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  line-height: 1.6;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 1.5rem;
  text-align: center;
  border-bottom: 2px solid #f0f0f0;
  padding-bottom: 1rem;
  font-family: ${(props) => props.theme.font.fontSuitRegular};
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  color: #2c3e50;
  margin-top: 2rem;
  margin-bottom: 1rem;
  border-left: 4px solid #3498db;
  padding-left: 10px;
  font-family: ${(props) => props.theme.font.fontSuitRegular};
`;

const Paragraph = styled.p`
  color: #333;
  margin-bottom: 1rem;
  font-family: ${(props) => props.theme.font.fontSuitRegular};
`;

const List = styled.ul`
  list-style-type: disc;
  padding-left: 2rem;
  margin-bottom: 1rem;
`;

const ListItem = styled.li`
  margin-bottom: 0.5rem;
  color: #2c3e50;
  font-family: ${(props) => props.theme.font.fontSuitRegular};
`;

const ContactSection = styled.div`
  background-color: #f9f9f9;
  padding: 1.5rem;
  border-radius: 8px;
  margin-top: 2rem;
`;

const DisputeSection = styled.div`
  margin-top: 2rem;
  background-color: #f0f0f0;
  padding: 1.5rem;
  border-radius: 8px;
`;

export default Policy;
