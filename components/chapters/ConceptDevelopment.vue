<template>
  <div class="chapter concept-development horizontal-content">
    <h2 class="chapter-title">
      Begriffsentwicklung von Intersektionalität
    </h2>
    <div class="content">
      <div class="block">
        <p class="text teaser">
          Die Entstehung von Intersektionalitätstheorien verlief nicht geradlinig. Sie ist geprägt von vielfältigen Entwicklungslinien. Und wie jede Historie, ist sie ihrerseits von Marginalisierung und Ausschlüssen geprägt. Innerhalb dieses Artikels wird die Begriffsentwicklung im US-amerikanischen und deutschen Kontext in groben Zügen skizziert.
        </p>
      </div>

      <div class="block">
        <div class="title usa icon">
          <h3 class="label">
            USA
          </h3>
        </div>
        <h4 class="block-title">
          <q>Ain’t I a woman?</q>
        </h4>
        <p class="text">
          1851 fragte Sojourner Truth in ihrer Rede auf der Frauenkonferenz in Ohio in das Publikum: »Ain’t I a woman?«, bin ich keine Frau? Wenngleich der Begriff der Intersektionalität erst später geprägt wurde, wiesen sie und weitere Sklavinnen bereits im 19. Jahrhundert auf ihre doppelt marginalisierte Position als Frauen* und Sklavinnen/Schwarze hin und thematisierten, wie sie mehrere, gleichzeitige zusammenwirkende Unterdrückungen erfuhren.
        </p>
      </div>

      <div class="block columned">
        <h4 class="block-title">
          Vielfältige Theoriebildung
        </h4>
        <p class="text">
          Im Zuge der Bewegung des »Black Feminism« in den USA formten sich in den 1970er und 1980er Jahren verstärkte Diskurse und Debatten, in denen Schwarzen Frauen* ihre spezifischen Erfahrungen in einer rassistischen, patriarchalen, heterosexistischen und kapitalistischen Gesellschaft thematisierten. Ein zentraler Kritikpunkt galt der gängigen feministischen Forschung und Politik, da diese sich an den Interessen weißer, westlicher, heterosexueller, cis-geschlechtlicher Frauen aus der Mittelschicht ausrichtete. Damit wurden die Erfahrungen, Bedürfnisse und Interessen von z.B. Schwarzen Frauen* ignoriert, marginalisiert und letztendlich unsichtbar gemacht. Dies wird auch als »white feminism« bezeichnet.
          <br>Die Theoriebildung der Intersektionalität wurde in diesem Kontext auf unterschiedliche Weise von vielen Autor*innen geprägt und bereichert.
        </p>
      </div>

      <div class="block">
        <h4 class="block-title">
          Kimberlé Crenshaw
        </h4>
        <p class="text">
          1989 prägte die US-amerikanische Juristin und Professorin für Critical Legal Studies Kimberlé Crenshaw in ihrem Essay <q>Demarginalizing the Intersection of Race and Sex: A Black Feminist Critique of Antidiscrimination Doctrine, Feminist Theory and Antiracist Politics</q> erstmals den Begriff <q>Intersektionalität</q>.
        </p>
      </div>

      <div class="block columned">
        <div class="title germany icon">
          <h3 class="label">
            Deutschland
          </h3>
        </div>
        <h4 class="block-title">
          Kritik am Mainstream-Feminismus
        </h4>
        <p class="text">
          Die Entwicklungslinien deutschsprachiger Intersektionalitätstheorien sind vielfältiger und gebrochener, verglichen mit denen der angloamerikanischen Entwicklung.
          <br>Politisch-theoretische Debatten wurden teilweise durch US-amerikanische Texte beeinflusst, teilweise aber auch unabhängig davon geführt.
          <br>Impulsgeber*innen in den 1980er und 1990er Jahren waren Migrant*innen, jüdische Frauen*, Schwarze Deutsche, Frauen* mit Behinderung und Queer of Color. Sie alle machten auf ihre spezifischen Diskriminierungserfahrungen und deren Marginalisierung im deutschen Mainstream-Feminismus aufmerksam. Sie thematisierten, dass sie als <q>die Anderen</q> repräsentiert und ihre Themen und Forderungen nicht wahrgenommen und berücksichtigt wurden. Dabei kritisierten sie vor allem den deutschen Mainstream-Feminismus, dessen Akteur*innen für sich beanspruchten, Politik für alle Frauen* zu betreiben, obwohl sie sich nur an den Interessen und Bedürfnissen weißer, heterosexueller, cis-geschlechtlicher, christlicher, nichtbehinderter Frauen orientierten.
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "../../styles/_variables";

.concept-development {

  .title {
    position: relative;

    margin-top: 1.5rem;
    margin-bottom: 0.75rem;

    .label {
      font-weight: 400;
      font-size: $font-size-subtitle;
    }

    &.germany {
      height: 3rem;
      background: url('~assets/icons/states/germany.svg') no-repeat;
      background-size: contain;

      .label {
        position: relative;
        left: 1.3rem;
        top: 1.2rem;
      }
    }
    &.usa {
      height: 2.4rem;
      width: 4rem;
      background: url('~assets/icons/states/usa.svg') no-repeat;
      background-size: contain;

      .label {
        position: relative;
        left: 2.2rem;
        top: 1.2rem;
      }
    }
  }
}

</style>
