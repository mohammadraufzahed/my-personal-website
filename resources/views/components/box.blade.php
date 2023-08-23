@props(['name' => '', 'color' => ''])


<div class='flex items-center justify-center gap-2.5'>
    <div class='w-2 h-2 rounded-full' style='background-color: {{ $color }}'></div>
    <span class='w-max font-black text-base lg:text-xl' style='color: {{ $color }}''>
        {{ $name }}
    </span>
</div>
