import { EntityDataModuleConfig, EntityMetadataMap } from '@ngrx/data';

const entityMetadata: EntityMetadataMap = {
  Hero: {},
  Villain: {},
};

// because the plural of "hero" is not "heros"
const pluralNames = { Hero: 'Heroes' };

export const entityConfig: EntityDataModuleConfig = {
  entityMetadata,
  pluralNames,
  dataServiceConfig: {
    root: 'http://my-json-server.typicode.com/johnlindquist/json-server-heroes',
  },
};
