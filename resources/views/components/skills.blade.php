@php
    $skills = [
        [
            'name' => 'TypeScript',
            'color' => '#007ACC',
        ],
        [
            'name' => 'Django',
            'color' => '#092E20',
        ],
        [
            'name' => 'React',
            'color' => '#4F5D95',
        ],
        [
            'name' => 'VueJS',
            'color' => '#41B883',
        ],
        [
            'name' => 'PHP',
            'color' => '#4F5D95',
        ],
        [
            'name' => 'Laravel',
            'color' => '#FF2D20',
        ],
        [
            'name' => 'NestJS',
            'color' => '#E0234E',
        ],
        [
            'name' => 'React Native',
            'color' => '#61DAFB',
        ],
        [
            'name' => 'Python',
            'color' => '#306998',
        ],
    ];
@endphp

<div x-data='{swiper: null}'
    x-init='swiper = new Swiper($refs.container, {
    dir: "ltr",
    modules: [SwiperModules.Autoplay],
    autoplay: {delay: 2000},
    breakpoints: {
        0: {
          slidesPerView: 2,
        },
        530: {
          slidesPerView: 3,
        },
        712: {
          slidesPerView: 4,
        },
        900: {
          slidesPerView: 5,
        },
        1198: {
          slidesPerView: 6,
        },
        1400: {
          slidesPerView: 7,
        },
      }
})'
    class="w-full h-max">
    <div dir="ltr" class="swiper-container" x-ref='container' id='about_me'>
        <div class="swiper-wrapper">
            @foreach ($skills as $skill)
                <div class="swiper-slide">
                    <x-box :name="$skill['name']" :color="$skill['color']" />
                </div>
            @endforeach
        </div>
    </div>
</div>
