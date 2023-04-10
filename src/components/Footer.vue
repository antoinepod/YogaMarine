<template>
  <footer>
    <RouterLink to="/mentions-legales-cgv" class="title">MENTIONS LÉGALES – CGV</RouterLink>
    <p>©2023 YOGAMARINE - Site crée par <a target="_blank" href="https://www.linkedin.com/in/antoine-podvin/">Antoine Podvin</a></p>
    <div class="links">
      <a class="mail" target="_blank" href="mailto:contact@yogamarine.fr"><i class="fa fa-envelope"></i>  contact@yogamarine.fr</a>
      <a class="instagram" target="_blank" href="https://www.instagram.com/_yogamarine_/"><i class="fa fa-instagram"></i>  _yogamarine_</a>
    </div>
  </footer>
</template>
  
<style scoped>
p {
  margin: 0;
  font-size: 1em;
  width: 33%;
}

p a {
  color: black;
}

p a:hover {
  color: #085BF8;
}

.title {
  width: 33%;
  font-weight: bold;
  text-decoration: none;
  color: black;
}

.title:hover {
  color: #085BF8;
  text-decoration: underline;
}

footer {
  text-align: center;
  color: black;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
}

.links {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 33%;
}

.mail {
  color: black;
  text-decoration: none;
}

.mail:hover {
  color: #1F88E5;
  text-decoration: underline;
}

.instagram {
  color: black;
  text-decoration: none;
}

.instagram:hover {
  color: #833AB4;
  text-decoration: underline;
}

</style>