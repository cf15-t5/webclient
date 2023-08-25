export function isDateExceed(check, target) {
  const checkDate = new Date(check);
  const targetDate = new Date(target);
  return checkDate >= targetDate;
}
