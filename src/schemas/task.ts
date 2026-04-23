import { Schema } from 'mongoose';

import { Task, TaskPriority } from '@olegpolyakov/tasks/core';

const TaskSchema = new Schema<Task>({
    title: { type: String, required: true },
    completed: { type: Boolean, default: false },
    content: { type: String },
    dueDate: { type: Date },
    priority: {
        type: Number,
        enum: [
            TaskPriority.Low,
            TaskPriority.Medium,
            TaskPriority.High
        ],
        default: TaskPriority.Medium
    },
    tagIds: { type: [String], default: [] }
}, {
    timestamps: true
});

TaskSchema.virtual('tags', {
    ref: 'Tag',
    localField: 'tagIds',
    foreignField: '_id'
});

export default TaskSchema;