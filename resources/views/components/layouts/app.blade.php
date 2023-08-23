<!DOCTYPE html>
<html lang="fa" dir=rtl>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>محمد رئوف زاهد - توسعه دهنده FullStack</title>
    {{-- Styles --}}
    @vite('resources/css/app.scss')
</head>

<body class="font-iran-yekan bg-[#f3f7fa] p-8 pb-0">
    <div class="w-full h-max flex flex-col justify-between gap-11 max-w-[1400px] mx-auto">
        <x-navbar />
        {{ $slot }}
        <x-footer />
    </div>
    @vite('./resources/js/app.ts')
</body>

</html>
