import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';
import { API_URI } from '~/constants/api';

const apiHost = 'http://localhost:1337';

export const about = (req: NextApiRequest, res: NextApiResponse) => {
  axios
    .get(`${apiHost}${API_URI.ABOUT}`)
    .then(({ status, data }) => {
      return res.json(data);
    })
    .catch(error => res.json(error))
    .finally(() => res.end());
};
export const career = (req: NextApiRequest, res: NextApiResponse) => {
  axios
    .get(`${apiHost}${API_URI.CAREER}`)
    .then(({ status, data }) => {
      return res.json(data);
    })
    .catch(error => res.json(error))
    .finally(() => res.end());
};
export const study = (req: NextApiRequest, res: NextApiResponse) => {
  axios
    .get(`${apiHost}${API_URI.STUDY}`)
    .then(({ status, data }) => {
      return res.json(data);
    })
    .catch(error => res.json(error))
    .finally(() => res.end());
};
