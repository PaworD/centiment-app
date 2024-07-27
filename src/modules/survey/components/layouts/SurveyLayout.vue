<template>
  <div class="SurveyLayout">
    <div class="SurveyLayout__progress-bar">
      <span class="SurveyLayout__progress"></span>
    </div>

    <div class="SurveyLayout__header">
      <div class="SurveyLayout__header__logo">
        <img src="@/assets/logo.png" alt="">
      </div>
    </div>

    <div class="SurveyLayout__content">
      <Container>
        <router-view />
      </Container>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Container } from '@/shared/components/atoms/Container'
</script>

<style lang="scss">

.SurveyLayout {
  &__progress {
    content: '';
    position: absolute;
    width: 30%;
    height: 2px;
    left: 0;
    background-color: $accent;

    &-bar {
      height: 2px;
      width: 100%;
      background-color: $accent-lighter;

      position: relative;
    }
  }

  &__header {
    padding: 6px 16px;
    border-bottom: 1px solid $accent-lighter;

    &__logo {
      height: 32px;

      display: flex;
      align-items: center;
      justify-content: flex-start;
    }
  }

  &__content {
    margin-top: 46px;
  }
}
</style>