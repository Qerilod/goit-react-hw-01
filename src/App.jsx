import React from "react";
// task 1
import Profile from "./components/Profile/Profile";
import userData from "./userData.json";
// task 2
import FriendList from "./components/FriendsList/FriendList";
import friends from "./friends.json";
// task 3
import transactions from "./transactions.json";
import TransactionHistory from "./components/Transaction/TransactionHistory";

const App = () => {
  return (
    <div>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};

export default App;
