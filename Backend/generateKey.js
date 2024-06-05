import { randomBytes } from "crypto";

const secretKey = randomBytes(32).toString("hex");

// Output the secret key to the console
console.log("Generated JWT Secret Key:", secretKey);
