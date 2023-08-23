@php
    $services = [
        [
            'name' => 'طراحی رابط کاربری',
            'color' => '#3498DB',
        ],
        [
            'name' => 'توسعه چندسکویی',
            'color' => '#808080',
        ],
        [
            'name' => 'توسعه فول‌استک',
            'color' => '#FFA500',
        ],
    ];
@endphp

<div class='w-full h-max flex flex-col gap-[52px]' x-data='{swiper: null}'
    x-init='swiper = new Swiper($refs.container, {
        modules: [SwiperModules.Autoplay],
    breakpoints: {
          0: {
            slidesPerView: 1,
            autoplay: {delay: 2000}
          },
          425: {
            slidesPerView: 2,
            autoplay: {delay: 2000}
          },
          695: {
            slidesPerView: 3,
            centeredSlidesBounds: true,
            spaceBetween: 52,
          },
        },
})'>
    <h2
        class='w-full font-black text-primary text-center text-xl sm:text-2xl leading-header md:text-3xl md:leading-header  lg:text-5xl lg:leading-header'>
        متمرکز بر روی ساخت یک تجربه عالی و بی نقص برای مشتریان شما
    </h2>
    <div class='swiper-container' x-ref='container'>
        <div class='swiper-wrapper'>
            @foreach ($services as $service)
                <div class="swiper-slide">
                    <x-box :color="$service['color']" :name="$service['name']" />
                </div>
            @endforeach
        </div>
    </div>
</div>
