<template>
  <div class="case-study working-women">
    <WorkingWomanVisualization class="background-visualization" />
    <div class="narrative">
      <div class="step">
        <h3 class="case-study-title">
          Frauen* mit Hidschab beim Zugang zum Arbeitsmarkt
        </h3>
        <p>
          Frauen* mit Hidschab (muslimischem Kopftuch) werden intersektional – sexistisch, rassistisch und anti-muslimisch – in diversen Bereichen in Deutschland diskriminiert. Nicht nur auf individueller Ebene, sondern auch strukturell und institutionell.
          <br>So erleben sie zum Beispiel direkte Diskriminierung beim Zugang zum Arbeitsmarkt, was ein → Experiment von Doris Weichselbaumer aus dem Jahr 2016 (S. 12ff) deutlich macht:
        </p>
        <p>
          1474 Bewerbungen wurden an Unternehmen in Deutschland verschickt, in allen Punkten identisch, mit Ausnahme des Namens und des Fotos. Drei verschiedene Identitäten sollten in diesem Experiment getestet werden: Eine Frau* mit einem »deutsch klingenden« Namen (Sandra Bauer), eine Frau* mit einem <q>türkisch klingenden</q> Namen (Meyrem Öztürk) und eine Frau* mit einem <q>türkisch klingenden</q> Namen (Meyrem Öztürk), die auf dem Bewerbungsfoto ein Hidschab trägt. Auf allen drei Bewerbungsfotos war die gleiche Frau* zu sehen, auf einem trägt sie einen Hidschab.
        </p>
      </div>

      <div class="step">
        <p>
          Sandra Bauer war die erfolgreichste Kandidatin: Von 18,8% aller Unternehmen, bei denen sie sich bewarb, wurde sie zum Vorstellungsgespräch eingeladen. Meyrem Öztürk ohne Hidschab von 13,5%. Meyrem Öztürk, die auf dem Bewerbungsfoto einen Hidschab trägt, wurde lediglich von 4,2% aller Unternehmen, die sie kontaktierte, zu einem Vorstellungsgespräch eingeladen.
        </p>
        <blockquote>
          Die stark unterschiedliche Anzahl der Einladungen zum Vorstellungsgespräch zeigt die intersektionale Diskriminierung, mit der Frauen* mit Hidschab beim Zugang zum deutschen Arbeitsmarkt konfrontiert sind.
        </blockquote>
        <p>
          Trotz identischer Bewerbung müsste die Frau* mit einem Hidschab und einem »türkisch klingenden« Namen, 4,5-mal so viele Bewerbungen senden wie eine Frau* mit einem »deutsch klingenden« Namen und ohne Hidschab, um die gleiche Anzahl von Einladungen zu einem Vorstellungsgespräch zu erhalten.
        </p>
      </div>

      <div class="step">
        <p>
          Ein Beispiel für indirekte intersektionale Diskriminierung von Frauen* mit Hidschab auf dem deutschen Arbeitsmarkt sind die sogenannten <q>Neutralitätsgesetze</q>, die in der Praxis in erster Linie ein Kopftuchverbot für beispielsweise muslimische Richter*innen, Lehrer*innen und Erzieher*innen zur Folge haben.
          <br>Diese <q>Neutralitätsgesetze</q> richten sich nicht direkt gegen eine bestimmte Glaubensgemeinschaft, allerdings liegt der Schluss nahe, dass der Hidschab das implizite Ziel ist. Verbote von religiösen Symbolen sind zwar verfassungswidrig, aber sind sie im Einzelfall gerechtfertigt, wenn nachgewiesen werden kann, das sie die <q>Neutralität</q> von staatlichen Institutionen gefährden.
        </p>
      </div>
      <div class="step">
        <p>
          Es stellt sich die Frage, was in diesem Zusammenhang als »neutral« gilt. Die »Neutralität« ist in keinem Fall objektiv oder unpolitisch. »Als neutral gilt in unserem Falle das, was aus einer Mehrheitsperspektive ›normal‹ erscheint. Das Kopftuch erscheint nicht ›normal‹, deswegen wird es auch nicht als ›neutral‹ gelesen. Auch hier verhindert ein Kopftuchverbot, dass das Kopftuch je als normal wahrgenommen werden könnte – und irgendwann als ›neutral‹ erscheinen könnte« (Mangold, 2017).
          <br>Frauen*, die den Hidschab tragen, sind unverhältnismäßig stark von diesen religiösen Kleidungsbeschränkungen betroffen, die sie von Beschäftigungsmöglichkeiten und öffentlichen Räumen ausschließen.
          <br>Die rechtliche Legitimation hat zudem den Effekt, dass sich die Diskriminierung auf andere Bereiche ausweitet – z.B. auf Arbeitgeber*innen im privaten Sektor, die eigentlich außerhalb des Wirkungsbereiches solcher »Neutralitätsgesetze« liegen – und auch dort akzeptiert und normalisiert wird.
          <br>(Zitat aus einem → Bericht zu Diskriminierung in Deutschland von 2017, S. 242)
        </p>
        <blockquote>
          Habe für ein Praktikum im Kindergarten angerufen und nach einem Praktikumsplatz gefragt. Nachdem ich eine Zusage bekommen habe, habe ich gesagt, dass ich ein Kopftuch habe. Daraufhin bekam ich die Antwort, entweder ziehen Sie Ihr Kopftuch aus oder es ist nicht möglich (habe insgesamt 18 Kindertagesstätten angerufen und überall ähnliche Antworten bekommen).
        </blockquote>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../../../styles/_variables";

.case-study.working-women {
  .case-study-title {
    font-size: $font-size-subtitle;
    margin-bottom: 0.6em;
  }

  .step {
    margin-bottom: 100vh;
  }

  .background-visualization {
    z-index: -100;
    position: sticky;
    top: 0;
  }

  @media (min-width: $media-breakpoint-min-m) {
    .step {
      margin-bottom: 30vh;
    }
  }
}
</style>
