export type BodyPartId =
  | 'head'
  | 'chest'
  | 'arms'
  | 'abdomen'
  | 'pelvis'
  | 'legs';

export interface Symptom {
  id: string;
  name: string;
}

export interface BodyPartData {
  id: BodyPartId;
  label: string;
  symptoms: Symptom[];
}
