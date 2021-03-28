import { selector } from 'recoil';

import axios from 'axios';
import { lastupdateSelector } from './lastupdate';

export const servertimeSelector = selector({
  key: 'servertime',
  get: async ({ get }) => {
    get(lastupdateSelector);

    await new Promise(function (resolve) {
      setTimeout(() => {
        resolve(0);
      }, 1000);
    });

    const asyncResp = await axios.head('./');
    return asyncResp.headers.date;
  },
});
