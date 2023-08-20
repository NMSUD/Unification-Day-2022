interface Times {
  startTimeEu: number;
  endTimeEu: number;
  startTimeNa: number;
  endTimeNa: number;
}

interface Bases {
  baseName: string;
  planet: string;
  coordinates: string;
}

interface Schedule extends Bases {
  time: string;
  event: string;
}

export interface Creator {
  name: string;
  link: string;
}

interface Streams {
  eu: Creator[],
  na: Creator[],
}

interface ImportantInfo {
  discordLink: string;
  glyphs: string;
  galaxy: string;
}

export interface Year {
  importantInfo: ImportantInfo;
  times: Times
  schedule: Schedule[];
  bases: Bases[];
  streams: Streams;
  image: string;
  logo: string;
  logoCreator: Creator;
  websiteCreator: Creator;
}
