/**
 * Returns a preferred statement about variable declaration.
 * @returns {string} The statement.
 */
export function taskFirst(): string {
  const task = 'I prefer const when I can.';
  return task;
}

/**
 * Returns a statement suffix.
 * @returns {string} The suffix.
 */
export function getLast(): string {
  return ' is okay';
}

/**
 * Combines statements about variable declaration preferences.
 * @returns {string} The combined statement.
 */
export function taskNext(): string {
  let combination = 'But sometimes let';
  combination += getLast();

  return combination;
}
