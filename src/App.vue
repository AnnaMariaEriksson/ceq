<template>
  <div class="home" ref="home">
    <SizeDetector @resized="$root.size = $event"/>
    <div class="tes001Form">
    <Info v-show="currentPage === 1 || !isMobile" />
    <h2 v-show="currentPage === 2 || !isMobile">TES001 Testkurs</h2>
    <b-form method="get" ref="form">

      <section class="genderAndYearOfBirth" v-show="currentPage === 2 || !isMobile">
        <b-form-group label="Kön">
          <b-form-radio-group name="koen" :options="genders"/>
        </b-form-group>
          <b-form-group label="Födelseår">
            <b-form-input class="w-50" max="4" type="text" placeholder="(ÅÅÅÅ)" name="faar"></b-form-input>
          </b-form-group>
      </section>

      <StartingYear v-show="currentPage === 3 || !isMobile"/>
      <Programs v-show="currentPage === 4 || !isMobile" />

      <section class="major" v-show="currentPage === 5 || !isMobile">

        <b-form-group label="Avslutning/inriktning (ange moderprogram ovan)">
          <b-form-radio-group name="avslutning" :options="major"/>
        </b-form-group>
      </section>
      <Studio v-show="currentPage === 6 || !isMobile"/>
      <Participation v-show="currentPage === 7 || !isMobile"/>

      <QuestionGrid1 v-show="showQuestions" :current-page="currentPage" :first-question-page="firstQuestionPage" :last-question-page="lastQuestionPage" :is-mobile="isMobile" :sticky-class="stickyClass" />

      <div v-show="currentPage === 34 || !isMobile" v-bind:class="stickyClass.isSticky === false">
        <h2>TES001 Testkurs</h2>
        <p><i>Var konstruktiv och håll en trevlig ton. Skriv inte kränkande kommentarer.</i></p>
        <p><i>Ditt studieråd kommer att gå igenom dina fritextsvar före de sammanställs och skickas till kursläraren</i></p>
      </div>
        <div>
        <section v-show="currentPage === 35 || !isMobile">
          <p><b>Vad tycker du var det bästa med den här kursen?</b></p>
          <b-form-textarea name="F27" rows="10"/>
        </section>
      </div>

      <div v-show="isMobile && currentPage === 36 || !isMobile">
        <section>
          <p><b>Vad tycker du behöver förbättras?</b></p>
          <b-form-textarea  name="F28" rows="10"/>
          <hr>
        </section>

        <b-row>
          <b-button class="float-right" @click="sendForm">Skicka in enkäten</b-button>
        </b-row>

      </div>
    </b-form>
    </div>
      <b-pagination
        class="fixed-bottom"
        v-show="isMobile"
        v-model="currentPage"
        :total-rows="lastPage"
        :per-page="1"
        hide-goto-end-buttons
        last-number
        align="center"
        @page-click="scrollToTop"
      >
        <template #prev-text><i class="fal fa-chevron-left fa-sm"></i></template>
        <template #next-text>Nästa <i class="fal fa-chevron-right fa-sm"></i></template>
      </b-pagination>

  </div>
</template>

<script>
import Info from '@/components/Info'
import StartingYear from '@/components/StartingYear'
import Programs from './components/Programmes'
import Studio from '@/components/Studio'
import Participation from '@/components/Participation'
import QuestionGrid1 from '@/components/QuestionGrid1'
import SizeDetector from '@/components/SizeDetector'
export default {
  name: 'Home',
  components: {
    QuestionGrid1,
    Participation,
    Studio,
    StartingYear,
    Programs,
    Info,
    SizeDetector
  },
  data () {
    return {
      genders: [
        { text: 'Kvinna', value: '1' },
        { text: 'Man', value: '2' },
        { text: 'Ej svar', value: 'NaN' }
      ],
      courseOrExchange: [
        { text: 'Fristående kurs', value: 'FRI' },
        { text: 'Utbytesstudent', value: 'EXST' }
      ],
      major: [
        { text: 'Kina', value: 'KINA' },
        { text: 'Ej svar', value: 'NaN' }
      ],
      currentPage: 1,
      lastPage: 36,
      firstQuestionPage: 8,
      lastQuestionPage: 33,
      stickyClass: {
        isSticky: true,
        'sticky-top': true
      }
    }
  },
  computed: {
    isMobile () {
      return this.$root.size === 'sm' || this.$root.size === 'xs'
    },
    showQuestions () {
      return !this.isMobile || (this.currentPage >= this.firstQuestionPage && this.currentPage <= this.lastQuestionPage)
    }
  },
  methods: {
    sendForm () {
      this.$refs.form.submit()
    },
    scrollToTop () {
      scrollTo(0, 0)
    }
  }
}
</script>

<style>
section {
  width: 100%;
  padding: 3%;
  margin-bottom: 1%;
}
.fixed-bottom {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 50px;
}

</style>
