import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  try {
    const app = await NestFactory.create(AppModule, {
      bufferLogs: true,
    });

    // Start listening regardless of MongoDB connection status
    const port = process.env.PORT ?? 3000;
    await app.listen(port);

    console.log(`\n✅ Server running on http://localhost:${port}`);
    console.log(`📍 Try: curl http://localhost:${port}/home/hero\n`);
  } catch (error) {
    console.error('❌ Server error:', error.message);
    process.exit(1);
  }
}
bootstrap();
