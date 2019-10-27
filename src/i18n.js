import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
    en: {
        translation: {
            projects: 'Projects',
            aboutMe: 'About me',
            splashHeader: "Hi, I'm Tim",
            splashSubHeader: 'I design and build front-end applications.',
            aboutMePara1: "I aim to combine design and technology from concept to realisation. As an architecture graduate of the Technical University of Delft, I wrote my master thesis on modular building systems, sustainable materials and building transformation, but got 'slightly sidetracked' by web development.",
            aboutMePara2: 'In parallel to my studies, I often worked on web development projects for committees, part-time jobs and -just for- fun. I pursued a career in software engineering combining my design skills and front-end development experience.',
            aboutMePara3: 'I enjoy discussing UX concepts, visual designs and the latest trends on front-end development.',
            findMeOn: 'Find me on',
        },
    },
    nb: {
        translation: {
            projects: 'Prosjekter',
            aboutMe: 'Om meg',
            splashHeader: 'Hei, jeg er Tim',
            splashSubHeader: 'Jeg designer og utvikler front-end applikasjoner',
            aboutMePara1: 'Jeg tar sikte på å kombinere design og teknologi fra konsept til realisering. Som arkitektutdannet ved Delfts Tekniske Universitet skrev jeg min masteroppgave om modulære byggsystemer, bærekraftig materiale og byggtransformasjon, men ble "litt sidetracked" av webutvikling.',
            aboutMePara2: 'Parallelt med studiene jobbet jeg ofte med webutviklingsprosjekter for komiteer, deltidsjobber og bare for moro skyld. Jeg begynte en karriere innen programvareteknologi som kombinerte designkunnskapene mine med front-end utvikling erfaring.',
            aboutMePara3: 'Jeg liker å diskutere og utføre UX-konsepter, visuelle design og de nyeste trendene innen front-end-utvikling.',
            findMeOn: 'Finn meg på',
        },
    },
    nl: {
        translation: {
            projects: 'Projecten',
            aboutMe: 'Over mij',
            splashHeader: 'Hoi, ik ben Tim',
            splashSubHeader: 'Ik ontwerp en ontwikkel front-end applicaties',
            aboutMePara1: 'Ik streef ernaar ontwerp en technologie te combineren van concept tot realisatie. Als afgestudeerd architect aan de Technische Universiteit van Delft schreef ik mijn masterscriptie over modulaire bouwsystemen, duurzame materialen en gebouwtransformatie, maar werd raakte ik enigszins op een zijspoor door webontwikkeling.',
            aboutMePara2: 'Parallel aan mijn studie werkte ik vaak aan webontwikkelingsprojecten voor commissies, parttime banen en voor de lol. Zo ging ik aan de slag als software-engineer waar ik mijn ontwerpvaardigheden en front-end development skills kon gaan combineren.',
            aboutMePara3: 'Ik geniet van het bespreken en realiseren van UX-concepten, visuele ontwerpen en de nieuwste trends op het gebied van front-end ontwikkeling.',
            findMeOn: 'Vind me op',
        },
    },
};


const getLocale = () => {
    const userLangPreference = navigator.language === 'nn' ? 'nb' : navigator.language;
    const languages = ['en', 'nb', 'nl'];
    const index = languages.indexOf(userLangPreference);
    if (index > -1) {
        return languages[index];
    }
    return 'en';
};

export const locale = localStorage.getItem('locale') || getLocale();

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        lng: locale,

        keySeparator: false, // we do not use keys in form messages.welcome

        interpolation: {
            escapeValue: false, // react already safes from xss
        },
    });

export default i18n;
