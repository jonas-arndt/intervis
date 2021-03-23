<template>
  <div class="chapter dimensions-of-discrimination horizontal-content">
    <h2 class="chapter-title">
      Dimensionen von Diskriminierung
    </h2>
    <div class="content">
      <div class="block">
        <h3 class="block-title">
          Direkt &amp; Indirekt
        </h3>
        <p class="text">
          Direkte/unmittelbare Diskriminierung liegt nach Definition des Allgemeinen Gleichbehandlungsgesetzes (AGG) dann vor, <q>wenn eine Person wegen eines in § 1 genannten Grundes [›Rasse‹, ethnische Herkunft, Geschlecht, Religion oder Weltanschauung, Behinderung, Alter oder sexuelle Identität] eine weniger günstige Behandlung erfährt, als eine andere Person in einer vergleichbaren Situation erfährt, erfahren hat oder erfahren würde</q> (§ 3 (1) AGG). Indirekte/mittelbare Diskriminierung liegt dann vor, <q>wenn dem Anschein nach neutrale Vorschriften, Kriterien oder Verfahren Personen wegen eines in § 1 genannten Grundes gegenüber anderen Personen in besonderer Weise benachteiligen können</q> (§ 3 (2) AGG).
        </p>
      </div>

      <div class="block">
        <img class="icon" :src="require('~/assets/icons/dimensions/dimension_individuell.svg')">
        <h3 class="block-title">
          Individuelle Dimension
        </h3>
        <p class="text">
          Die individuelle Dimension von Diskriminierung ist die Dimension, die den meisten Menschen bekannt ist. Eine Person diskriminiert – absichtlich oder unabsichtlich – eine andere. Täter*in(nen) und Opfer können benannt werden. Beispiele dafür sind Hate Speech, Vorurteile, verbale und körperliche Gewalt.
          <br>Die individuelle Dimension ist jedoch nur die Spitze des Eisbergs.
        </p>
      </div>

      <div class="block">
        <img class="icon" :src="require('~/assets/icons/dimensions/dimension_strukturell.svg')">
        <h3 class="block-title">
          Strukturelle Dimension
        </h3>
        <p class="text">
          Die strukturelle Dimension von Diskriminierung kommt bei der statistischen Anhäufung von einzelnen Diskriminierungserfahrungen zum Vorschein und repräsentiert die soziale und strukturelle Ungleichheit, die durch Diskriminierung und Privilegierung manifestiert wird. Diese spiegelt sich in allen gesellschaftlichen Institutionen wider: auf dem Arbeitsmarkt, auf dem Wohnungsmarkt, im Schulsystem, im Gesundheitswesen etc.
          <br>So sind zum Beispiel spezifische Gruppen in bestimmten Sektoren oder Institutionen (z.B. in Förderschulen, in Gefängnissen, in bestimmten Arbeitssektoren) über- oder unterrepräsentiert. Diese Statistiken können falsch interpretiert oder sogar instrumentalisiert werden, wenn die strukturelle Dimension von Diskriminierung nicht mit einbezogen wird, indem Über- oder Unterrepräsentationen zum Beispiel mit vermeintlichen Eigenschaften einer bestimmten Gruppe verbunden werden. Auch die Argumentation der <q>Umgekehrten Diskriminierung</q> ignoriert die strukturelle Dimension.
        </p>
      </div>

      <div class="block">
        <img class="icon" :src="require('~/assets/icons/dimensions/dimension_institutionell.svg')">
        <h3 class="block-title">
          Institutionelle Dimension
        </h3>
        <p class="text">
          Diese Dimension von Diskriminierung manifestiert sich durch vermeintlich neutrale Gesetze und Politiken, durch die jedoch bestimmte Personen und/oder Gruppen diskriminiert werden.
          <br>Sie trägt zur Aufrechterhaltung von ungleichen Machtverhältnissen durch Gesetze und Institutionen bei. Diejenigen, die sich in Institutionen in einer Machtpositionen befinden, z.B. Lehrer*innen, Richter*innen, Polizist*innen, reproduzieren und bekräftigen – meist unabsichtlich – Diskriminierung in ihren Handlungen, Vorgehensweisen und Entscheidungen durch unbewusste Vorurteile und Stereotypisierungen. Ein Beispiel dafür ist <q>Racial Profiling</q>.
        </p>
      </div>

      <div class="block">
        <img class="icon" :src="require('~/assets/icons/dimensions/dimension_historisch.svg')">
        <h3 class="block-title">
          Historische Dimension
        </h3>
        <p class="text">
          Die historische Dimension von Diskriminierung ist die Basis der drei anderen Dimensionen. Historische Ereignisse haben immer Einfluss auf die Gegenwart. So beeinflussen beispielsweise die Versklavung afrikanischer Menschen, der Kolonialismus und der Holocaust/Porajmos heutige Diskriminierungs- und Marginalisierungsstrukturen und bestimmen weiterhin, wie Personen und Gruppen hierarchisiert und Macht und Ressourcen verteilt sind.
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "../../styles/_variables";

.chapter.dimensions-of-discrimination {
  h3 {
    font-size: $font-size-subtitle;
    font-weight: 400;
  }

  @media (min-width: $media-breakpoint-min-m) {
    .icon {
      position: absolute;
      top: 2rem;
      width: 3rem;
    }

    .block-title {
      position: absolute;
      top: 6rem;
    }

    .text {
      position: absolute;
      top: 7rem;
      padding-top: 1rem;
    }
  }
}
</style>
