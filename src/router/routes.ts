type Router = {
  path: string;
  name: string;
  component: () => void;
};

export const routes = [
  {
    path: "/",
    name: "Mercury",
    component: () => import("../views/MercuryView.vue"),
  },
  {
    path: "/earth",
    name: "Earth",
    component: () => import("../views/EarthView.vue"),
  },
  {
    path: "/earth",
    name: "Earth",
    component: () => import("../views/EarthView.vue"),
  },
  {
    path: "/jupiter",
    name: "Jupiter",
    component: () => import("../views/JupiterView.vue"),
  },
  {
    path: "/mars",
    name: "Mars",
    component: () => import("../views/MarsView.vue"),
  },
  {
    path: "/neptune",
    name: "Neptune",
    component: () => import("../views/NeptureView.vue"),
  },
  {
    path: "/saturn",
    name: "Saturn",
    component: () => import("../views/SaturnView.vue"),
  },
  {
    path: "/uranus",
    name: "Uranus",
    component: () => import("../views/UranusView.vue"),
  },
  {
    path: "/venus",
    name: "Venus",
    component: () => import("../views/VenusView.vue"),
  },
] as unknown as Router[];

export enum RoutesLink {
  Earth = "/earth",
  Mars = "/mars",
  Venus = "/venus",
  Uranus = "/uranus",
  Saturn = "/saturn",
  Jupiter = "/jupiter",
  Neptune = "/neptune",
  Mercury = "/",
}

export const pathNames = [
  { name: "Mercury", path: RoutesLink.Mercury },
  { name: "Venus", path: RoutesLink.Venus },
  {
    name: "Earth",
    path: RoutesLink.Earth,
  },
  { name: "Mars", path: RoutesLink.Mars },
  { name: "Jupiter", path: RoutesLink.Jupiter },
  { name: "Saturn", path: RoutesLink.Saturn },
  { name: "Uranus", path: RoutesLink.Uranus },
  { name: "Neptune", path: RoutesLink.Neptune },
];
