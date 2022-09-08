// const futureDate = new Date(2023, 8, 9);
// console.log(((new Date() - futureDate) / (1000 * 60)) % 60);

const getCountdownData = (endDate) => {
  const daysUntill = Math.abs(Math.floor((new Date() - endDate) / (1000 * 60 * 60 * 24)));
  const hoursUntill = Math.abs(Math.floor(((new Date() - endDate) / (1000 * 60 * 60)) % 24));
  const minsUntill = Math.abs(Math.floor(((new Date() - endDate) / (1000 * 60)) % 60));
  const secsUntill = Math.abs(Math.floor(((new Date() - endDate) / 1000) % 60));
  return {
    daysUntill,
    hoursUntill,
    minsUntill,
    secsUntill,
  };
};

export default getCountdownData; 
