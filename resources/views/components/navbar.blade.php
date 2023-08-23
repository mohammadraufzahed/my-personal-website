<nav x-data='{ open: false }' class='relative w-full h-max flex flex-row items-center justify-between'>
    <div class="w-max flex items-center justify-center gap-11">
        <a href="/" class="w-max text-3xl md:text-4xl lg:text-5xl font-black">
            م
        </a>
        <div class="hidden md:block">
            <x-navbar-links />
        </div>
    </div>
    <div>
        <div class='md:hidden cursor-pointer flex flex-col items-center justify-center gap-1.5' @click='open = !open'>
            <div class="w-10 h-0.5 bg-black transition-all duration-300 data-[open=true]:rotate-[-50deg] data-[open=true]:translate-y-2"
                x-bind:data-open="open"></div>
            <div class="w-10 h-0.5 bg-black transition-all duration-300 data-[open=true]:hidden"
                x-bind:data-open="open"></div>
            <div class="w-10 h-0.5 bg-black transition-all duration-300 data-[open=true]:rotate-[50deg]"
                x-bind:data-open="open"></div>
        </div>
        <div x-show="open" x-bind:data-open="open" class="group md:hidden">
            <div class="fixed z-10 w-full h-full bg-primary/10 backdrop-blur-sm left-0 top-0 opacity-0 group-data-[open=true]:animate-opacity"
                @click="open = false" />
            <div
                class="fixed w-44 translate-x-[-50vw] h-full z-10 top-0 left-0 bg-white group-data-[open=true]:animate-sidebar flex flex-col items-start justify-start pt-4">
                <x-heroicon-o-x-mark @click='open = false' class="text-primary w-10 self-end cursor-pointer" />
                <div class="w-full flex-auto flex flex-col items-center justify-between py-4">
                    <x-navbar-links />
                    <x-lets-talk />
                </div>
            </div>
        </div>

    </div>
    <div class="hidden md:block">
        <x-lets-talk />
    </div>
</nav>
