import { Profile } from './SocialProfile/SocilaProfile';
import { Statistics } from './Statistics/Statisctics';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

import transactions from './TransactionHistory/transactions.json';
import friends from './FriendList/friends.json';
import user from './SocialProfile/user.json';
import statisticalData from './Statistics/statistical-data.json';

function App() {
  return (
    <div class="App">
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics title={'Upload stats'} stats={statisticalData} />

      <FriendList friends={friends} />

      <TransactionHistory items={transactions} />
    </div>
  );
}

export default App;
