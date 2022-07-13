<template>
    <nav class="bg-dark md:bg-transparent">
        <div class="flex items-center justify-between px-2 sm:px-4 md:px-6 py-3">
            <UiLogo  />

            <ul class="hidden md:flex ">
                <li v-for="{ id, text, route } in navLinks" :key="id" class="mr-5 lg:mr-10 last:mr-0">
                    <a :href="route"
                        class="border-b border-b-transparent text-lg md:text-xl transition-all hover:border-b-light">
                        {{ text }}
                    </a>
                </li>
            </ul>

            <div class="inline-block md:hidden">
                <MenuIcon v-if="!isMenuVisible" class="w-10 cursor-pointer text-light"
                    @click="isMenuVisible = !isMenuVisible" />
                <XIcon v-if="isMenuVisible" class="w-10 cursor-pointer text-light"
                    @click="isMenuVisible = !isMenuVisible" />
            </div>

            <div :class="[
                'absolute left-0 right-0 h-96 rounded-md flex items-center justify-center bg-dark transition-all mobile-menu',
                { 'opacity-100': isMenuVisible },
                { 'top-16': isMenuVisible },
                { 'z-50': isMenuVisible },
                { visible: isMenuVisible },
                { 'pointer-events-auto': !isMenuVisible },
                { 'opacity-0': !isMenuVisible },
                { '-top-full': !isMenuVisible },
                { '-z-40': !isMenuVisible },
                { 'pointer-events-auto': !isMenuVisible },
                { invisible: !isMenuVisible },
            ]" style="box-shadow: 0px 15px 20px -20px rgba(0, 0, 0, 0.5)">
                <ul class="flex flex-col items-center">
                    <li v-for="{ id, text, route } in navLinks" :key="id" class="mb-3 last:mb-0">
                        <a :href="route" @click="isMenuVisible = !isMenuVisible"
                            class="border-b border-b-transparent text-2xl">
                            {{ text }}
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script setup>
import { MenuIcon, XIcon } from '@heroicons/vue/solid'

const isMenuVisible = ref(false)

const navLinks = ref([
    { id: 1, text: 'О нас', route: '#about' },
    { id: 2, text: 'Услуги', route: '#services' },
    { id: 3, text: 'Связаться', route: '#contacts' },
    // { id: 3, text: 'Контакты', route: '/contacts' },
])
</script>

<style lang="postcss" scoped>
</style>