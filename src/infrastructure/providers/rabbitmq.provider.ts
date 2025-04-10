import amqp, { Connection, Channel } from "amqplib/callback_api";

import { NotificationModel } from "@infrastructure/models/notification.model";

export class RabbitMQProvider {
  private connection!: Connection;
  private channel!: Channel;

  private constructor() {}

  static async create(url: string) {
    const provider = new RabbitMQProvider();
    await provider.connect(url);
    return provider;
  }

  private async connect(url: string): Promise<void> {
    this.connection = await new Promise<Connection>((resolve, reject) => {
      amqp.connect(url, (err, conn) => {
        if (err) reject(err);
        else resolve(conn);
      });
    });

    this.channel = await new Promise<Channel>((resolve, reject) => {
      this.connection.createChannel((err, channel) => {
        if (err) reject(err);
        else resolve(channel);
      });
    });
  }

  async publish(queue: string, message: NotificationModel): Promise<void> {
    await this.channel.assertQueue(queue);
    this.channel.sendToQueue(queue, Buffer.from(JSON.stringify(message)));
  }

  async consume(
    queue: string,
    callback: (message: NotificationModel) => void,
  ): Promise<void> {
    await this.channel.assertQueue(queue);
    this.channel.consume(queue, (msg) => {
      if (msg) {
        callback(JSON.parse(msg.content.toString()));
        this.channel.ack(msg);
      }
    });
  }
}
