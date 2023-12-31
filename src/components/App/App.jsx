import { Profile } from '../Profile/Profile';
import { Statistics } from '../Statistics/Statistics';
import { FriendList } from '../FriendList/FriendList';
import { TransactionHistory } from '../TransactionHistory/TransactionHistory';
import data from 'data/data.json';
import user from 'data/user.json';
import friends from 'data/friends.json';
import transactions from 'data/transactions.json';
import { Container } from './App.styled';
export const App = () => {
  return (
    <Container>
      <Profile {...user} />
      <Statistics title="UPLOAD STATS" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </Container>
  );
};
