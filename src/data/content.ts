export type ProductId = "classic" | "oat" | "almond" | "chocolate";

export interface Product {
  id: ProductId;
  name: string;
  tagline: string;
  description: string;
  volume: string;
  calories: string;
  protein: string;
  tasting: string;
  bg: string;
  bgSoft: string;
  hoverTint: string;
  accent: string;
  accentDeep: string;
  milk: string;
  label: string;
  image: string;
  imageAlt: string;
}

/**
 * Безармочные Unsplash-кадры (без логотипов Oatly / Alpro / Horizon и т.п.).
 * Проверены по описаниям: бутылка без этикетки, пастбище, чистый налив, эстетичный натюрморт.
 */
export const IMAGES = {
  heroBottle:
    "https://images.unsplash.com/photo-1563636619-e9143da7973b?auto=format&fit=crop&w=1200&q=80",
  farmMist:
    "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1200&q=80",
  classicPour:
    "https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=1200&q=80",
  craftAlt:
    "https://images.unsplash.com/photo-1678314609962-1028f2bce919?auto=format&fit=crop&w=1200&q=80",
  almonds:
    "https://images.unsplash.com/photo-1508061253366-f7da027a4ad0?auto=format&fit=crop&w=1200&q=80",
  chocolate:
    "https://images.unsplash.com/photo-1606312619070-d48b4d1f5873?auto=format&fit=crop&w=1200&q=80",
  glassMorning:
    "https://images.unsplash.com/photo-1628088062854-d1870b45533b?auto=format&fit=crop&w=1200&q=80",
  organic:
    "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=1200&q=80",
} as const;

/** Единственное имя бренда. */
export const BRAND = "MŪNA";

export const products: Product[] = [
  {
    id: "classic",
    name: "Классическое",
    tagline: "Цельное. Мягкое. Честное.",
    description:
      "Молоко травяного откорма с\u00a0естественной жирностью 3,5%. Без\u00a0гомогенизации\u00a0— та\u00a0самая сливочная текстура северных ферм.",
    volume: "750\u00a0мл",
    calories: "64\u00a0ккал",
    protein: "3,4\u00a0г",
    tasting: "свежие сливки, луговые цветы",
    bg: "#F3EFE9",
    bgSoft: "#FAF8F5",
    hoverTint: "#F3EFE9",
    accent: "#C9B8A0",
    accentDeep: "#7A6A55",
    milk: "#FFFDF8",
    label: "#FAF8F5",
    image: IMAGES.classicPour,
    imageAlt: "Чистый налив молока без логотипов",
  },
  {
    id: "oat",
    name: "Овсяное",
    tagline: "Бархатная пена в\u00a0каждой чашке.",
    description:
      "Органический овёс северных полей. Плотная микропена и\u00a0лёгкая злаковая сладость\u00a0— для\u00a0идеального латте.",
    volume: "750\u00a0мл",
    calories: "48\u00a0ккал",
    protein: "1,2\u00a0г",
    tasting: "тосты, ваниль, мёд",
    bg: "#EAE4D9",
    bgSoft: "#F7F3EC",
    hoverTint: "#EAE4D9",
    accent: "#C4B28A",
    accentDeep: "#8A7550",
    milk: "#FBF6EA",
    label: "#F5EDE0",
    image: IMAGES.craftAlt,
    imageAlt: "Эстетичный натюрморт с молоком",
  },
  {
    id: "almond",
    name: "Миндальное",
    tagline: "Лёгкость с\u00a0ореховым характером.",
    description:
      "Миндаль холодного отжима. Тонкий ореховый привкус без\u00a0лишней сладости и\u00a0добавок.",
    volume: "750\u00a0мл",
    calories: "39\u00a0ккал",
    protein: "1,5\u00a0г",
    tasting: "миндаль, белый персик",
    bg: "#F2E6E4",
    bgSoft: "#F9F1F0",
    hoverTint: "#F0DDD8",
    accent: "#D4A99A",
    accentDeep: "#8C6B52",
    milk: "#FFF8F1",
    label: "#F3E8DC",
    image: IMAGES.almonds,
    imageAlt: "Миндаль и натуральные ингредиенты",
  },
  {
    id: "chocolate",
    name: "Шоколадное",
    tagline: "Настоящее какао. Без\u00a0сиропов.",
    description:
      "Какао одного урожая и\u00a0наше классическое молоко. Знакомый вкус\u00a0— чистый состав.",
    volume: "750\u00a0мл",
    calories: "72\u00a0ккал",
    protein: "3,1\u00a0г",
    tasting: "тёмный какао, карамель",
    bg: "#E8D9CC",
    bgSoft: "#F0E6DC",
    hoverTint: "#E0D0C0",
    accent: "#A07858",
    accentDeep: "#5C3D28",
    milk: "#F2E4D4",
    label: "#E8D4C0",
    image: IMAGES.chocolate,
    imageAlt: "Какао и шоколад без товарных знаков",
  },
];

