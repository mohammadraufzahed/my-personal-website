@php
    $links = [
        [
            'title' => 'نمونه کار ها',
            'href' => '#portfolios',
        ],
        [
            'title' => 'درباره من',
            'href' => '#about_me',
        ],
        [
            'title' => 'تماس با من',
            'href' => '#contact_me',
        ],
    ];
@endphp

<div class="w-full flex-auto flex flex-col md:flex-row items-center justify-start gap-4 pt-5">
    @foreach ($links as $link)
        <a href="{{ $link['href'] }}" @click="open = false">{{ $link['title'] }}</a>
    @endforeach
</div>
