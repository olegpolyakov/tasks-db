import { type Model, Schema } from 'mongoose';

import type { List, Task } from '@olegpolyakov/tasks/core';

type ListModel = Model<List>;

type ListVirtuals = {
    tasks: Task[]
};

const ListSchema = new Schema<List, ListModel, {}, {}, ListVirtuals>({
    name: { type: String, required: true },
    icon: { type: String },
    description: { type: String },
    taskIds: { type: [String], default: [] }
}, {
    timestamps: true
});

ListSchema.virtual('tasks', {
    ref: 'Task',
    localField: 'taskIds',
    foreignField: '_id'
});

export default ListSchema;