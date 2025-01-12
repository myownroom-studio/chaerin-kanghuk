import styled from '@emotion/styled';
import data from 'data.json';
import Host from '../Contact/Host.tsx';
import RoundButton from '@/components/RoundButton.tsx';
import { Caption, Paragraph } from '@/components/Text.tsx';
import { google } from 'calendar-link';

const Invitation = () => {
  const { greeting } = data;
  
  const event = {
    title: "강혁과 채린의 결혼식",
    location: "경기 광명시 광명역로 21",
    description: "경기도 광명시 광명역로 21 KTX광명역 동편 B1",
    start: "2025-04-19 16:30:00 +0900",
    duration: [1, "hours"],
  }
  const googleCalendarUrl = google(event);

  return (
    <InvitationWrapper>
      <Paragraph>{greeting.message}</Paragraph>
      <Host />
      <Caption textAlign={'center'}>{greeting.eventDetail}</Caption>
      {/* TODO: 구글캘린더 추가하기 기능을 넣는다면 링크 수정 */}
      <RoundButton
        target="_blank"
        href={googleCalendarUrl}
        rel="noreferrer">
        구글 캘린더 추가하기
      </RoundButton>
    </InvitationWrapper>
  );
};

export default Invitation;

const InvitationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;
