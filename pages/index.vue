<template>
    <div>
        <header class="min-h-screen">
            <GlobalNavbar />
            <div class="text-center" style="margin-top: 20vh">
                <h1 class="text-4xl md:text-5xl lg:text-6xl">IT-компания Панчшер</h1>
                <p class="mb-3 lg:mb-5 text-lg md:text-xl lg:text-2xl">У вас есть видение, а у нас методы реализации
                </p>
                <UiButton>
                    <a href="#contacts">Реализовать фантазии</a>
                </UiButton>
            </div>
        </header>
        <main class="bg-dark/80">
            <div class="max-w-app-container mx-auto px-2 sm:px-4 md:px-6">
                <GlobalSection id="about">
                    <template #title>О нас</template>

                    <template #left-content>
                        <h2 class="mb-5">Кто мы?</h2>
                        <p class="mb-10">
                            Мы молодая прогрессивная компания, которая занимается продвижением оффлайн бизнесов в
                            сети. В деле, мы
                            придерживаемся принципов честности и эффективности, поэтому клиенты доверют нам
                            популяризацию своего
                            бизнеса в сети.
                        </p>
                        <UiButton>
                            <a href="#services">Ознакомиться с усгулами</a>
                        </UiButton>
                    </template>
                    <template #right-content>
                        <IllustrationsSrandupMeetengBro />
                    </template>
                </GlobalSection>
                <section id="services">
                    <h1 class="mb-10 md:mb-16 text-center">Чем мы заниемся?</h1>

                    <div class="flex flex-col md:flex-row items-center justify-between">
                        <div class="service-card shadow-light bg-light/80">
                            <h3 class="mb-2 text-dark">Разработка</h3>
                            <p class="text-dark">
                                Далеко-далеко за словесными горами в стране, гласных и согласных живут рыбные тексты.
                            </p>
                            <a href="#contacts" class="bg-light text-dark ">
                                Хочу разработку
                            </a>
                        </div>
                        <div class="service-card shadow-darkblue bg-darkblue/80">
                            <h3 class="mb-2 text-light">Дизайн</h3>
                            <p class="text-light">
                                Далеко-далеко за словесными горами в стране, гласных и согласных живут рыбные тексты.
                            </p>
                            <a href="#contacts" class="bg-darkblue text-light">
                                Хочу дизайн
                            </a>
                        </div>
                        <div class="service-card shadow-darkgreen bg-darkgreen/80">
                            <h3 class="mb-2 text-light">Маркетинг</h3>
                            <p class="text-light">
                                Далеко-далеко за словесными горами в стране, гласных и согласных живут рыбные тексты.
                            </p>
                            <a href="#contacts" class="bg-darkgreen text-light">
                                Хочу маркетинг
                            </a>
                        </div>
                    </div>
                </section>
                <GlobalSection id="contacts">
                    <template #title>Связаться с нами</template>

                    <template #left-content>
                        <IllustrationsFormsBro />
                    </template>
                    <template #right-content class="self-skretch">
                        <form action="#" method="post">
                            <h2 class="mb-8 xl:mb-10">Заполните поля</h2>
                            <div class="w-full mb-5">
                                <label for="name" class="block mb-1">Как к вам обращаться? *</label>
                                <input type="text" placeholder="Имя"
                                    class="w-full px-4 py-1 rounded-md bg-light/80 text-dark" />
                            </div>
                            <div class="w-full mb-5">
                                <label for="name" class="block mb-1">Укажите ваш E-mail *</label>
                                <input type="email" placeholder="E-mail"
                                    class="w-full px-4 py-1 rounded-md bg-light/80 text-dark" />
                            </div>
                            <div class="w-full mb-8">
                                <label for="service" class="block mb-1">Выберите желаемую услугу</label>
                                <select name="service">
                                    <option value="default" disabled selected>Ничего не выбрано</option>
                                    <option value="dev">Разработка</option>
                                    <option value="design">Дизайн</option>
                                    <option value="marketing">Маркетинг</option>
                                </select>
                            </div>
                            <UiButton>Отправить</UiButton>
                        </form>
                    </template>
                </GlobalSection>
            </div>
        </main>
        <GlobalFooter />
    </div>
</template>

<script setup>
definePageMeta({
    layout: 'index'
})
</script>

<style lang="postcss" scoped>

.service-card {
    @apply w-full mb-10 md:mb-0 md:mr-6 lg:mr-8 xl:mr-10 px-4 py-3 rounded-md shadow-md;
}

.service-card:last-child {
    @apply mr-0;
}

.service-card p {
    @apply mb-5 text-sm leading-4;
}

.service-card a {
    @apply inline-block w-full text-center py-2 px-4 text-base font-bold rounded-md shadow-md transition-all;
}

.service-card a:hover {
    @apply shadow-none bg-transparent
}

select,
option {
    @apply w-full px-4 py-2 rounded-md bg-light/80 text-dark
}
</style>