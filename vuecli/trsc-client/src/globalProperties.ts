import { reactive, toRefs } from 'vue';

export interface IUserStatus {name: string, status: string}

export const globalProperties = reactive({
  authToken: '',
  nick: '',
  hostname: import.meta.env.VITE_APP_SERVER_ADDRESS,
  coList: [] as Array<IUserStatus>,
});

export const { authToken, nick, hostname, coList } = toRefs(globalProperties);
