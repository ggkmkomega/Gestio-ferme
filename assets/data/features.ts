export type FeatureItem = {
  id: number;
  title: string;
  icon: string;
  color: string;
};

const features: FeatureItem[] = [
  {
    id: 1,
    title: "Chicken",
    icon: "chicken",
    color: "rgba(149, 75, 0, 0.7)", // muted brown
  },
  {
    id: 2,
    title: "Feature 2",
    icon: "example2",
    color: "rgba(229, 229, 234, 0.7)", // soft gray
  },
  {
    id: 3,
    title: "Feature 3",
    icon: "example3",
    color: "rgba(135, 162, 181, 0.7)", // dull blue
  },
  {
    id: 4,
    title: "Feature 4",
    icon: "example4",
    color: "rgba(139, 148, 103, 0.7)", // faded green
  },
  {
    id: 5,
    title: "Feature 5",
    icon: "example5",
    color: "rgba(245, 245, 220, 0.7)", // muted beige
  },
  {
    id: 6,
    title: "Feature 6",
    icon: "example6",
    color: "rgba(199, 184, 234, 0.7)", // soft lavender
  },
  {
    id: 7,
    title: "Feature 7",
    icon: "example7",
    color: "rgba(255, 196, 153, 0.7)", // dull orange
  },
  {
    id: 8,
    title: "Feature 8",
    icon: "example8",
    color: "rgba(69, 179, 250, 0.7)", // faded teal
  },
];

export default features;