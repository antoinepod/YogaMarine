<script setup>
import {useRouter} from "vue-router";
import RoundedButton from "@/components/RoundedButton.vue";

const router = useRouter();
</script>

<template>
  <div class="container">
    <p>J'ai découvert le Yoga quand j'avais 19 ans, au début de mes études supérieures à Lille. Angoissée et ne me
      sentant pas à ma place, j'ai poussé un peu par hasard la porte d'un
      studio de yoga. La pratique d'une activité sportive douce me paraissait être le meilleur remède à mes excès de
      doute, pensées parasites, et léthargie (clairement).
      <br><br>
      J'ai découvert d'abord le <strong>Yogalates</strong>, discipline complète bercée par la philosophie et les Asanas du Yoga, renforcée par des exercices dynamiques du Pilates.
      J'étais entourée de personnes venues s'offrir un moment pour leur bien être, sans compétition ou comparaison. Chacun dans sa bulle, mais ensemble. L'atmosphère bienveillante,
      avec un enseignant passionné et au goût de transmettre ses apprentissages sur le Yoga et le Pilates, ont rendu ma pratique une habitude saine. Très vite, j'ai senti un apaisement
      s'installer dans mon corps, et dans ma tête. A la fin de chaque cours, j'étais mieux présente à moi-même, en paix. J'ai voulu creuser et continuer d'apprendre sur le Yoga, et
      pratiquer de manière personnelle et dans d'autres studios.
      <br><br>
      A la fin de mes études d'ingénieure, j'ai choisi de me former plus intensément en suivant un <strong>Yoga Teacher Training de 200h</strong>. Je me suis rendue à la Punky Yoga School dans les
      Landes, pour un enseignement riche avec 2 professeurs complémentaires, ouverts et rigoureux.
      J'y ai appris beaucoup, sur le Yoga et sa philosophie aussi complexe que mystérieuse. Sur le corps humain, l'immense variété anatomique, mais aussi la magie de sa construction
      et de ses capacités. Sur moi-même, pouvoir remercier et apprécier mon corps, unique, avec ses forces et ses limites. Sur la place de la spiritualité dans notre société, le respect
      culturel, la transmission de savoirs et pratiques qui ne nous appartiennent pas, mais qui nourrissent des parts de nous...
      <br><br>
      C'est ainsi que, par ma courte expérience de yoga, mais avec ce qu'elle m'a déjà tant apportée, je propose des cours, quelque soit votre niveau ou connaissance de la pratique.
      J'ai à coeur de partager cette discipline de manière accessible, authentique, et surtout libre selon ce qu'elle peut vous apporter.
      Je continue de mon côté à creuser les sujets du <strong>développement humain</strong>, avec envie toujours d'approfondir et enrichir mes connaissances et expériences du Yoga, et des
      approches du bien-être, de la santé globale.
    </p>
    <RoundedButton class="button" @click="router.push('/yoga-vinyasa')" name="Voir les types de cours proposés"/>
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

.button {
  margin-top: 3%;
}
</style>