import { snakeCase, startCase } from 'lodash';

export const enumToOptions = <T extends Record<string, string>>(
  enumType: T,
): { value: T[keyof T]; label: string }[] => {
  const enumKeys = Object.values(enumType);

  return enumKeys.map((key) => ({
    value: enumType[key as keyof T],
    label: startCase(snakeCase(key)),
  }));
};
