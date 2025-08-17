<template>
  <div class="footer">
    <ul>
      <li><a href="#home">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </div>
</template>

<style scoped>
.footer {
  position: absolute;
  bottom: 0;
  left: 0;
  background-color: var(--grey-color);
  width: 100vw;
  height: 3.3rem;
}
.footer ul {
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: var(--gap);
  color: var(--text-color);
  font-family: var(--font-family);
  list-style-type: none;
}
.footer ul li {
  position: relative;  
}
.footer ul li:not(:last-child)::after {
  content: "|";             
  position: absolute;
  right: -13.5vw;                
  color: var(--white-color);   
}
.footer ul li a {
  text-decoration: none;
  color: var(--white-color); 
} 
.footer ul li:nth-child(1) a:hover,
.footer ul li:nth-child(1) a:focus,
.footer ul li:nth-child(1) a:active {
  color: var(--red-color);
}
.footer ul li:nth-child(2) a:hover,
.footer ul li:nth-child(2) a:focus,
.footer ul li:nth-child(2) a:active {
  color: var(--orange-color);
}
.footer ul li:nth-child(3) a:hover,
.footer ul li:nth-child(3) a:focus,
.footer ul li:nth-child(3) a:active {
  color: var(--green-color);
}
@media (min-width: 768px) {
  .footer {
    display: none;  
  }
}
</style>
