<template>
  <div class="about-me-container">
    <div class="horizontal-container">
      <img src="/about-me.jpeg" alt="">
      <div class="text-container">
        <p>
          J'ai découvert le Yoga lors de mon adolescence, période bercée d'incertitudes. Il a été un remède à mes doutes
          et mon mal être.<br>
          En pratiquant le Vinyasa, enchaînement fluide de postures de Yoga associées à la respiration, j'ai
          progressivement senti un état d'apaisement s'installer dans mon corps, et dans ma tête. Je suis devenue plus
          forte.
        </p>
        <h4>
          Le Yoga est devenu un outil pour cultiver mon énergie, trouver mon équilibre, prendre conscience de mon être, de
          mon corps.
        </h4>
        <p>
          J'ai souhaité apprendre davantage sur le Yoga, sa philosophie et ses racines. Ainsi, je me suis rendue dans les
          Landes pendant 1 mois, afin de suivre une formation "Yoga Teacher Training", sous le format de 200h intensives
          avec des enseignants passionnés.<br>
          Cet apprentissage en français a changé mon rapport à la pratique du Yoga -entre rigueur et intuition, et ouvert
          à bien des perspectives pour aller plus loin dans cette quête de bien-être et libération intérieure.<br>
          <lbr/>
          En tant que jeune passionnée, mon envie est d’approfondir, transmettre, et partager mon expérience du Yoga
          Vinyasa avec des personnes enthousiastes et curieuses. Afin d'en faire bénéficier ses bienfaits revigorants et
          apaisants. Et peut être ouvrir une porte à l'accueil de soi, entier, avec bienveillance.
        </p>
        <h4 class="secondary-title">
          Notez que Le yoga est ouvert à tous, les postures s'adaptent pour se connecter à notre unicité.
        </h4>
      </div>
    </div>
    <RoundedButton class="about-button" href="#yoga-vinyasa">
      à propos du yoga vinyasa
    </RoundedButton>
  </div>
</template>

<script setup>
import RoundedButton from "@/components/buttons/RoundedButton.vue";
</script>

<style lang="scss" scoped>
.about-me-container {
  height: 100%;
  display: flex;
  justify-content: top;
  align-items: center;
  flex-direction: column;

  .horizontal-container {
    display: flex;
    justify-content: center;
    align-items: top;
    flex-direction: row;
    height: 90%;

    img {
      position: relative;
      top: 0;
      left: 0;
      width: 50%;
      object-fit: cover;
    }

    .text-container {
      height: 80%;
      width: 50%;
      margin: auto 2rem;
      padding: 1rem;
      margin-top: 8rem;
      text-align: justify;
      text-justify: inter-word;
      color: black;
      overflow-x: auto;

      h4 {
        text-align: right;
        text-transform: uppercase;
      }

      .secondary-title {
        color: var(--blue-buttons);
      }
    }

    @media screen and (max-width: 768px) {
      flex-direction: column;

      img {
        width: 100%;
      }

      .text-container {
        width: unset;
        margin: 0;
        padding: 1rem 1rem 0 1rem;
      }
    }
  }

  .about-button {
    margin: auto;
  }
}
</style>