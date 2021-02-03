<template>
  <div class="chapter dimensions-of-discrimination">
    <h2>Dimensionen von Diskriminierung</h2>
    <h3>Direkt &amp; Indirekt</h3>
    <p>
      Direkte/unmittelbare Diskriminierung liegt nach Definition des Allgemeinen Gleichbehandlungsgesetzes (AGG) dann vor, <q>wenn eine Person wegen eines in § 1 genannten Grundes [›Rasse‹, ethnische Herkunft, Geschlecht, Religion oder Weltanschauung, Behinderung, Alter oder sexuelle Identität] eine weniger günstige Behandlung erfährt, als eine andere Person in einer vergleichbaren Situation erfährt, erfahren hat oder erfahren würde</q> (§ 3 (1) AGG). Indirekte/mittelbare Diskriminierung liegt dann vor, <q>wenn dem Anschein nach neutrale Vorschriften, Kriterien oder Verfahren Personen wegen eines in § 1 genannten Grundes gegenüber anderen Personen in besonderer Weise benachteiligen können</q> (§ 3 (2) AGG).
    </p>

    <img class="layer" :src="require('~/assets/icons/dimensions/layer-1.svg')">
    <h3>Individuelle Dimension</h3>
    <p>
      Die individuelle Dimension von Diskriminierung ist die Dimension, die den meisten Menschen bekannt ist. Eine Person diskriminiert – absichtlich oder unabsichtlich – eine andere. Täter*in(nen) und Opfer können benannt werden. Beispiele dafür sind ausgesprochene Vorurteile, verbale und körperliche Gewalt und Hate Speech.
      <br>Die individuelle Dimension ist jedoch nur die Spitze des Eisbergs.
    </p>

    <img class="layer" :src="require('~/assets/icons/dimensions/layer-2.svg')">
    <h3>Strukturelle Dimension</h3>
    <p>
      Die strukturelle Dimension von Diskriminierung kommt bei der statistischen Anhäufung von einzelnen Diskriminierungserfahrungen zum Vorschein und repräsentiert die soziale und strukturelle Ungleichheit, die durch Diskriminierung und Privilegierung manifestiert wird. Diese spiegelt sich in allen gesellschaftlichen Institutionen wider: auf dem Arbeitsmarkt, auf dem Wohnungsmarkt, im Schulsystem, im Gesundheitswesen etc.
      <br>So sind zum Beispiel spezifische Gruppen in bestimmten Sektoren oder Institutionen (z.B. in Förderschulen, in Gefängnissen, in bestimmten Arbeitssektoren) über- oder unterrepräsentiert. Diese Statistiken werden häufig falsch interpretiert oder sogar instrumentalisiert, wenn die strukturelle Dimension von Diskriminierung nicht mit einbezogen wird. Auch die Argumentation der <q>Umgekehrten Diskriminierung</q> ignoriert die strukturelle Dimension.
    </p>

    <img class="layer" :src="require('~/assets/icons/dimensions/layer-3.svg')">
    <h3>Institutionelle Dimension</h3>
    <p>
      Diese Dimension von Diskriminierung manifestiert sich durch vermeintlich neutrale Gesetze und Politiken, durch die jedoch bestimmte Personen und/oder Gruppen diskriminiert werden.
      <br>Sie trägt zur Aufrechterhaltung von ungleichen Machtverhältnissen durch Gesetze und Institutionen bei. Diejenigen, die sich in Institutionen in einer Machtpositionen befinden, z.B. Lehrer*innen, Richter*innen, Polizist*innen, reproduzieren und bekräftigen – meist unabsichtlich – häufig Diskriminierung in ihren Handlungen, Vorgehensweisen und Entscheidungen durch unbewusste Vorurteile und Stereotypisierungen. Ein Beispiel dafür ist <q>Racial Profiling</q>.
    </p>
  </div>
</template>

<style scoped lang="scss">
@import "../../styles/_variables";

.chapter.dimensions-of-discrimination {
  h3 {
    font-size: $font-size-subtitle;
    font-weight: 400;
  }

}
</style>
