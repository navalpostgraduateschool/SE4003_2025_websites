fetch('sp25/teams.json')
  .then(response => response.json())
  .then(teams => {
    const list = document.getElementById('team-list');
    teams.forEach(team => {
      const li = document.createElement('li');
      const link = document.createElement('a');
      link.href = `sp25/${team}/index.html`;
      link.textContent = team;
      li.appendChild(link);
      list.appendChild(li);
    });
  })
  .catch(error => {
    console.error("Failed to load sp25/teams.json:", error);
  });
