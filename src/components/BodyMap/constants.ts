import { BodyPartData } from './types';

export const BODY_DATA: Record<string, BodyPartData> = {
  head: {
    id: 'head',
    label: 'Head & Neck',
    symptoms: [
      { id: 'h1', name: 'Headache' },
      { id: 'h2', name: 'Dizziness' },
      { id: 'h3', name: 'Sore throat' },
      { id: 'h4', name: 'Fever' },
      { id: 'h5', name: 'Vision problems' },
      { id: 'h6', name: 'Runny nose' },
    ]
  },
  chest: {
    id: 'chest',
    label: 'Chest',
    symptoms: [
      { id: 'c1', name: 'Chest pain' },
      { id: 'c2', name: 'Palpitations' },
      { id: 'c3', name: 'Shortness of breath' },
      { id: 'c4', name: 'Cough' },
      { id: 'c5', name: 'Heartburn' },
    ]
  },
  arms: {
    id: 'arms',
    label: 'Arms & Hands',
    symptoms: [
      { id: 'a1', name: 'Shoulder pain' },
      { id: 'a2', name: 'Elbow pain' },
      { id: 'a3', name: 'Wrist pain' },
      { id: 'a4', name: 'Numbness in fingers' },
      { id: 'a5', name: 'Tremors' },
    ]
  },
  abdomen: {
    id: 'abdomen',
    label: 'Abdomen',
    symptoms: [
      { id: 'ab1', name: 'Stomach ache' },
      { id: 'ab2', name: 'Nausea' },
      { id: 'ab3', name: 'Bloating' },
      { id: 'ab4', name: 'Abdominal cramps' },
      { id: 'ab5', name: 'Vomiting' },
    ]
  },
  pelvis: {
    id: 'pelvis',
    label: 'Lower Abdomen & Pelvis',
    symptoms: [
      { id: 'p1', name: 'Pelvic pain' },
      { id: 'p2', name: 'Urinary problems' },
      { id: 'p3', name: 'Groin pain' },
      { id: 'p4', name: 'Hip pain' },
    ]
  },
  legs: {
    id: 'legs',
    label: 'Legs & Feet',
    symptoms: [
      { id: 'l1', name: 'Knee pain' },
      { id: 'l2', name: 'Swollen ankles' },
      { id: 'l3', name: 'Foot pain' },
      { id: 'l4', name: 'Leg cramps' },
      { id: 'l5', name: 'Varicose veins' },
    ]
  }
};
