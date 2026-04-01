import { Task, TaskPriority } from '@olegpoliakov/tasks-core';
import { Schema } from 'mongoose';

const TaskSchema = new Schema<Task>({
    title: { type: String, required: true },
    completed: { type: Boolean, default: false },
    content: { type: String },
    dueDate: { type: Date },
    priority: {
        type: String,
        enum: Object.values(TaskPriority),
        default: TaskPriority.Medium
    },
    tagIds: { type: [String], default: [] },
    projectIds: { type: [String], default: [] }
}, {
    timestamps: true
});

TaskSchema.virtual('tags', {
    ref: 'Tag',
    localField: 'tagIds',
    foreignField: '_id'
});

export default TaskSchema;