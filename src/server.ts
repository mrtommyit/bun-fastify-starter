import Fastify from "fastify";

const app = Fastify();

// Define a simple route
app.get("/", async () => {
  return { message: "Hello from Fastify + TypeScript + Bun!" };
});

// Start the server
const start = async () => {
  try {
    await app.listen({ port: 3000 });
    console.log("🚀 Fastify server running on Bun at http://localhost:3000");
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

start();
