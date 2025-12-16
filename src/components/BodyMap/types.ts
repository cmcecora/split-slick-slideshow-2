// Front body parts
export type FrontBodyPartId =
  | 'head'
  | 'chest'
  | 'arms'
  | 'abdomen'
  | 'pelvis'
  | 'legs';

// Back body parts
export type BackBodyPartId =
  | 'back_head_neck'
  | 'back_upper'
  | 'back_arms'
  | 'back_backside'
  | 'back_legs';

// Combined body part type
export type BodyPartId = FrontBodyPartId | BackBodyPartId;

export interface Symptom {
  id: string;
  name: string;
}

export interface BodyPartData {
  id: BodyPartId;
  label: string;
  symptoms: Symptom[];
  diseases?: string[];
}
