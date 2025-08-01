const API_URL = 'http://localhost:3000/api';

function loadDashboard() {
  fetch(`${API_URL}/user`)
    .then(res => res.json())
    .then(data => {
      document.getElementById("name").textContent = data.name;
      document.getElementById("referral").textContent = data.referralCode;
      document.getElementById("donations").textContent = data.donationsRaised;
      
      const rewardsList = document.getElementById("rewards");
      data.rewards.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        rewardsList.appendChild(li);
      });
    });
}

function loadLeaderboard() {
  fetch(`${API_URL}/leaderboard`)
    .then(res => res.json())
    .then(data => {
      const list = document.getElementById("leaderboard");
      data.forEach(user => {
        const li = document.createElement('li');
        li.textContent = `${user.name} - ₹${user.donations}`;
        list.appendChild(li);
      });
    });
}