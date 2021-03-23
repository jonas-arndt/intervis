<template>
  <div class="case-study working-handicapped">
    <WorkingHandicappedVisualization class="background-visualization" />

    <div class="narrative">
      <div class="step">
        <h3 class="case-study-title">
          Frauen* mit Behinderung auf dem Arbeitsmarkt
        </h3>
        <p>
          Frauen* mit Behinderung erfahren, aufgrund ihres Geschlechtes und ihrer Behinderung, in diversen Bereichen in Deutschland Diskriminierung – auf individueller, struktureller und institutioneller Ebene. Vor allem in der Gesundheitsversorgung und in der Erwerbstätigkeit.
        </p>
        <p>
          Eine → Studie von 2012, herausgegeben vom Bundesministerium für Familie, Senioren, Frauen und Jugend (S. 21 &amp; 24), zeigt die besondere Vulnerabilität und Gefährdung von Frauen* mit Behinderung:
        </p>
      </div>

      <div class="step">
        <p>
          Sie sind körperlicher, sexualisierter und psychischer Gewalt deutlich häufiger ausgesetzt als Frauen* ohne Behinderung. Beispielsweise sind Frauen* mit Behinderung zwei- bis dreimal häufiger sexualisierter Gewalt in Kindheit und Jugend durch Erwachsene ausgesetzt als Frauen* ohne Behinderung. Und auch im Erwachsenenleben sind sie zwei- bis dreimal häufiger von sexualisierter Gewalt betroffen.
        </p>
      </div>

      <div class="step">
        <p>
          Vor allem Frauen* mit Behinderung werden häufig so sozialisiert, als wären sie dauerhaft abhängig und auf Betreuung angewiesen, was ihre Handlungsfähigkeit und Selbstbestimmtheit einschränkt. Patriarchale Strukturen, die von der Annahme ausgehen, dass Männer das Familieneinkommen bestreiten, in Verbindung mit Vorurteilen hinsichtlich Fähigkeiten und Kompetenzen von Menschen mit Behinderung erschweren es Frauen* mit Behinderung zudem in den Arbeitsmarkt einzutreten und selbstständig zu werden. Zusätzlich erschwert die mangelnde Barrierefreiheit im Arbeitskontext den Zugang zum Arbeitsmarkt für alle Menschen mit Behinderung. Dies alles spiegelt sich in der Erwerbstätigkeitsquote wider:
        </p>
      </div>

      <div class="step">
        <p>
          Ein → Bericht des Bundesministerium für Arbeit und Soziales (S. 170) zeigt, dass Frauen* mit Behinderung häufiger erwerbslos sind als Männer mit Behinderung und deutlich häufiger als Frauen* ohne Behinderung. Die Erwerbstätigkeitsquote der 18- bis 64-Jährigen in Deutschland lag 2013 bei Frauen* mit Behinderung bei 47%, während 52% der Männer mit Behinderung und 74% der Frauen* ohne Behinderung erwerbstätig waren.
        </p>
        <blockquote>
          Die Differenz in der Erwerbstätigkeitsquote zeigt die intersektionale Diskriminierung, die Frauen* mit Behinderung auf dem Arbeitsmarkt erfahren.
        </blockquote>
        <p>
          Auch sind Frauen* mit Behinderung häufiger in atypischen Beschäftigungsverhältnissen – z.B. Zeitarbeit, befristete Arbeitsverhältnisse, Teilzeitarbeit mit maximal 20 Arbeitsstunden pro Woche – tätig als Frauen* ohne Behinderung.
          <br>Sie können seltener ihren Lebensunterhalt aus ihrer Erwerbstätigkeit bestreiten, sind damit häufiger finanziell abhängig von (Ehe) Partner*innen, anderen Familienmitgliedern oder dem Staat und sind häufiger in einer schlechten finanziellen Situation und von Armut betroffen.
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../../styles/_variables";

.case-study.working-handicapped {
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
