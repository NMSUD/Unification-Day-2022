interface Times {
  startTimeEu: number;
  endTimeEu: number;
  startTimeNa: number;
  endTimeNa: number;
}

type Bases = {
  baseName: string;
  planet: string;
  coordinates: string;
}[]

interface Schedule extends Bases {
  time: string;
  event: string;
}

interface Stream {
  name: string;
  link: string;
}

interface Streams {
  eu: Stream[],
  na: Stream[],
}

interface ImportantInfo {
  discordLink: string;
  glyphs: string;
  galaxy: string;
}

export interface Year {
  importantInfo: ImportantInfo;
  times: Times
  schedule: Schedule;
  bases: Bases;
  streams: Streams;
  image: string;
  logo: string;
  logoCreator: string;
  websiteCreator: string;
}
