<template>
  <div class="lessons-container">
    <div class="horizontal-container">
      <div class="left-container">
        <div class="lesson-type">
          <h2>
            cours en studio
          </h2>
          <p>
            Mars 2023 - Mai 2023 au studio Salty Days, 12 rue d'Angleterre, 59800 Lille.<br>
            Je réfléchis à de nouveaux lieux et formes pour dispenser des cours de yoga, accessibles et inclusifs.
          </p>
          <RoundedButton class="button up" href="https://www.instagram.com/_yogamarine_/">
            infos studios sur instagram
          </RoundedButton>
        </div>
        <div class="lesson-type">
          <h2>
            cours de yoga en entreprise
          </h2>
          <h4>
            ● des cours de yoga pour vos salariés, au sein de vos espaces de sport ou locaux d'entreprise adaptés
          </h4>
          <RoundedButton class="button" href="https://www.instagram.com/_yogamarine_/">
            prenons soin de vos collaborateurs
          </RoundedButton>
        </div>
        <div class="lesson-type">
          <h2>
            autres prestations de yoga
          </h2>
          <h4>
            ● sur demande, j'aurai plaisir à construire et donner un cours de yoga pour répondre aux besoins de vos
            clients, de vos projets
          </h4>
          <div class="other-details">
            <p>
              Séminaire, team building entreprise, retraite yoga bien-être, collaboration, café...
            </p>
            <RoundedButton class="button" href="https://www.instagram.com/_yogamarine_/">
              discutons en
            </RoundedButton>
          </div>
        </div>
      </div>
      <img src="/lessons.jpeg" alt="">
    </div>
    <Footer class="footer" color="black"></Footer>
  </div>
</template>

<script setup>
import RoundedButton from "@/components/buttons/RoundedButton.vue";
import Footer from "@/components/Footer.vue";
</script>

<style lang="scss" scoped>
.lessons-container {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .horizontal-container {
    display: flex;
    justify-content: top;
    align-items: top;
    flex-direction: row;
    height: 100%;

    .left-container {
      display: flex;
      justify-content: top;
      align-items: center;
      flex-direction: column;
      width: 45%;
      height: 100%;
      padding: 2%;
      margin-top: 8%;
      margin-left: 5%;
      color: black;

      .lesson-type {
        margin: 2% 0;

        h2 {
          text-transform: uppercase;
          color: var(--blue-buttons);
        }

        h4 {
          text-transform: uppercase;
          font-weight: bolder;
          margin-left: 1rem;
        }

        p {
          margin-left: 1rem;
        }

        .button {
          position: relative;
          float: right;

          &.up {
            margin-top: -2%;
          }
        }

        .other-details {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-direction: row;

          p {
            width: 60%;
          }
        }
      }
    }


    img {
      position: relative;
      top: 0;
      right: 0;
      width: 50%;
      margin-bottom: 10%;
      object-fit: cover;
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