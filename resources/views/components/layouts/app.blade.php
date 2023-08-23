<!DOCTYPE html>
<html lang="fa" dir=rtl>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>محمد رئوف زاهد - توسعه دهنده FullStack</title>
    {{-- Styles --}}
    <link rel='stylesheet' href="{{ Vite::asset('resources/css/app.scss') }}" />
</head>

<body class="font-iran-yekan bg-[#f3f7fa] p-8 pb-0">
    <div class="w-full h-max flex flex-col justify-between gap-11 max-w-[1400px] mx-auto">
        <x-navbar />
        <div class="w-full h-full z-0">
            {{ $slot }}
        </div>
        <x-footer />
    </div>
    <script type="module" src="{{ Vite::asset('resources/js/app.ts') }}"></script>

</body>

</html>
