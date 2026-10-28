// DeepSeek model metadata. The provider catalog owns ids, context windows and cost;
// tiers and icons are display-only and used by the web and terminal model pickers.
export const curatedModels = [
  {
    id: "deepseek-v4-pro",
    name: "DeepSeek V4 Pro",
    tier: "A",
    icon: "deepseek.png",
  },
  {
    id: "deepseek-flash",
    name: "DeepSeek V4.1 Flash",
    tier: "A",
    icon: "deepseek.png",
  },
] as const;
export const defaultModelId = "deepseek-v4-pro";
