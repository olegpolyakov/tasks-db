import { Schema } from 'mongoose';

import type { Tag } from '@olegpolyakov/tasks/core';

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