@php
    $portfolios = [
        [
            'name' => 'نرم افزار میز',
            'description' => "نرم افزار میز یک نرم افزار همه جانبه برای IOS و Android بود که به عاشقان قهوه این اجازه رو میداد که بتوانند نزدیک ترین
کافه در اطراف خود را مشاهده کنند و به میز رزرو کنند.",
            'image' => '/images/portfolio/miz.png',
            'services' => [
                [
                    'name' => 'طراحی رابط کاربری',
                    'color' => '#3498DB',
                ],
                [
                    'name' => 'توسعه چندسکویی',
                    'color' => '#808080',
                ],
            ],
        ],
        [
            'name' => 'شاپینو',
            'description' => "قالب شاپینو یک طراحی منحصر به فرد و ویژه میباشد که برای یک فروشگاه اینترنتی طراحی شده. این فروشگاه با استفاده از
بروزترین ابزار و متد های روز طراحی و پیاده سازی شده که باعث میشه کاربر نهایت لذت در خرید خود را احساس کند.",
            'image' => '/images/portfolio/shopino.png',
            'services' => [
                [
                    'name' => 'طراحی رابط کاربری',
                    'color' => '#3498DB',
                ],
                [
                    'name' => 'توسعه فول‌استک',
                    'color' => '#FFA500',
                ],
            ],
            'social' => [
                'website' => 'https://ario-team-shopino.netlify.app/',
                'github' => 'https://github.com/Ario-Team/shapino-frontend',
            ],
        ],
        [
            'name' => 'رستوران بایت می',
            'description' => "قالب رستوران بایت می یک بازنویسی کاملا حرفه ای از قالب Biteme در وب سایت ThemeForest میباشد که با استفاده از بروزترین
متد و ابزار های روز انجام شده.",
            'image' => '/images/portfolio/biteme.png',
            'services' => [
                [
                    'name' => 'توسعه فول‌استک',
                    'color' => '#FFA500',
                ],
            ],
            'social' => [
                'website' => 'https://biteme-theme.netlify.app/',
                'github' => 'https://github.com/Ario-Team/biteme-theme',
            ],
        ],
    ];
@endphp

<div id="portfolios" class="w-full h-max flex flex-col items-center justify-start gap-[42px] py-8">
    <div class="w-max h-max flex flex-col items-center justify-start gap-4">
        <x-heroicon-m-user-circle class="w-8 h-8 text-primary" />
        <h2
            class="w-full font-black text-primary text-center text-xl sm:text-2xl leading-header md:text-3xl md:leading-header  lg:text-5xl lg:leading-header">
            نمونه کار ها
        </h2>
        <p class="font-bold text-primary opacity-50 text-sm md:text-base">
            کار های منتخب من
        </p>
    </div>
    <div class="w-full h-max flex flex-col items-center justify-start gap-[52px]">
        @foreach ($portfolios as $portfolio)
            <section dir="rtl"
                class="w-full h-max flex flex-col items-center gap-6 lg:flex-row-reverse lg:items-start">
                <div class="w-full overflow-hidden max-h-[520px]">
                    <img class="w-full aspect-auto rounded-box" src='{{ $portfolio['image'] }}'
                        alt='{{ $portfolio['name'] }}' />
                </div>
                <div
                    class="w-full h-full flex flex-col items-center justify-start gap-8 lg:h-[495px] lg:justify-between">
                    <div class="w-full h-max flex flex-col items-center justify-center gap-8 lg:items-start">
                        <h1 class="font-semibold text-xl text-primary">{{ $portfolio['name'] }}</h1>
                        <p class="text-center text-base font-normal leading-content lg:text-right">
                            {{ $portfolio['description'] }}
                        </p>
                    </div>
                    <div
                        class="w-full h-max flex flex-col items-center justify-center gap-4 md:flex-row md:justify-between">
                        <div class="w-max flex items-center justify-center gap-8">
                            @foreach ($portfolio['services'] as $service)
                                <x-box :name="$service['name']" :color="$service['color']" />
                            @endforeach
                        </div>
                        @if (array_key_exists('social', $portfolio))
                            <div class="w-max flex items-center justify-center gap-8">
                                <x-social-link text="وب سایت" :href="$portfolio['social']['website']" :show="array_key_exists('website', $portfolio['social'])" />
                                <x-social-link text="گیت هاب" :href="$portfolio['social']['github']" :show="array_key_exists('github', $portfolio['social'])" />
                            </div>
                        @endif

                    </div>
                </div>
            </section>
        @endforeach
    </div>
</div>
