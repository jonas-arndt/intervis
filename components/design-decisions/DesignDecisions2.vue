<template>
  <div>
    <h1>Visualisierung von Diskriminierung und Privilegierung</h1>

    <QuestionWithHiddenAnswer>
      Das Netz aus verwobenen Strichen ist immer sichtbar und einzelne Strichausrichtungen werden nie ohne dieses Netz dargestellt
      <template v-slot:toggle>
        Warum?
      </template>
      <template v-slot:answer>
        Lorem Ipsum …
      </template>
    </QuestionWithHiddenAnswer>

    <QuestionWithHiddenAnswer>
      Diskriminierung wird durch orangefarbene und in den Vordergrund tretende Striche visualisiert
      <template v-slot:toggle>
        Warum?
      </template>
      <template v-slot:answer>
        Lorem Ipsum …
      </template>
    </QuestionWithHiddenAnswer>

    <QuestionWithHiddenAnswer>
      Es können sich vielfältige, unterschiedliche und individuelle Formen aus dem Netz der verwobenen Striche herausbilden
      <template v-slot:toggle>
        Warum?
      </template>
      <template v-slot:answer>
        <p>
          Diskriminierung wird durch orangefarbene und in den Vordergrund tretende Striche visualisiert. Sie erschweren das Lesen der Begriffe Zugang, Einbeziehung, Teilhabe und Anerkennung bzw. können sie sogar unlesbar machen: Personen, die Diskriminierung erfahren, sind benachteiligt, wenn es um Zugang zu Ressourcen, soziale und politische Teilhabe, gesellschaftliche Einbeziehung und Anerkennung etc. geht. Privilegierung wird durch grau-violette Striche visualisiert, die im Hintergrund verweilen. Sie hindern nicht am Lesen der Begriffe. Mit der Verwendung dieser übereinanderliegenden Ebenen soll die vermeintlich »normale« – neutrale, objektive – Sicht auf die Wörter herausgefordert werden. Denn dieser »view from nowhere« ist immer ein »view from somewhere«, nämlich die Sicht von denjenigen, die in unserer Gesellschaft privilegiert sind und als Norm gelten.
        </p>
      </template>
    </QuestionWithHiddenAnswer>

    <QuestionWithHiddenAnswer>
      Eine verworfene Alternative
      <template v-slot:toggle>
        Mehr dazu
      </template>
      <template v-slot:answer>
        <img src="~/assets/intervis_disclosure_figures/alternative2.png">
        <p>
          Ein*e im Projektprozess befragte*r Expert*in zu Intersektionalität wies darauf hin, dass soziale Kategorien aus intersektionaler Perspektive nie isoliert voneinander zu betrachten sind. Das Netz der sozialen Kategorien – unabhängig davon, ob eine Person basierend auf diesen sozialen Kategorien diskriminiert oder privilegiert wird – ist immer und für jede Person rekonstruierbar und jede Person ist durch mehrere Identitäten intersektional geprägt. Personen oder Gruppen, die »nur« sexistische Diskriminierung erfahren und in anderen sozialen Kategorien privilegiert sind, mit ausschließlich horizontalen Strichen zu visualisieren (was Diskriminierung basierend auf der sozialen Kategorie »Geschlecht« angzeigt) ist daher nicht ganz treffend und kann zu einem falschen Verständnis von Intersektionalität führen. Diese sehr hilfreiche Kritik führte zu einer Verfeinerung der visuellen Repräsentation: Das Netz der sozialen Kategorien ist immer sichtbar. Diskriminierung wird durch orangefarbene und in den Vordergrund tretende Striche visualisiert. Privilegierung wird durch grau-violette Striche visualisiert, die im Hintergrund verweilen.
        </p>
      </template>
    </QuestionWithHiddenAnswer>
  </div>
</template>
