/**
 * Parses a date string in "YYYY-MM-DD" or "YYYY-MM-DD HH:MM" format
 * and returns a JavaScript Date object.
 * 
 * @param input - date string
 * @returns Date object or null if invalid
 */
export default function parseDate(input: string | Date): Date | null {
  if (!input) return null;

   if (input instanceof Date) return input; 

  // Split date and optional time
  const [datePart, timePart] = input.split(' ');

  const dateParts = datePart.split('-').map(Number);
  if (dateParts.length !== 3) return null;

  const [year, month, day] = dateParts;

  let hours = 0;
  let minutes = 0;

  if (timePart) {
    const timeParts = timePart.split(':').map(Number);
    if (timeParts.length >= 2) {
      [hours, minutes] = timeParts;
    }
  }

  return new Date(year, month - 1, day, hours, minutes);
}