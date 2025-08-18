<template>
  <div class="navbar">
    <div class="header">
      <a href="#home" aria-label="Go to home">
        <img src="../assets/img/quickpick.png" alt="Logo" class="logo" />
        <h1>QuickPick Analyzer</h1>
      </a>
    </div>
    <div class="mobile-text-box">
      <a
        href="https://github.com/chanho-chris-kim?tab=repositories"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visit Chanho Kim's GitHub profile (opens in a new tab)"
        ><img
          src="../assets/icons/github_icon.png"
          class="github-icon"
          alt="github icon"
      /></a>
      <p>© 2025 Chanho Kim</p>
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
  font-family: var(--font-family);
  padding: 0 var(--margin-mobile);
  height: 4.5rem;
}
.header a {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: inherit;
}
h1 {
  margin-left: 0.7rem;
  font-size: 1.4rem;
}
.logo {
  width: 2rem;
}
.nav {
  display: none;
}
.mobile-text-box {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-top: 1.2rem;
  font-size: 0.5rem;
}
.github-icon {
  width: 4.5vw;
  filter: brightness(0) saturate(100%);
  transition: filter 0.2s ease;
}
.github-icon:hover,
.github-icon:active,
.github-icon:focus {
  filter: brightness(0) saturate(100%) invert(66%) sepia(47%) saturate(409%)
    hue-rotate(63deg) brightness(96%) contrast(91%);
}

/* Tablet */
@media (min-width: 768px) {
  .mobile-text-box {
    display: none;
  }
  .navbar {
    padding: 0.5rem var(--margin-tablet);
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
    font-family: var(--font-family);
    list-style-type: none;
  }
  .nav ul a {
    text-decoration: none;
    color: var(--text-color);
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
    padding: 0.6rem var(--margin-desktop);
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
