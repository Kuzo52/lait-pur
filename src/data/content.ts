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
    bg: "#EFE8DC",
    bgSoft: "#F7F2EA",
    hoverTint: "#E8DFD0",
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
      "Растительный напиток на\u00a0органическом овсе с\u00a0северных полей. Плотная микропена и\u00a0лёгкая злаковая сладость.",
    volume: "750\u00a0мл",
    calories: "48\u00a0ккал",
    protein: "1,2\u00a0г",
    tasting: "тосты, ваниль, мёд",
    bg: "#E5DFD0",
    bgSoft: "#F0EADC",
    hoverTint: "#DDD5C2",
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
      "Растительный напиток на\u00a0миндале холодного отжима. Тонкий ореховый вкус без\u00a0лишней сладости.",
    volume: "750\u00a0мл",
    calories: "39\u00a0ккал",
    protein: "1,5\u00a0г",
    tasting: "миндаль, белый персик",
    bg: "#EDDCD7",
    bgSoft: "#F6EAE6",
    hoverTint: "#E6D0C9",
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
      "Какао одного урожая и\u00a0наше классическое молоко. Знакомый вкус при\u00a0чистом составе.",
    volume: "750\u00a0мл",
    calories: "72\u00a0ккал",
    protein: "3,1\u00a0г",
    tasting: "тёмный какао, карамель",
    bg: "#DDD0C0",
    bgSoft: "#E9DFD2",
    hoverTint: "#D4C4B0",
    accent: "#A07858",
    accentDeep: "#5C3D28",
    milk: "#F2E4D4",
    glyph: "04",
  },
];

export const navLinks = [
  { href: "#about", label: "О\u00a0нас" },
  { href: "#story", label: "Принципы" },
  { href: "#milk-bar", label: "Линейка" },
  { href: "#journey", label: "Путь" },
  { href: "#subscribe", label: "Рассылка" },
] as const;

export const aboutPoints = [
  {
    title: "Откуда мы",
    body: "Ферма в\u00a0Сконе, на\u00a0юге Швеции. Короткий путь от\u00a0пастбища до\u00a0розлива держит вкус цельным.",
  },
  {
    title: "Зачем мы",
    body: "Убрать лишний шум из\u00a0питьевой линейки: без\u00a0пустых обещаний, без\u00a0спешки и\u00a0без\u00a0лишних добавок.",
  },
  {
    title: "Как считаем качество",
    body: "Сначала сырьё и\u00a0спокойный процесс, затем лаборатория, затем стекло. Если этап ломается\u00a0— партия не\u00a0уезжает.",
  },
] as const;

export const storyTiles = [
  {
    id: "cows",
    title: "Спокойное стадо",
    eyebrow: "Ферма\u00a014",
    body: "Около 300\u00a0дней в\u00a0году коровы на\u00a0пастбище. Воздух, трава и\u00a0тишина задают вкус.",
    span: "md:col-span-2",
    metric: "300",
    metricLabel: "дней на\u00a0лугу",
  },
  {
    id: "organic",
    title: "Органика",
    eyebrow: "Сертификат",
    body: "Без гормонов, антибиотиков и\u00a0ГМО\u00a0— только сертифицированное сырьё.",
    span: "md:col-span-1",
    metric: "100%",
    metricLabel: "контроль состава",
  },
  {
    id: "packaging",
    title: "Стеклянный цикл",
    eyebrow: "Упаковка",
    body: "Бутылка возвращается в\u00a0оборот. Бумага\u00a0— из\u00a0восстановленных лесов.",
    span: "md:col-span-1",
    metric: "∞",
    metricLabel: "замкнутый цикл",
  },
  {
    id: "craft",
    title: "Малая партия",
    eyebrow: "Каждое утро",
    body: "Бережная пастеризация. Молоко покидает ферму в\u00a0течение 12\u00a0часов.",
    span: "md:col-span-2",
    metric: "12\u00a0ч",
    metricLabel: "до\u00a0отгрузки",
  },
] as const;

export const timelineSteps = [
  {
    id: "pasture",
    title: "Пастбище",
    time: "05:40",
    body: "Утренний выгон. Коровы сами выбирают траву\u00a0— так складывается профиль вкуса.",
  },
  {
    id: "milking",
    title: "Доение",
    time: "06:30",
    body: "Тихая линия без\u00a0стресса. Каждая партия получает свой номер.",
  },
  {
    id: "lab",
    title: "Лаборатория",
    time: "08:15",
    body: "Проверяем чистоту, жирность и\u00a0вкус. Брак остаётся на\u00a0ферме.",
  },
  {
    id: "bottle",
    title: "Розлив",
    time: "10:00",
    body: "Стекло стерилизуем паром, молоко идёт холодной линией.",
  },
  {
    id: "glass",
    title: "В\u00a0ваш стакан",
    time: "День\u00a00",
    body: "Доставка в\u00a0течение суток. Открываете\u00a0— и\u00a0чувствуете ферму без\u00a0посредников.",
  },
] as const;

export const testimonials = [
  {
    name: "Анна К.",
    role: "шеф-бариста",
    quote:
      "Пена держится минутами. Для\u00a0капучино это уже не\u00a0просто молоко, а\u00a0инструмент.",
  },
  {
    name: "Марк Л.",
    role: "сомелье вкуса",
    quote:
      "В\u00a0классике слышны луговые ноты. Такой чистый финиш встречается редко.",
  },
] as const;

export const heroMarquee = [
  "Классическое",
  "Овсяное",
  "Миндальное",
  "Шоколадное",
  "Органика",
  "Стекло",
  "Сконе",
] as const;
