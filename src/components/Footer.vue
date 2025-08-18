<template>
  <footer class="footer-mobile">
    <div class="buttons">
      <button href="#home">Home</button>
      <button href="#about">About</button>
      <button href="#contact">Contact</button>
    </div>
  </footer>
  <footer class="footer" role="contentinfo">
    <p class="footer-text">
      © 2025
      <a
        href="https://chanhokim.ca"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visit Chanho Kim's Portfolio website (opens in a new tab)"
        >Chanho Kim</a
      >
      |
      <a
        href="https://github.com/chanho-chris-kim?tab=repositories"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visit Chanho Kim's GitHub profile (opens in a new tab)"
        >github.com/chanho-chris-kim</a
      >
    </p>
  </footer>
</template>

<style scoped>
.footer {
  display: none;
}
.footer-mobile {
  position: fixed;
  bottom: 0;
  left: 0;
  background-color: var(--grey-color);
  width: 100vw;
  height: 3.3rem;
  z-index: 2;
}
.buttons {
  padding-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: var(--text-color);
  font-family: var(--font-family);
}
button {
  position: relative;
  color: var(--text-color);
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: none;
}
button:not(:last-child)::after {
  content: "|";
  position: absolute;
  right: -13.5vw;
  color: var(--text-color);
  pointer-events: none;
}
.buttons button:nth-child(1):hover,
.buttons button:nth-child(1):focus,
.buttons button:nth-child(1):active {
  color: var(--red-color);
}

.buttons button:nth-child(2):hover,
.buttons button:nth-child(2):focus,
.buttons button:nth-child(2):active {
  color: var(--orange-color);
}

.buttons button:nth-child(3):hover,
.buttons button:nth-child(3):focus,
.buttons button:nth-child(3):active {
  color: var(--green-color);
}

/* Tablet and up */
@media (min-width: 768px) {
  .footer-mobile {
    display: none;
  }
  .footer {
    display: block;
    margin-top: 3rem;
  }
  .footer-text {
    font-family: var(--font-family);
    text-align: right;
    margin: 2rem var(--margin-tablet);
  }
  .footer-text a {
    text-decoration: none;
    color: inherit;
    font-family: var(--font-family);
  }
  .footer-text a:nth-child(1):hover,
  .footer-text a:nth-child(1):focus,
  .footer-text a:nth-child(1):active {
    color: var(--orange-color);
  }
  .footer-text a:hover,
  .footer-text a:active,
  .footer-text a:focus {
    color: var(--green-color);
  }
}
</style>
