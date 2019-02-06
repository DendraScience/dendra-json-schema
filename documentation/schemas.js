/* eslint global-require: 0 */

import { fromJS } from 'immutable';

export default fromJS([
  // The "getting started" schema provides table-of-contents links
  // for the sections in src/client/introduction.js.  You are free
  // to customize or remove both the schema and the introduction component.
  // require('./getting-started.json'),
  require('../schemas/draft-06-latest/aggregate.json'),
  require('../schemas/draft-06-latest/annotation.json'),
  require('../schemas/draft-06-latest/dashboard.json'),
  require('../schemas/draft-06-latest/datapoint.json'),
  require('../schemas/draft-06-latest/datastream.json'),
  require('../schemas/draft-06-latest/membership.json'),
  require('../schemas/draft-06-latest/organization.json'),
  require('../schemas/draft-06-latest/person.json'),
  require('../schemas/draft-06-latest/place.json'),
  require('../schemas/draft-06-latest/scheme.json'),
  require('../schemas/draft-06-latest/som.json'),
  require('../schemas/draft-06-latest/station.json'),
  require('../schemas/draft-06-latest/thing.json'),
  require('../schemas/draft-06-latest/types.json'),
  require('../schemas/draft-06-latest/uom.json'),
  require('../schemas/draft-06-latest/user.json'),
  require('../schemas/draft-06-latest/vocabulary.json')
]);
