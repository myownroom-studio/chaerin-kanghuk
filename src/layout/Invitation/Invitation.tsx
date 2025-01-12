import styled from '@emotion/styled';
import data from 'data.json';
import Host from '../Contact/Host.tsx';
import RoundButton from '@/components/RoundButton.tsx';
import { Caption, Paragraph } from '@/components/Text.tsx';
import { google } from 'calendar-link';

const Invitation = () => {
  const { greeting } = data;
  
  const event = {
    title: "강혁\u2764\uFE0F채린의 결혼식",
    location: "경기 광명시 광명역로 21",
    description: "[주소] 경기도 광명시 광명역로 21 KTX광명역 동편 B1\n\n[연락처] 02-899-7400\n\n[주차장] 1주차장) 센트럴자이 상가 주차장 B3층 (2시간 무료)\n경기도 광명시 광명역로 28\n(광명센트럴자이 오피스텔) 입력\n\n제2주차장) 파크자이 오피스텔 주차장 B2층 (2시간 무료)\n경기도 광명시 광명역로 26\n(광명 파크자이 오피스텔) 입력",
    start: "2025-04-19 16:30:00 +0900",
    end: "2025-04-19 17:30:00 +0900",
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
