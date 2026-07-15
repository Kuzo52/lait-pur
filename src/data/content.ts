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
  glyph: string;
}

export const BRAND = "MŪNA";

export const products: Product[] = [
  {
    id: "classic",
    name: "Классическое",
    tagline: "Цельное. Мягкое. Честное.",
    description:
      "Молоко травяного откорма с\u00a0естественной жирностью 3,5%. Сливочная текстура без\u00a0лишней обработки.",
    volume: "750\u00a0мл",
    calories: "64\u00a0ккал",
    protein: "3,4\u00a0г",
    tasting: "сливки, луговые цветы",
    bg: "#F3EFE9",
    bgSoft: "#FAF8F5",
    hoverTint: "#F0EBE3",
    accent: "#C9B8A0",
    accentDeep: "#7A6A55",
    milk: "#FFFDF8",
    glyph: "01",
  },
  {
    id: "oat",
    name: "Овсяное",
    tagline: "Бархатная пена в\u00a0каждой чашке.",
    description:
      "Органический овёс северных полей. Плотная микропена и\u00a0лёгкая злаковая сладость.",
    volume: "750\u00a0мл",
    calories: "48\u00a0ккал",
    protein: "1,2\u00a0г",
    tasting: "тосты, ваниль, мёд",
    bg: "#EAE4D9",
    bgSoft: "#F7F3EC",
    hoverTint: "#E8E1D4",
    accent: "#C4B28A",
    accentDeep: "#8A7550",
    milk: "#FBF6EA",
    glyph: "02",
  },
  {
    id: "almond",
    name: "Миндальное",
    tagline: "Лёгкость с\u00a0ореховым характером.",
    description:
      "Миндаль холодного отжима. Тонкий ореховый привкус без\u00a0лишней сладости.",
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
    glyph: "03",
  },
  {
    id: "chocolate",
    name: "Шоколадное",
    tagline: "Настоящее какао. Без\u00a0сиропов.",
    description:
      "Какао одного урожая и\u00a0классическое молоко. Знакомый вкус\u00a0— чистый состав.",
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
    glyph: "04",
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
    eyebrow: "Ферма\u00a014",
    body: "300 дней на\u00a0пастбище. Тишина и\u00a0трава\u00a0— основа вкуса.",
    span: "md:col-span-2",
    metric: "300",
    metricLabel: "дней на лугу",
  },
  {
    id: "organic",
    title: "Органика",
    eyebrow: "Сертификат",
    body: "Без гормонов, антибиотиков и\u00a0ГМО.",
    span: "md:col-span-1",
    metric: "100%",
    metricLabel: "чистота состава",
  },
  {
    id: "packaging",
    title: "Эко-цикл",
    eyebrow: "Стекло",
    body: "Бутылка возвращается в\u00a0оборот. Бумага из\u00a0восстановленных лесов.",
    span: "md:col-span-1",
    metric: "∞",
    metricLabel: "замкнутый цикл",
  },
  {
    id: "craft",
    title: "Малая партия",
    eyebrow: "Каждое утро",
    body: "Пастеризация бережно. С фермы\u00a0— за\u00a012\u00a0часов.",
    span: "md:col-span-2",
    metric: "12ч",
    metricLabel: "до отгрузки",
  },
] as const;

export const timelineSteps = [
  {
    id: "pasture",
    title: "Пастбище",
    time: "05:40",
    body: "Утренний выгон. Коровы выбирают траву сами.",
  },
  {
    id: "milking",
    title: "Доение",
    time: "06:30",
    body: "Тихая линия без\u00a0стресса. Каждая партия отмечена.",
  },
  {
    id: "lab",
    title: "Лаборатория",
    time: "08:15",
    body: "Чистота, жирность, вкус. Брак не\u00a0уезжает.",
  },
  {
    id: "bottle",
    title: "Розлив",
    time: "10:00",
    body: "Стекло и\u00a0холодная линия. Точная геометрия упаковки.",
  },
  {
    id: "glass",
    title: "В\u00a0ваш стакан",
    time: "День\u00a00",
    body: "Доставка за\u00a0сутки. Ферма без\u00a0посредников.",
  },
] as const;

export const testimonials = [
  {
    name: "Анна К.",
    role: "шеф-бариста",
    quote:
      "Пена держится минутами. Для\u00a0капучино это\u00a0уже инструмент.",
  },
  {
    name: "Марк Л.",
    role: "сомелье вкуса",
    quote:
      "В\u00a0классике слышны луговые ноты. Чистый финиш\u00a0— редкость.",
  },
] as const;
