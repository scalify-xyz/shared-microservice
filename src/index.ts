import AWSSecretsManager from "@shared/utils/aws-secrets-manager";


async function start(): Promise<void> {
  await AWSSecretsManager.create({
    region: "sa-east-1",
    secretsMap: {
      "JWT_SECRET": "jwt/production/scalableecommerce", 
    },
  });

  console.log("Hello World!");
}

start();
