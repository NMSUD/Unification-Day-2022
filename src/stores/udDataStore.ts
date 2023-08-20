import { defineStore } from 'pinia';
import { Creator } from 'src/types/years';

interface State {
  activeYear: string;
  image: string;
  logo: string;
  logoCreator: Creator;
  websiteCreator: Creator;
}

export const useUdDataStore = defineStore('ud', {
  state: (): State => ({
    activeYear: '',
    image: '',
    logo: '',
    logoCreator: {
      name: '',
      link: ''
    },
    websiteCreator: {
      name: '',
      link: ''
    }
  }),


});
