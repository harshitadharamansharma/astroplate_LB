// import moment from 'moment-timezone';

export function slugify(text) {
    return text
      .toString()
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^\w-]+/g, '')
      .replace(/--+/g, '-')
      .replace(/^-+/, '')
      .replace(/-+$/, '');
  }
  
  // export function formatDate(date) {
  //   return new Date(date).toLocaleDateString('en-US', {
  //     timeZone: "UTC",
  //   })
  // }

  // Format the date to a string
  export function formatDate(date: Date): string {
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    };
  
    return new Date(date).toLocaleDateString(undefined, options);
  }

// {new Date(featuredArticle.data.pubDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>


// utils.ts

// Define the mapping of time zone abbreviations to IANA time zone names
export const timeZoneMapping: Record<string, string> = {
  'IST': 'Asia/Kolkata',
  'UTC': 'UTC',
  'PST': 'America/Los_Angeles',
  'PDT': 'America/Los_Angeles',
  'CST': 'America/Chicago',
  'CDT': 'America/Chicago',
  'EST': 'America/New_York',
  'EDT': 'America/New_York',
  'GMT': 'GMT',
  'CET': 'Europe/Berlin',
  'CEST': 'Europe/Berlin',
  'EET': 'Europe/Helsinki',
  'EEST': 'Europe/Helsinki',
  'AEST': 'Australia/Sydney',
  'AEDT': 'Australia/Sydney',
  'ACST': 'Australia/Adelaide',
  'ACDT': 'Australia/Adelaide',
  'AWST': 'Australia/Perth',
  'NZST': 'Pacific/Auckland',
  'NZDT': 'Pacific/Auckland',
  'HST': 'Pacific/Honolulu',
  'AST': 'America/Atlantic',
  'ADT': 'America/Atlantic',
};

// "2024-07-10T00:00:00.000Z",


import { DateTime } from 'luxon';

export function formatEventTime(eventDate, eventTime, timeZone) {
  try {
    const dateTime = DateTime.fromFormat(`${eventDate.toISOString().split("T")[0]} ${eventTime}`, 'yyyy-MM-dd hh:mm a', {
      zone: timeZoneMapping[timeZone] || 'Asia/Kolkata',
    });

    if (!dateTime.isValid) {
      console.error(`Invalid date or time: ${eventDate}, ${eventTime}`);
      return null;
    }

    return dateTime.toISO(); // ISO format works well with FullCalendar
  } catch (e) {
    console.error('Error in formatting date:', e);
    return null;
  }
}

// Helper function to format the event time
// export function formatEventTime(eventDate, eventTime, timeZone) {
//   try {
//     const dateTimeString = `${eventDate}T${eventTime}`;
//     const date = new Date(dateTimeString);
//     const options = {
//       timeZone: timeZone,
//       hour12: true,
//       hour: 'numeric',
//       minute: 'numeric',
//     };
//     return date.toLocaleString('en-US', options);
//   } catch (e) {
//     console.error("Error in formatting date:", e);
//     return null;
//   }
// }


// export function formatEventTime(eventDate: string, eventTime: string, eventTimeZone: string): string {
//   // Lookup the full IANA time zone name using the abbreviation
//   // const timeZone = timeZoneMapping[eventTimeZone];

//   if (!eventTimeZone) {
//       console.error(`Invalid time zone: ${eventTimeZone}`);
//       return "Invalid time zone"; // Return a placeholder for invalid time zones
//   }

//   const eventDateTime = `${eventDate}T${eventTime}`; // Concatenate date and time

//   const localTime = moment.tz(eventDateTime, eventTimeZone).local();

//   if (!localTime.isValid()) {
//       console.error(`Invalid date-time for: ${eventDateTime} in timezone: ${eventTimeZone}`);
//       return "Invalid time"; // Return a placeholder for invalid times
//   }

//   return localTime.format('hh:mm A'); // 12-hour format
// }


// import { format, zonedTimeToUtc } from 'date-fns-tz';


// export const formatEventTime = (eventDate, eventTime, timeZone) => {
//   try {
//     // Combine date and time into a single date string
//     const dateTimeString = `${eventDate}T${(eventTime).split(" ")[0]}:00`;
    
//     // Convert to UTC using the provided time zone
//     const utcDateTime = zonedTimeToUtc(dateTimeString, timeZone);
    
//     // Format the UTC date/time to a specific format, e.g., 'yyyy-MM-dd HH:mm:ss'
//     const formattedDateTime = format(utcDateTime, "yyyy-MM-dd'T'HH:mm:ssXXX", { timeZone: 'UTC' });

//     return formattedDateTime; // Return formatted date string
//   } catch (error) {
//     console.error(`Error formatting event time: ${error}`);
//     return null; // Return null if there's an error
//   }
// };
