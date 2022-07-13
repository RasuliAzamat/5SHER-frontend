<template>
    <section>
        <h1 class="mb-10 md:mb-16 text-center">
            <slot name="title" />
        </h1>

        <div class="flex flex-col md:flex-row items-center justify-between">

            <div class="w-full basis-1/2 md:mr-5">
                <slot name="left-content" />
            </div>
            <div class="w-full basis-1/2 mb-5 md:mb-0">
                <slot name="right-content" />
            </div>
        </div>
    </section>
</template>

<script setup>

</script>

<style lang="css" scoped>
</style>