export const navLinks = [
  { href: "#story", label: "История" },
  { href: "#milk-bar", label: "Линейка" },
  { href: "#journey", label: "Путь" },
  { href: "#subscribe", label: "Рассылка" },
] as const;

export const storyTiles = [
  {
    id: "cows",
    title: "Счастливые коровы",
    eyebrow: "Ферма №\u00a014",
    body: "Стадо гуляет на\u00a0пастбище 300\u00a0дней в\u00a0году. Свежий воздух, трава и\u00a0тишина\u00a0— основа вкуса MŪNA.",
    span: "lg:col-span-2 lg:row-span-2",
    accent: "sage",
    image: IMAGES.farmMist,
    imageAlt: "Альпийские луга в утреннем тумане",
  },
  {
    id: "organic",
    title: "100%\u00a0органика",
    eyebrow: "Европейский стандарт",
    body: "Без\u00a0гормонов, антибиотиков и\u00a0ГМО. Только сертифицированное сырьё.",
    span: "lg:col-span-1 lg:row-span-1",
    accent: "sky",
    image: IMAGES.organic,
    imageAlt: "Свежая органика без упаковочных брендов",
  },
  {
    id: "packaging",
    title: "Эко-упаковка",
    eyebrow: "Замкнутый цикл",
    body: "Стекло и\u00a0бумага из\u00a0восстановленных лесов. Бутылка возвращается в\u00a0оборот.",
    span: "lg:col-span-1 lg:row-span-1",
    accent: "cream",
    image: IMAGES.heroBottle,
    imageAlt: "Стеклянная бутылка без логотипов",
  },
  {
    id: "craft",
    title: "Малая партия",
    eyebrow: "Каждое утро",
    body: "Пастеризация при\u00a0бережной температуре. Молоко покидает ферму в\u00a0течение 12\u00a0часов.",
    span: "lg:col-span-2 lg:row-span-1",
    accent: "graphite",
    image: IMAGES.glassMorning,
    imageAlt: "Свежее молоко утром",
  },
] as const;

export const timelineSteps = [
  {
    id: "pasture",
    title: "Пастбище",
    time: "05:40",
    body: "Утренний выгон. Коровы выбирают траву сами\u00a0— так рождается сложный профиль вкуса.",
    image: IMAGES.farmMist,
  },
  {
    id: "milking",
    title: "Доение",
    time: "06:30",
    body: "Тихая доильная линия без\u00a0стресса. Каждая порция отмечается по\u00a0партии.",
    image: IMAGES.glassMorning,
  },
  {
    id: "lab",
    title: "Лаборатория",
    time: "08:15",
    body: "Проверка на\u00a0чистоту, жирность и\u00a0вкус. Брак не\u00a0покидает ферму.",
    image: IMAGES.organic,
  },
  {
    id: "bottle",
    title: "Розлив",
    time: "10:00",
    body: "Стекло стерилизуется паром. Молоко разливается в\u00a0холодной линии.",
    image: IMAGES.heroBottle,
  },
  {
    id: "glass",
    title: "В\u00a0ваш стакан",
    time: "День\u00a00",
    body: "Доставка в\u00a0течение суток. Открываете\u00a0— и\u00a0чувствуете ферму без\u00a0посредников.",
    image: IMAGES.classicPour,
  },
] as const;

export const testimonials = [
  {
    name: "Анна К.",
    role: "шеф-бариста, кофейня «Ателье»",
    quote:
      "Пена держится минутами. Для\u00a0капучино это\u00a0уже не\u00a0молоко, а\u00a0инструмент.",
    image: IMAGES.craftAlt,
  },
  {
    name: "Марк Л.",
    role: "сомелье вкуса",
    quote:
      "В\u00a0классике слышны луговые ноты. Редко встречаю молоко с\u00a0таким чистым финишем.",
    image: IMAGES.classicPour,
  },
] as const;
