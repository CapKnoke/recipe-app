export interface StepIngredient {
  id: number,
  name: string,
};

export interface StepEquipment {
  id: number,
  name: string,
}

export interface Step {
  number: number,
  step: string,
  ingredients: Array<StepIngredient>,
  equipment?: Array<StepEquipment>,
}

export interface Measures {
  us: {
    amount: number,
    unit: string,
  },
  metric: {
    amount: number,
    unit: string,
  }
}

export interface Ingredient {
  id: number,
  name: string,
  measures: Measures,
};

export interface RecipePreview {
  id: number,
  title: string,
  image: URL,
  readyInMinutes: number,
  veryHealthy: boolean,
  vegan: boolean,
  healthScore: number,
  dishTypes: Array<string>,
};

export interface Recipe {
  id: number,
  title: string,
  readyInMinutes: number,
  ingredients: Array<Ingredient>,
  summary: string,
  instructions: string,
  steps: Array<Step>,
  error?: string,
};
