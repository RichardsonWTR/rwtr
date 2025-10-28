import readingTime from 'reading-time';

const calculateReadingTime = (content: string) => {
  // Calculate readingTime from markdown content
  const readingTimeResult = readingTime(content);
  
  // Format the read time into a readable string
  let readingTimeStr;
  if (readingTimeResult.minutes < 1) {
    readingTimeStr = 'Under 1 min read';
  } else {
    // Round up and format to "X minutes read"
    const minutes = Math.ceil(readingTimeResult.minutes);
    readingTimeStr = `${minutes} min read`;
  }

  return {
    readingTimeStr,
    readingTimeResult
  }
}

export default calculateReadingTime