import type { Tag } from '@olegpoliakov/tasks-core';
import { Schema } from 'mongoose';

const TagSchema = new Schema<Tag>({
    name: { type: String, required: true },
    icon: { type: String }
}, {
    timestamps: true
});

TagSchema.virtual('tasks', {
    ref: 'Task',
    localField: '_id',
    foreignField: 'tagIds'
});

export default TagSchema;