@props(['text' => '', 'href' => '', 'show' => false])

<a href='{{ $href }}'
    className='data-[show=false]:hidden font-medium pb-2 transition-all duration-300 cursor-pointer text-primary text-base border-primary border-b-[1px]'
    data-show='{{ $show }}'>
    {{ $text }}
</a>
