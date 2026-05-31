<template>
  <footer class="max-w-5xl mx-auto p-2 pb-0">
    <div class="bg-[#d7f5e6]/90 border border-[#7ed9ad]/50 rounded-t-2xl p-4 shadow-lg backdrop-blur-xl text-[#1f3329]">
      <div class="flex max-sm:flex-col gap-4">
        <div class="w-full relative">
          <h4>
            <b class="text-xl">
              Jiku Labs
              <span class="inline-block px-2 py-0.5 text-[#1f3329] bg-[#7ed9ad]/70 rounded-full text-sm">
                PERSONAL SITE
              </span>
            </b>
            © 2026
          </h4>
          <p class="text-sm opacity-80">
            A quiet corner of the internet, made with Vue, Vite and Tailwind CSS.
          </p>
        </div>

        <div class="w-full">
          <div class="text-right">
            <Icon icon="devicon:vuejs" class="text-3xl inline mr-2" />
            <Icon icon="devicon:vitejs" class="text-3xl inline mr-2" />
            <Icon icon="devicon:tailwindcss" class="text-3xl inline mr-2" />
            <Icon icon="devicon:javascript" class="text-3xl inline mr-2" />
          </div>
          <div class="text-[.65em] text-right opacity-70 italic mt-2">
            <p>Based on my original portfolio website</p>
            <p>Icons: MingCute Design</p>
            <p>Animations: VueUse Motion</p>
          </div>
        </div>
      </div>

      <p class="text-sm opacity-60 mt-3">
        <a href="https://github.com/kyuiki/kyuiki-website" target="_blank" rel="noopener noreferrer">
          Original template
          <Icon icon="mingcute:external-link-line" class="text-lg inline mb-1" />
        </a>
      </p>
    </div>
  </footer>
</template>