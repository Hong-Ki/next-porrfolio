import light from './light';
import dark from './dark';

const themes = {
  light,
  dark,
};
export type Theme = typeof light;
export type Themes = keyof typeof themes;
export default themes;
