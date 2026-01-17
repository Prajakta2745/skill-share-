import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './modules/auth/auth.module';
import { HomeModule } from './modules/home/home.module';

@Module({
  imports: [
    // Load environment variables
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),

    // MongoDB connection (LOCAL, NO AUTH)
    MongooseModule.forRoot(
      process.env.MONGO_URI || 'mongodb://localhost:27017/skill-connect',
      {
        maxPoolSize: 10,
        serverSelectionTimeoutMS: 5000,
        socketTimeoutMS: 45000,
      },
    ),

    AuthModule,
    HomeModule,
  ],
})
export class AppModule {
  constructor() {
    console.log('✅ AppModule initialized');
    console.log(
      '📍 MONGO_URI:',
      process.env.MONGO_URI
        ? '✅ Loaded from .env'
        : '❌ Using default localhost',
    );
  }
}
