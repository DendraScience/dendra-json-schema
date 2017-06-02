# Snippets

### Migrate schemas from draft-04 to draft-06-migrated

```
ajv migrate -s draft-04/datastream.json -o draft-06-migrated/datastream.json && \
ajv migrate -s draft-04/membership.json -o draft-06-migrated/membership.json && \
ajv migrate -s draft-04/organization.json -o draft-06-migrated/organization.json && \
ajv migrate -s draft-04/place.json -o draft-06-migrated/place.json && \
ajv migrate -s draft-04/person.json -o draft-06-migrated/person.json && \
ajv migrate -s draft-04/scheme.json -o draft-06-migrated/scheme.json && \
ajv migrate -s draft-04/station.json -o draft-06-migrated/station.json && \
ajv migrate -s draft-04/thing.json -o draft-06-migrated/thing.json && \
ajv migrate -s draft-04/vocabulary.json -o draft-06-migrated/vocabulary.json
```

### Beautify schemas in draft-06-migrated

```
js-beautify --indent-size=2 -r draft-06-migrated/datastream.json && \
js-beautify --indent-size=2 -r draft-06-migrated/membership.json && \
js-beautify --indent-size=2 -r draft-06-migrated/organization.json && \
js-beautify --indent-size=2 -r draft-06-migrated/place.json && \
js-beautify --indent-size=2 -r draft-06-migrated/person.json && \
js-beautify --indent-size=2 -r draft-06-migrated/scheme.json && \
js-beautify --indent-size=2 -r draft-06-migrated/station.json && \
js-beautify --indent-size=2 -r draft-06-migrated/thing.json && \
js-beautify --indent-size=2 -r draft-06-migrated/vocabulary.json
```
