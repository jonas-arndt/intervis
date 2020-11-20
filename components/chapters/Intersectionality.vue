<template>
  <div class="chapter what-is-intersectionality">
    <div class="background" />
    <div class="narrative">
      <div class="step">
        <h2>Was ist Intersektionalität?</h2>
        <p>
          Wir leben in einer Gesellschaft, in der bestimmte Macht- und Herrschaftsstrukturen vorherrschen, wie Rassismus, Sexismus, Ableismus, Klassismus, Homo- und Transphobie, Cis- und Heterosexismus, Anti-muslimischer Rassismus, Antisemitismus, Anti-Roma Rassismus etc. Diese sind aus intersektionaler Perspektive nicht eindimensional und getrennt voneinander zu betrachten und existieren nicht unabhängig voneinander. Auch können sie nicht einfach addiert werden.
        </p>
      </div>
      <div class="step">
        <p>
          Sie sind ineinander verwoben und verflochten, wirken gleichzeitig zusammen und stehen in einer ständigen Wechselwirkung zueinander.
        </p>
        <p>
          Jede Person ist durch mehrere und gleichzeitig zusammenwirkende soziale Kategorien, wie ›Rasse‹, Ethnizität, Klassenzugehörigkeit, Geschlecht, sexuelle Orientierung, Geschlechtsidentität, Behinderung, Alter, Religion und anderen Identitätsachsen, intersektional geprägt. Im Rahmen der genannten Herrschaftsstrukturen werden Personen und Gruppen aufgrund dieser sozialen Kategorien unterschiedlich diskriminiert und privilegiert. Dies führt zu sozialer Ungleichheit in unserer Gesellschaft.
        </p>
        <div class="detour">
          <a href="#">Exkurs zur Begriffsentwicklung von Intersektionalität</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../../styles/_variables";

.chapter.what-is-intersectionality {
  position: relative;

  & > .background {
    position: sticky;
    top: 0;

    width: 100%;
    height: 100vh;

    z-index: -1;

    background: url('~assets/lines/lines-orange.jpg');
    background-size: cover;
  }

  .narrative {
    position: relative;
    margin-top: -100vh;
    padding: 50vh 10% 50vh 10%;

    .step {
      @include white-boxed-narrative-step;
      margin-bottom: 150vh;

      &:last-child {
        margin-bottom: inherit;
      }
    }

    .detour a {
      @include red-button;
    }
  }
}
</style>
