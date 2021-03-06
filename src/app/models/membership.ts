import BaseModel from './baseModel';
import { AcademicLevel } from './academicLevel';

export class Membership extends BaseModel {
  url: string;
  id: number;
  name: string;
  name_fr: string;
  name_en: string;
  price: number;
  details: string;
  duration: string;
  academic_levels: number[];
  available: boolean;
}

