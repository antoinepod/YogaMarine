<template>
  <div class="lessons-container">
    <div class="horizontal-container">
      <div class="left-container">
        <div class="lesson-type">
          <h4>
            cours en studio
          </h4>
          <p>
            Mars 2023 - Mai 2023 au studio Salty Days, 12 rue d'Angleterre, 59800 Lille.<br>
            Je réfléchis à de nouveaux lieux et formes pour dispenser des cours de yoga, accessibles et inclusifs.
          </p>
          <RoundedButton class="button" href="https://www.instagram.com/_yogamarine_/" target="_blank">
            infos studios sur instagram
          </RoundedButton>
        </div>
        <div class="lesson-type">
          <h4>
            cours de yoga en entreprise
          </h4>
          <h5>
            ● des cours de yoga pour vos salariés, au sein de vos espaces de sport ou locaux d'entreprise adaptés
          </h5>
          <RoundedButton class="button" href="https://www.instagram.com/_yogamarine_/" target="_blank">
            prenons soin de vos collaborateurs
          </RoundedButton>
        </div>
        <div class="lesson-type">
          <h4>
            autres prestations de yoga
          </h4>
          <h5>
            ● sur demande, j'aurai plaisir à construire et donner un cours de yoga pour répondre aux besoins de vos
            clients, de vos projets
          </h5>
          <div class="other-details">
            <p>
              Séminaire, team building entreprise, retraite yoga bien-être, collaboration, café...
            </p>
            <RoundedButton class="button" href="https://www.instagram.com/_yogamarine_/" target="_blank">
              discutons en
            </RoundedButton>
          </div>
        </div>
      </div>
      <img src="/lessons.jpeg" alt="">
    </div>
  </div>
</template>

<script setup>
import RoundedButton from "@/components/buttons/RoundedButton.vue";
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
      width: 50%;
      height: 80%;
      margin: auto 2rem;
      padding: 1rem;
      margin-top: 8rem;
      color: black;
      overflow-x: auto;

      .lesson-type {
        margin: 1rem 0;

        h4 {
          text-transform: uppercase;
          color: var(--blue-buttons);
        }

        h5 {
          margin-left: 1rem;
        }

        p {
          margin-left: 1rem;
        }

        .button {
          position: relative;
          float: right;
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
      object-fit: cover;
    }

    @media screen and (max-width: 768px) {
      flex-direction: column-reverse;

      img {
        width: 100%;
      }

      .left-container {
        width: 100%;
        margin: 0;
        padding: 1rem 1rem 0 1rem;
        height: 75%;

        .lesson-type {
          margin: 1rem 0;
        }
      }
    }
  }
}
</style>