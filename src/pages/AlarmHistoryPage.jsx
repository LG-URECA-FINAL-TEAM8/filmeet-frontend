import AlarmHistoryList from '../components/AlarmHistoryList';
import TopHeader from '../components/common/back/TopHeader';
import { AlarmhistoryPageWrapper } from '../styles/alarmhistory/alarmhistory';

const AlarmHistoryPage = () => {
  
  return (
    <AlarmhistoryPageWrapper>
        <TopHeader title="알림 목록"/>
        <AlarmHistoryList />
    </AlarmhistoryPageWrapper>
  );
};

export default AlarmHistoryPage;
