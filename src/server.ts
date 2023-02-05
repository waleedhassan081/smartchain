import app from './app';
import { log } from './api/utilities/helper';
const port = process.env.PORT || 3000;
app.listen(port, () => {
  log.info({ port }, 'App started')
});
