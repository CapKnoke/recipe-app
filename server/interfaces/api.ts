export interface MeasuresResponse {
  us: {
    amount: number,
    unitShort: string,
    unitLong: string
  },
  metric: {
    amount: number,
    unitShort: string,
    unitLong: string
  }
};

export interface IngredientResponse {
  id: number,
  aisle: string,
  image: string,
  consistency: string,
  name: string,
  nameClean: string,
  original: string,
  originalName: string,
  amount: number,
  unit: string,
  meta: string[],
  measures: MeasuresResponse,
};

export interface StepEquipmentResponse {
  id: number,
  name: string,
  localizedName: string,
  image: string
};

export interface StepIngredientResponse {
  id: number,
  name: string,
  localizedName: string,
  image: string
};

export interface StepResponse {
  number: number,
  step: string,
  ingredients: StepIngredientResponse[],
  equipment: StepEquipmentResponse[],
};

export interface RecipeResponse {
  vegetarian: boolean,
  vegan: boolean,
  glutenFree: boolean,
  dairyFree: boolean,
  veryHealthy: boolean,
  cheap: boolean,
  veryPopular: boolean,
  sustainable: boolean,
  lowFodmap: boolean,
  weightWatcherSmartPoints: number,
  gaps: string,
  preparationMinutes: number,
  cookingMinutes: number,
  aggregateLikes: number,
  healthScore: number,
  creditsText: string,
  license: string,
  sourceName: string,
  pricePerServing: number,
  extendedIngredients: IngredientResponse[],
  id: number,
  title: string,
  readyInMinutes: number,
  string: number,
  sourceUrl: URL,
  openLicense: number,
  image: URL,
  imageType: string,
  summary: string,
  cuisines: string[],
  dishTypes: string[],
  diets: string[],
  occasions: string[],
  instructions: string,
  analyzedInstructions: [
    {
      name: string,
      steps: StepResponse[],
    }
  ]
  originalId: number | string | null,
  spoonacularSourceUrl: URL
};

export interface SearchParams {
  query: string,
};

export interface RandomParams {
  tags?: string,
};
