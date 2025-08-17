<template>
  <div class="navbar">
    <div class="header">
      <a href="#home" aria-label="Go to home">
        <img src="../assets/img/quickpick.png" alt="Logo" class="logo" />
        <h1>QuickPick Analyzer</h1>
      </a>
    </div>
    <div class="nav">
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: var(--white-color);
  font-family: var(--font-family);
  background-color: var(--text-color);
  padding: 0 1rem;
  height: 4.5rem;
}
.header a {
  display: flex;
  align-items: center;
  gap: var(--gap);
  text-decoration: none;
  color: inherit;
}
h1 {
  font-size: 1.4rem;
}
.logo {
  width: 2rem;
}
.nav {
  display: none;
}

/* Tablet */
@media (min-width: 768px) {
  .navbar {
    padding: 0.5rem 2rem;
  }
  h1 {
    font-size: 1.5rem;
  }
  .logo {
    width: 2.2rem;
  }
  .nav {
    display: block;
  }
  .nav ul {
    display: flex;
    align-items: center;
    color: var(--text-color);
    font-family: var(--font-family);
    list-style-type: none;
  }
  .nav ul a {
    text-decoration: none;
    color: var(--white-color);
    margin-right: 1.1rem;
  }
  .nav ul li:nth-child(1) a:hover,
  .nav ul li:nth-child(1) a:focus,
  .nav ul li:nth-child(1) a:active {
    color: var(--red-color);
  }

  .nav ul li:nth-child(2) a:hover,
  .nav ul li:nth-child(2) a:focus,
  .nav ul li:nth-child(2) a:active {
    color: var(--orange-color);
  }

  .nav ul li:nth-child(3) a:hover,
  .nav ul li:nth-child(3) a:focus,
  .nav ul li:nth-child(3) a:active {
    color: var(--green-color);
  }
}
/* Desktop */
@media (min-width: 1280px) {
  .navbar {
    padding: 0.6rem 3rem;
  }
  h1 {
    font-size: 1.6rem;
  }
  .logo {
    width: 2.4rem;
  }
  .nav ul a {
    font-size: 1.2rem;
    margin-right: 3rem;
  }
}
</style>
