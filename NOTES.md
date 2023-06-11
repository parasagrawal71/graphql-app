##Scalable GraphQL Architecture
https://theehsansarshar.hashnode.dev/scalable-graphql-architecture

// Authenticate
gcloud auth configure-docker asia-south1-docker.pkg.dev

// Build image
./build_image.sh

// Create tag
docker tag graphql-app:1.0.0 asia-south1-docker.pkg.dev/personal-projects-388416/server-images-repository/graphql-app:1.0.0

// Push tag
docker push asia-south1-docker.pkg.dev/personal-projects-388416/server-images-repository/graphql-app:1.0.0

// To check existing tags
docker images graphql-app --format="{{ .Tag }}"
