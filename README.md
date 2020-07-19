# gcp_demo_project

Test for gcp

## Keywords

- Google Cloud Run
- Next.js
- TypeScript

## Development

```
yarn install
yarn dev
```

### Build image

```
gcloud builds submit \
  --tag gcr.io/$(gcloud config get-value project)/nextjs-on-cloud-run
```

### Deploy image

```
gcloud run deploy \
  --image gcr.io/$(gcloud config get-value project)/nextjs-on-cloud-run \
  --platform managed
```
