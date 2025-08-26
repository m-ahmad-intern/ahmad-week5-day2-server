import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema({ timestamps: true })
export class Comment extends Document {
  @Prop({ required: true }) postId: string;  // For now, just a string
  @Prop({ required: true, type: String }) authorId: string;  // will link to User later
  @Prop({ required: true }) content: string;
  @Prop({ type: Types.ObjectId, ref: 'Comment', default: null }) parentId?: Types.ObjectId; // for replies

  // NEW: who liked this comment (user ids as strings for now)
  @Prop({ type: [String], default: [] })
  likes: string[];
}

export const CommentSchema = SchemaFactory.createForClass(Comment);
