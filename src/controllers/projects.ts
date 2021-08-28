import Controller from './controller';
import Bot from '../bot';

export default class ProjectsController extends Controller {
  constructor(bot: Bot) {
    super(bot, 'projects');
  }
}
