function createSnowflake() {
  const snowflake = document.createElement('div');
  snowflake.classList.add('snowflake');
  snowflake.innerHTML = ['❄', '❅', '❆'][Math.floor(Math.random() * 3)];
  snowflake.style.left = Math.random() * 100 + 'vw';
  snowflake.style.animationDuration = Math.random() * 3 + 4 + 's';
  snowflake.style.opacity = Math.random() * 0.5 + 0.5;
  snowflake.style.fontSize = Math.random() * 10 + 10 + 'px';
  document.getElementById('snow').appendChild(snowflake);

  setTimeout(() => snowflake.remove(), 10000);
}

setInterval(createSnowflake, 150);