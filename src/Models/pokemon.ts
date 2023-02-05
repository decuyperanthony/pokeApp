export type Pokemon = {
  name: string;
  weight: number;
  height: number;
  sprites: {
    front_default: string | null;
  };
  types: ReadonlyArray<{ type: { name: string } }>;
};
