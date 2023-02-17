<template>
  <div
    class="absolute z-50 flex w-full justify-between px-6 pt-2.5 text-lg text-secondary"
  >
    <router-link to="/" class="text-center font-semibold uppercase">
      <p>Ailurus</p>
    </router-link>
    <nav>
      <ul class="flex items-center justify-center space-x-2 lg:space-x-10">
        <li>
          <router-link
            to="/"
            class="transition-all duration-300 ease-in-out"
            :class="
              $route.name === 'RedPanda' ? 'text-base font-semibold' : 'text-xs'
            "
          >
            Panda Roux
          </router-link>
        </li>
        <li>
          <router-link
            to="/bluewhale"
            class="transition-all duration-300 ease-in-out"
            :class="
              $route.name === 'BlueWhale'
                ? 'text-base font-semibold'
                : 'text-xs'
            "
          >
            Baleine Bleue
          </router-link>
        </li>
        <li>
          <router-link
            to="/snowyowl"
            class="transition-all duration-300 ease-in-out"
            :class="
              $route.name === 'SnowyOwl' ? 'text-base font-semibold' : 'text-xs'
            "
          >
            Harfang des Neiges
          </router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>
