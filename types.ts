import React from 'react';

export interface ProductLine {
  id: number;
  line: string;
  title: string;
  visualStyle: string;
  inspiration: string;
  palette: string;
  keyMaterials: string;
  target: string;
  quote: string;
}

export interface Role {
  title:string;
  description: string;
  shape: 'circle' | 'square' | 'triangle';
}

export interface ComparisonElement {
    element: string;
    elegant: string;
    racing: string;
}

export interface ProductCategory {
    category: 'Textil' | 'Accesorios' | 'Lifestyle/Regalos&Family';
    items: string[];
}

export interface ProductDetail {
    product: string;
    category: ProductCategory['category'];
    elegant: string;
    racing: string;
    development: string;
}

export interface TimelinePhase {
    phase: number;
    title: string;
    duration: string;
    description: string;
    result: string;
}

export interface ProposalQuestion {
    id: number;
    question: string;
    context: string;
}