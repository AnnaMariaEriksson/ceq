<template>
  <div>
    <section class="questionGrid1">

      <div v-if="isMobile && questionsList.length > 0">
        <h2>TES001 Testkurs</h2>
          <div v-for="(question, i) in questionsList" :key="i">
            <div v-show="currentPage === firstQuestionPage + i">
              <b-row class="mb-2">
                <b-col class="text-center">{{question}}</b-col>
              </b-row>
              <b-row>
                <div style="width: 16%" class="text-center" v-for="n in 5" :key="n">{{n}}
                  <b-form-radio plain :value="value < 6 ? value : 'Ej svar'" :name="'F' + i + 1" v-model="answer[i]"></b-form-radio>
                </div>
                <div style="width: 20%" class="text-center">Ej&nbsp;svar
                  <b-form-radio plain value="Ej svar" :name="'F' + i + 1" v-model="answer[i]"></b-form-radio>
                </div>
              </b-row>
              <b-row>
                <b-col xs="1" v-for="value in 6" :key="value">
                  <b-form-group>

                  </b-form-group></b-col>
              </b-row>
              <div class="text-center mt-2 question-info">
                1 = Jag tar helt avstånd från påståendet<br>
                5 = Jag instämmer helt i påståendet<br>
                Ej svar = Jag vet inte/Jag vill inte svara
              </div>
            </div>

          </div>
      </div>

      <b-container v-show="!isMobile">
        <div :class="stickyClass">
        <b-row style="background-color: white"><h2>TES001 Testkurs</h2></b-row>
        <b-row style="background-color: #f2f1f0;">
          <b-col xl="5" lg="5" md="5" xs="1">
            1 = Jag tar helt avstånd från påståendet<br>
            5 = Jag instämmer helt i påståendet<br>
            Ej svar = Jag vet inte/Jag vill inte svara</b-col>

          <b-col/>
          <b-col v-for="n in 5" xs="1" :key="n">{{n}}</b-col>
          <b-col>Ej svar</b-col>
        </b-row><br>
        </div>
        <b-row v-for="(question, i) in questionsList" :key="i" class="question-rows">
          <b-col xl="6" lg="5" md="5" xs="*"><p class="columnParagraph">{{question}}</p></b-col>
          <b-col xs="1" v-for="value in 6" :key="value">
            <b-form-group>
              <b-form-radio :value="value < 6 ? value : 'Ej svar'" :name="'F' + i + 1" v-model="answer[i]"></b-form-radio>
            </b-form-group>
          </b-col>

        </b-row><br>
      </b-container>
    </section>
  </div>
</template>

<script>
import { questionGrid } from '@/List'

export default {
  name: 'QuestionGrid1',
  props: {
    isMobile: Boolean,
    currentPage: Number,
    firstQuestionPage: Number,
    lastQuestionPage: Number,
    stickyClass: Object
  },
  data () {
    return {
      wizardPage: 0,
      choices: [1, 2, 3, 4, 5, 6],
      answer: new Array(questionGrid.length).fill() // use fill to get real values instead of an empty array. This is to get reactivity to work properly
    }
  },
  created () {
  },
  computed: {
    questionsList () {
      return questionGrid
    }
  },
  mounted () {
  },
  methods: {
    question () {
      const page = this.wizardPage += 1
      return page
    },
    questionGrid (questionNumber) {
      return questionGrid[questionNumber]
    }
  }
}
</script>

<style scoped>
.columnParagraph {
}
.question-info {
  font-size: small;
}

.question-rows {
  padding: 2% 0px 2% 0px;
}

.question-rows:nth-child(even) {
  background-color: #f2f1f0;
}
</style>
