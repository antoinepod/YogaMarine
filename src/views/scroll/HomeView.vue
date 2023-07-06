<template>
  <div class="home-container">
    <div class="text-container">
      <h4 class="title">
        Intéressée par les sujets du développement humain, j’explore l'approche du corps, de l'esprit et de la vie,
        notamment par le Yoga.
      </h4>
      <p class="subtitle">
        Formée au Yoga par un 200h inclusif, certifié Yoga Alliances, je souhaite transmettre le Vinyasa. Cette pratique
        invite à l’apaisement mental, à l’introspection spirituelle et à la vitalité physique.
        <br><br>
        J'ai à coeur de partager cette discipline de manière accessible, authentique, et surtout libre selon ce qu'elle
        peut vous offrir.
        <br><br>
        Par ma courte expérience de yoga, mais avec ce qu'elle m'a déjà tant apporté, je propose des cours, <u>quel que
          soit votre niveau ou connaissance du Yoga</u>.
      </p>
    </div>
    <Footer class="footer" color="white"></Footer>
  </div>
</template>

<script setup>
import Footer from "@/components/Footer.vue";
</script>

<style lang="scss" scoped>
.home-container {
  height: 100%;
  display: flex;
  align-items: right;
  flex-direction: column;
  color: white;
  text-align: right;
  background-image: url("/home.jpeg");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;

  .text-container {
    margin-left: 8%;
    margin-right: 8%;
    margin-top: 2%;
    .title {
      text-transform: uppercase;
      margin-top: 13%;
      margin-bottom: 2%;
    }

    .subtitle {
      font-size: 2vh;
    }
  }

  .footer {
    z-index: 1;
    position: absolute;
    bottom: 1rem;
    width: 100%;
    height: 3rem;
  }
}
</style>