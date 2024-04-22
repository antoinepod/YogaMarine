<template>
  <div class="reservation-container">
    <div class="main-container">
      <h2>
        cours particuliers
      </h2>
      <h4>● chez vous, une séance à votre rythme, le matériel est tout ou partie mit à disposition</h4>
      <h4>● tarif recommandé: 20€/personne (majoré selon le lieu, dégressif avec le nombre de pratiquants)</h4>
      <RoundedButton class="button" href="mailto:contact@yogamarine.fr?subject=Demande de cours particulier">
        Demandez un cours particulier
      </RoundedButton>
      <p>Précisez moi votre besoin, adresse postale pour le cours, téléphone portable... Et je reviens vers vous<br>pour organiser une pratique adaptée.</p>
    </div>
    <!-- <Footer class="footer" color="white"></Footer> -->
  </div>
</template>

<script setup>
import RoundedButton from "@/components/buttons/RoundedButton.vue";
import Footer from "@/components/Footer.vue";
</script>

<style lang="scss" scoped>
.reservation-container {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-image: url("/lessons2.jpeg");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;

  .main-container {
    width: 80%;
    display: flex;
    justify-content: center;
    flex-direction: column;

    h2 {
      text-transform: uppercase;
      color: var(--blue-buttons);
    }

    h4 {
      color: var(--white);
      text-transform: uppercase;
      margin-left: 4rem;
      font-weight: bolder;
    }

    .button {
      margin: 2vh auto;
    }

    p {
      text-align: right;
      color: var(--white);
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