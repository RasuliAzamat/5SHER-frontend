<template>
    <div class="bg-dark/80">
        <header>
            <GlobalNavbar />
        </header>
        <main class="min-h-screen max-w-app-container mx-auto px-2 sm:px-4 md:px-6">
            <slot />
        </main>
        <GlobalFooter class="bg-darkblue" />
        <canvas id="canvas"></canvas>
    </div>
</template>

<script setup>

</script>

<style lang="postcss" scoped>
</style>