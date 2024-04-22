<template>
  <div class="yoga-container">
    <div class="horizontal-container">
      <img src="/yoga-vinyasa.jpeg" alt="">
      <div class="text-container">
        <p>
          Le Yoga Vinyasa est une pratique dynamique et douce à la fois. C'est un enchaînement fluide de postures de Yoga
          associées à la respiration. La combinaison des -Asanas permet de renforcer autant que d'étirer le corps.
          L'attention particulière au souffle aide à trouver du relâchement et de l'apaisement dans la pratique.<br>
          <lbr />
          C'est ainsi que le Yoga Vinyasa invite à un retour à soi, dans une ambiance calme et hors du quotidien. C'est
          cette pratique créative et enveloppante que j'explore et souhaite diffuser.<br>
          <lbr />
          Chaque cours amène progressivement le corps et l'esprit à un état de bien-être, avec une structure de base :
        </p>
        <h4 class="structures">
          s'ancrer dans la pratique - préparer le corps - stabiliser - renforcer - étirer - relâcher - se laisser aller.
        </h4>
        <p>
          Selon le cours, le type de prestation, le thème de la séance que je choisi, je peux ajouter des temps de
          méditation, respiration et techniques de purification -Pranayama et Kriyas.<br>
          <br />
          <U>Il n'y a pas d'âge limite ou de pré-requis pour profiter d'un cours de Yoga Vinyasa.</U><br>Si vous avez des
          soucis de santé, femmes enceintes ou autre information importante, n’hésitez pas à m’en parler, nous trouverons
          un cours qui respecte votre spécificité.
        </p>
        <h4 class="bottom left">
          Mes cours sont créés, réfléchis, testés, flexibles.
        </h4>
        <h4 class="bottom right">
          puisque le vinyasa se construit, il s'adapte.
        </h4>
      </div>
    </div>
    <RoundedButton class="reservation-button" href="#cours-et-prestations">
      mes cours et prestations
    </RoundedButton>
    <!-- <Footer class="footer" color="black"></Footer> -->
  </div>
</template>

<script setup>
import RoundedButton from "@/components/buttons/RoundedButton.vue";
import Footer from "@/components/Footer.vue";
</script>


<style lang="scss" scoped>
.yoga-container {
  height: 100%;
  display: flex;
  justify-content: top;
  align-items: center;
  flex-direction: column;

  .horizontal-container {
    display: flex;
    justify-content: top;
    align-items: top;
    flex-direction: row;
    height: 85%;

    img {
      position: relative;
      top: 0;
      left: 0;
      width: 50%;
      object-fit: cover;
    }

    .text-container {
      width: 47%;
      padding: 2%;
      margin-top: 5%;
      margin-left: 1.5%;
      text-align: justify;
      text-justify: inter-word;
      color: black;
      overflow: auto;

      h4 {
        text-align: right;
        text-transform: uppercase;
      }

      .structures {
        text-transform: uppercase;
        color: var(--blue-buttons);
      }

      .left {
        text-align: left;
        margin-left: 1em;
      }

      .right {
        text-align: right;
        margin-right: 1em;
      }
    }
  }

  .reservation-button {
    margin-top: 2%;
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