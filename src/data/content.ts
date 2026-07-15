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
  accent: string;
  accentDeep: string;
  milk: string;
  label: string;
}

export const products: Product[] = [
  {
    id: "classic",
    name: "Классическое",
    tagline: "Цельное. Мягкое. Честное.",
    description:
      "Молоко травяного откорма с\u00a0естественной жирностью 3,5%. Без\u00a0гомогенизации для\u00a0той самой «сливочной» текстуры.",
    volume: "750\u00a0мл",
    calories: "64\u00a0ккал",
    protein: "3,4\u00a0г",
    tasting: "свежие сливки, луговые цветы",
    bg: "#EAF2F6",
    bgSoft: "#F4F8FA",
    accent: "#9BB8C9",
    accentDeep: "#5A7A8C",
    milk: "#FFFDF8",
    label: "#FAF9F6",
  },
  {
    id: "oat",
    name: "Овсяное",
    tagline: "Бархатная пена в\u00a0каждой чашке.",
    description:
      "Органический овёс с\u00a0нормандских полей. Идеально для\u00a0латте: плотная микропена и\u00a0лёгкая сладость злака.",
    volume: "750\u00a0мл",
    calories: "48\u00a0ккал",
    protein: "1,2\u00a0г",
    tasting: "тосты, ваниль, мёд",
    bg: "#F0EAD8",
    bgSoft: "#F7F3E9",
    accent: "#C4B28A",
    accentDeep: "#8A7550",
    milk: "#FBF6EA",
    label: "#F5EDE0",
  },
  {
    id: "almond",
    name: "Миндальное",
    tagline: "Лёгкость с\u00a0ореховым характером.",
    description:
      "Калифорнийский миндаль холодного отжима. Тонкий ореховый привкус без\u00a0лишней сладости и\u00a0добавок.",
    volume: "750\u00a0мл",
    calories: "39\u00a0ккал",
    protein: "1,5\u00a0г",
    tasting: "миндаль, белый персик",
    bg: "#EDE6DC",
    bgSoft: "#F6F1EA",
    accent: "#D2B8A0",
    accentDeep: "#8C6B52",
    milk: "#FFF8F1",
    label: "#F3E8DC",
  },
  {
    id: "chocolate",
    name: "Шоколадное",
    tagline: "Какао Single\u00a0Origin. Без\u00a0сиропов.",
    description:
      "Натуральное какао из\u00a0Эквадора и\u00a0наше классическое молоко. Детский вкус взрослой чистоты состава.",
    volume: "750\u00a0мл",
    calories: "72\u00a0ккал",
    protein: "3,1\u00a0г",
    tasting: "тёмный какао, карамель",
    bg: "#E4D5C8",
    bgSoft: "#EFE6DC",
    accent: "#A07858",
    accentDeep: "#5C3D28",
    milk: "#F2E4D4",
    label: "#E8D4C0",
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
    body: "Стадо гуляет на\u00a0пастбище 300\u00a0дней в\u00a0году. Свежий воздух, трава и\u00a0тишина\u00a0— основа вкуса.",
    span: "lg:col-span-2 lg:row-span-2",
    accent: "sage",
  },
  {
    id: "organic",
    title: "100%\u00a0органика",
    eyebrow: "EU Organic",
    body: "Никаких гормонов, антибиотиков и\u00a0ГМО. Только сертифицированное сырьё.",
    span: "lg:col-span-1 lg:row-span-1",
    accent: "sky",
  },
  {
    id: "packaging",
    title: "Эко-упаковка",
    eyebrow: "Cycle\u00a0Ready",
    body: "Стекло и\u00a0бумага из\u00a0восстановленных лесов. Бутылка возвращается в\u00a0оборот.",
    span: "lg:col-span-1 lg:row-span-1",
    accent: "cream",
  },
  {
    id: "craft",
    title: "Малая партия",
    eyebrow: "Chaque matin",
    body: "Пастеризация при\u00a0бережной температуре. Молоко покидает ферму в\u00a0течение 12\u00a0часов.",
    span: "lg:col-span-2 lg:row-span-1",
    accent: "graphite",
  },
] as const;

export const timelineSteps = [
  {
    id: "pasture",
    title: "Пастбище",
    time: "05:40",
    body: "Утренний выгон. Коровы выбирают траву сами\u00a0— это\u00a0формирует сложный профиль вкуса.",
  },
  {
    id: "milking",
    title: "Доение",
    time: "06:30",
    body: "Тихая доильная линия без\u00a0стресса. Каждая порция отмечается по\u00a0партии.",
  },
  {
    id: "lab",
    title: "Лаборатория",
    time: "08:15",
    body: "Проверка на\u00a0чистоту, жирность и\u00a0органолептику. Брак не\u00a0покидает ферму.",
  },
  {
    id: "bottle",
    title: "Розлив",
    time: "10:00",
    body: "Стекло стерилизуется паром. Молоко разливается в\u00a0холодной линии.",
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
    role: "шеф-бариста, Atelier",
    quote:
      "Пена держится минутами. Для\u00a0капучино это\u00a0уже не\u00a0молоко, а\u00a0инструмент.",
  },
  {
    name: "Марк Л.",
    role: "сомелье вкуса",
    quote:
      "В\u00a0классике слышны луговые ноты. Редко встречаю молоко с\u00a0таким чистым финишем.",
  },
] as const;
