<template>
  <div class="reservation-container">
    <div class="main-container">
      <h3>
        cours particuliers
      </h3>
      <h5>● chez vous, une séance à votre rythme, le matériel est tout ou partie mit à disposition</h5>
      <h5>● tarif recommandé: 20€/personne (majoré selon le lieu, dégressif avec le nombre de pratiquants)</h5>
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

    h3 {
      text-transform: uppercase;
      color: var(--blue-buttons);
    }

    h5 {
      color: var(--white);
      text-transform: uppercase;
      margin-left: 4rem;
      font-weight: bolder;

      @media screen and (max-width: 768px) {
        margin-left: 2rem;
      }
    }

    .button {
      margin: 2rem auto;
    }

    p {
      text-align: right;
      color: var(--white);
    }
  }
}
</style>