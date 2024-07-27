<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { useService } from '@/shared/composables'

import { ISurveysRepository, Survey as ISurvey, SurveysRepositorySymbol } from
    '@/modules/survey/contracts'
import { SurveyRenderer } from '../../components/organisms/SurveyRenderer'
import { Survey } from '../../components/organisms/Survey'

const surveysRepository = useService<ISurveysRepository>(SurveysRepositorySymbol)

const surveys = ref<ISurvey[]>([])

onMounted(async () => {
  setTimeout(async () => {
    surveys.value = await surveysRepository.fetchSurveys()
  }, 500)
})
</script>

<template>
  <SurveyRenderer v-bind="{ surveys }">
    <template #default="{ survey }">
      <Survey v-bind="{ survey }" />
    </template>
  </SurveyRenderer>
</template>

<style lang="scss">

</style>