<script setup lang="ts">
import { useQuery } from '@tanstack/vue-query'
import ProductCard from '@/components/ProductCard.vue'
import ProductCategories from '@/components/ProductCategories.vue'
import ProductsSection from '@/components/ProductsSection.vue'
import { getDrinks, getRolls, getSets, getSnacks, getSushi } from '@/services/dishes'

const { data: sushis, isLoading: isSushiLoading } = useQuery(['dishes', 'sushi'], getSushi)
const { data: rolls, isLoading: isRollsLoading } = useQuery(['dishes', 'rolls'], getRolls)
const { data: sets, isLoading: isSetsLoading } = useQuery(['dishes', 'sets'], getSets)
const { data: snacks, isLoading: isSnacksLoading } = useQuery(['dishes', 'snacks'], getSnacks)
const { data: drinks, isLoading: isDrinksLoading } = useQuery(['dishes', 'drinks'], getDrinks)
</script>

<template>
  <ProductCategories />
  <ProductsSection title="Суши">
    <ProductCard v-for="sushi in sushis" v-bind="sushi" :key="sushi.dish_id" />
  </ProductsSection>
  <ProductsSection title="Роллы">
    <ProductCard v-for="roll in rolls" v-bind="roll" :key="roll.dish_id" />
  </ProductsSection>
  <ProductsSection title="Сеты">
    <ProductCard v-for="set in sets" v-bind="set" :key="set.dish_id" />
  </ProductsSection>
  <ProductsSection title="Закуски">
    <ProductCard v-for="snack in snacks" v-bind="snack" :key="snack.dish_id" />
  </ProductsSection>
  <ProductsSection title="Напитки">
    <ProductCard v-for="drink in drinks" v-bind="drink" :key="drink.dish_id" />
  </ProductsSection>
</template>

<style scoped></style>
