import type { i18n, TFunction } from 'i18next';

export type ObjectStringValuesT = Record<string, string>;

export type NullableT<T> = T | null;

export type TranslationT = TFunction;
export type i18nT = i18n;
