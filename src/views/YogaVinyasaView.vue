<script setup>
import {useRouter} from "vue-router";
import RoundedButton from "@/components/RoundedButton.vue";

const router = useRouter();
</script>

<template>
  <div class="container">
    <p>
      Le Yoga est avant tout une <strong>pratique qui prends soin</strong>.<br>
      Pas besoin de prouver quoi que ce soit. Simplement être présent à son corps, écouter et sentir ses muscles, ses articulations, sa respiration. Respecter là ou notre corps
      peut aller, et là ou il ne peut pas. <br><br>
      Le <strong>Yoga Vinyasa</strong> est un enchainement fluide des postures - Asanas. C'est une pratique qui s'adapte à tous, car elle peut être autant dynamique, que douce. Elle associe la
      respiration afin de trouver un relâchement mental, et invite au renforcement et étirement profonds des muscles. L'ambiance calme offre un moment pour soi, hors du
      quotidien.<br>
      C'est cette pratique créative et enveloppante que je pratique et souhaite transmettre. <br><br>
      <i>Il n'y a pas d'âge limite pour venir à ce type cours.
      Si vous avez des soucis de santé particuliers, femmes enceintes ou autre information importante qu'il m'est préférable de connaître avant, merci de m'en avertir par mail. Je
      pourrai vous proposer d'en discuter par téléphone.
      </i> <br><br>
      <strong>Mes cours sont crées, réfléchis, testés.</strong><br>
      Chaque cours est construit sur-mesure pour amener progressivement le corps et l'esprit à un état de bien-être, avec une <strong>structure de base</strong> :<br>
      <span class="centered">s'ancrer dans la pratique - trouver de la stabilité - échauffer et préparer le corps - renforcer - étirer - relâcher.</span>
      Selon le cours, le type de prestation, le thème de la séance, je peux ajouter des temps de respiration et techniques de purification - Pranayama et Kriyas.<br><br>
      Retrouvez le type de cours qui peut correspondre à votre besoin, à la page dédiée <router-link class="link" to="/demande-et-reservation">Demande et Réservation</router-link> :
    </p>
    <div class="buttons-container">
      <RoundedButton @click="router.push('/demande-et-reservation')" name="Cours en studio" />
      <RoundedButton @click="router.push('/contact')" name="Cours particulier" />
      <RoundedButton @click="router.push('/contact')" name="Autre demande" />
    </div>
  </div>
</template>

<style scoped>
.container {
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 4% 8% 0;
  flex-direction: column;
  text-align: justify;
}

strong {
  font-weight: bold;
}

.centered {
  display: block;
  text-align: center;
}

.link {
  color: #4e69ef;
  font-weight: bolder;
}

.buttons-container {
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  margin-top: 3%;
}
</style>