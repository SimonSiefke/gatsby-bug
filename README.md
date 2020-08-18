## Gatsby bug

```
git clone https://github.com/SimonSiefke/gatsby-bug &&
cd gatsby-bug &&
npm ci &&
npm run develop
```

Inside `pages.json` is data which comes from a CMS. Usually that is a very large file but I removed most of it for a minimal reproduction.

When running `npm run develop`, the following error occurs:

```
Missing onError handler for invocation 'rebuildSchemaWithSitePage', error was 'TypeError: Cannot read property 'contents' of null'. Stacktrace was 'TypeError: Cannot read property 'contents' of null
    at get (/home/simon/tmp/bug-repro/node_modules/gatsby/src/utils/get-value-at.ts:10:20)
    at map (/home/simon/tmp/bug-repro/node_modules/gatsby/src/utils/get-value-at.ts:20:59)
    at Array.map (<anonymous>)
    at getArray (/home/simon/tmp/bug-repro/node_modules/gatsby/src/utils/get-value-at.ts:19:6)
    at get (/home/simon/tmp/bug-repro/node_modules/gatsby/src/utils/get-value-at.ts:12:36)
    at get (/home/simon/tmp/bug-repro/node_modules/gatsby/src/utils/get-value-at.ts:13:50)
    at get (/home/simon/tmp/bug-repro/node_modules/gatsby/src/utils/get-value-at.ts:13:50)
    at get (/home/simon/tmp/bug-repro/node_modules/gatsby/src/utils/get-value-at.ts:13:50)
    at getValueAt (/home/simon/tmp/bug-repro/node_modules/gatsby/src/utils/get-value-at.ts:4:10)
    at getFirstValueAt (/home/simon/tmp/bug-repro/node_modules/gatsby/src/schema/infer/is-file.ts:14:15)
    at find (/home/simon/tmp/bug-repro/node_modules/gatsby/src/schema/infer/is-file.ts:84:13)
    at Array.find (<anonymous>)
    at getFilePath (/home/simon/tmp/bug-repro/node_modules/gatsby/src/schema/infer/is-file.ts:83:41)
    at isFile (/home/simon/tmp/bug-repro/node_modules/gatsby/src/schema/infer/is-file.ts:91:20)
    at getSimpleFieldConfig (/home/simon/tmp/bug-repro/node_modules/gatsby/src/schema/infer/add-inferred-fields.js:315:11)
    at getFieldConfig (/home/simon/tmp/bug-repro/node_modules/gatsby/src/schema/infer/add-inferred-fields.js:174:19)'
```
