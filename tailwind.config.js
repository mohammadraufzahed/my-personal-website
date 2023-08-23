/** @type {import('tailwindcss').Config} */
export default {
    content: ["./resources/**/*.{blade.php}"],
    theme: {
        extend: {
            colors: {
                primary: "#092E20",
            },
            fontFamily: {
                "iran-yekan": ['"IRANYekanX"', "tahoma", "arial"],
            },
            borderRadius: {
                box: 10,
            },
            lineHeight: {
                header: "165%",
                content: "200%",
            },
            keyframes: {
                opacity: {
                    from: {
                        opacity: 0,
                    },
                    to: {
                        opacity: 1,
                    },
                },
                sidebar: {
                    from: {
                        transform: "translateX(-50vw)",
                    },
                    to: {
                        transform: "translateX(0vw)",
                    },
                },
            },
            backgroundImage: {
                hero: "url('/images/hero-image.jpg')",
            },
            animation: {
                sidebar: "sidebar 1s 0.3s ease forwards",
                opacity: "opacity .3s ease forwards",
            },
        },
    },
    plugins: [],
};
