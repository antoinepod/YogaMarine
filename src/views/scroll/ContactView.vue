<template>
  <div class="contact-container">
    <div class="horizontal-container">
      <div class="left-container">
        <div class="text-container">
          <h3 class="keep-title">
            Tissons un lien, ou gardons le
          </h3>
          <p>
            N'hésitez pas à parler de mon projet à vos proches. Vous pouvez aussi suivre mes inspirations sur Instagram.
            Et si vous avez des questions, je suis à votre écoute !
          </p>
        </div>
        <iframe class="instagram-embed" src="https://www.instagram.com/_yogamarine_/embed/" height="306" width="306" frameborder="0" scrolling="no"></iframe>
      </div>
      <img src="/contact2.jpeg" alt="">
    </div>
    <Footer class="footer" color="black"></Footer>
  </div>
</template>

<script setup>
import Footer from "@/components/Footer.vue";
</script>

<style lang="scss" scoped>
.contact-container {
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
    @media screen and (max-width: 768px) {
      flex-direction: column;
    }
    height: 100%;

    .left-container {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      width: 45%;
      @media screen and (max-width: 768px) {
        width: 90vw;
        margin: auto;
      }
      height: 100%;
      padding: 2%;
      margin-top: 3%;
      margin-left: 5%;
      color: black;

      .text-container {
        margin-top: 12%;
        
        .keep-title {
          color: var(--blue-buttons);
          text-transform: uppercase;
        }
      }

      .instagram-embed {
        max-width: 100%;
        min-height: 350px;
        margin: auto;
        margin-top: 0;
        margin-bottom: 10vh;
        @media screen and (max-width: 768px) {
          margin-bottom: 0;
        }
      }
    }


    img {
      width: 50%;
      @media screen and (max-width: 768px) {
        width: 90%;
        height: 22vh;
        margin: auto;
        margin-bottom: 2vh !important;
        border-radius: 1rem;
      }
      margin-bottom: 10vh;
      object-fit: cover;
    }
  }

  .footer {
    z-index: 1;
    position: absolute;
    bottom: 1rem;
    width: 100%;
    height: 2rem;
  }
}
</style>