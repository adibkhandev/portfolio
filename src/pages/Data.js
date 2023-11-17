import weebzone_logo from '../images/manga-archieve-back.jpg'
import adictionary_logo from '../images/adictionary-2d.png'
import weebzone_categories from '../images/weebzone_categories.jpg'
import eye from '../images/icons8-eye-100.png'
import globe from '../images/icons8-globe-96.png'
import github from '../images/icons8-github-64.png'
import sugary from '../images/sugary.png'
let data = [
    {
            "name":"Sugary",
            "live_url":"https://sugary.me/",
            "clip_url":"",
            "repo_url":"https://github.com/SugaryLLC/sugary-site-web",
            "image_url":sugary,
            "hover_image_url":weebzone_categories,
            "intro":'An e-commerce brand website. I fixed a few bugs made the site functional and worked on their other web modules.',
            "extra":'For this project I adapted to the Vue Nuxt stack and was able to contribute to their projects.',
            "release":'14/07/2023',
            "tools":[
                {
                    name:'Vue',
                    percent:90,
                },
                {
                    name:'Nuxt',
                    percent: 80,
                },
                {
                    name:'Tailwind',
                    percent:40,
                },
                {
                    name:'Prime Vue',
                    percent:40,
                },{
                    name:'Vueuse',
                    percent:30,
                },{
                    name:'Sass',
                    percent:60,
                },
            ],
        },
        {
            "name":"Manga zone",
            "live_url":"https://adibkhandev.github.io/rhinoapp",
            "clip_url":"",
            "repo_url":"https://github.com/adibkhandev/rhinoapp",
            "image_url":weebzone_logo,
            "hover_image_url":weebzone_categories,
            "intro":"Another e commerce project featuring anime products and comic books.It has features like JWT authentication global state for cart and liked products has functionality for reviews and user profile enabling options like wish list and orders and we can just update and monitor the products orders and user from Django's admin panel.",
            "extra":'I wrote front end code in React and SASS while on the backend we have a python Django server.',
            "release":'14/11/2022',
            "tools":[
                {
                    name:'Django',
                    percent:80,
                },
                {
                    name:'DRF',
                    percent:40,
                },
                {
                    name:'React',
                    percent:90,
                },
                {
                    name:'Redux',
                    percent:30,
                },
                {
                    name:'Sass',
                    percent:50,
                },

            ],

        },
        {
            "name":"Adictionary",
            "live_url":"https://adictionary.vercel.app",
            "clip_url":"",
            "repo_url":"https://github.com/adibkhandev/adictionary",
            "image_url":adictionary_logo,
            "hover_image_url":weebzone_categories,
            "intro":'A dictionary app. A personal project that i wrote in react and tailwind. It provides a clean UI to search meaning  pronounciation and examples of English words.',
            "extra":' Under the hood a third party API is used :P',
            "release":'19/05/2023',
            "tools":[
                {
                    name:'React',
                    percent:80,
                },
                {
                    name:'Tailwind',
                    percent:60,
                },
                {
                    name:'Third party API',
                    percent:70,
                }
            ],

        },

    ]  
    export default data