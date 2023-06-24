let members = [];
let totalSavings = 0;

document.getElementById('savingsForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const tier = document.getElementById('tier').value;

  if (!name || !tier) {
    alert('Please fill in all fields');
    return;
  }

  const tierAmount = parseInt(tier) * 10000;
  let interest = 0;

  if (tierAmount === 10000) {
    interest = tierAmount * 0.05;
  } else if (tierAmount === 20000) {
    interest = tierAmount * 0.1;
  } else if (tierAmount === 30000) {
    interest = tierAmount * 0.2;
  }

  const total = tierAmount + interest;

  members.push({
    name: name,
    tier: tierAmount / 10000,
    initialSavings: tierAmount,
    totalSavings: total
  });

  totalSavings += total;

  updateResults();
  document.getElementById('name').value = '';
  document.getElementById('tier').value = '';
});

function updateResults() {
  const resultsSection = document.getElementById('results');
  const resultsHeading = document.getElementById('resultsHeading');
  const memberList = document.getElementById('memberList');
  const totalSavingsElement = document.getElementById('totalSavings');
  
  memberList.innerHTML = '';
  
  if (members.length > 0) {
    resultsSection.style.display = 'block';
    resultsHeading.style.display = 'block';
    
    members.forEach(function(member) {
      const listItem = document.createElement('li');
      listItem.textContent = `Name: ${member.name}, Tier: ${member.tier}, Initial Savings: ${member.initialSavings}, Total Savings by End of Week: ${member.totalSavings}`;
      memberList.appendChild(listItem);
    });
    
    totalSavingsElement.textContent = `Total Savings: ${totalSavings}`;
  } else {
    resultsSection.style.display = 'none';
    resultsHeading.style.display = 'none';
  }
}
