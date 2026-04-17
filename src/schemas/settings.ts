import { Schema } from 'mongoose';

import type { Settings } from '@olegpolyakov/tasks/core';

const SettingsSchema = new Schema<Settings>({
    projectsOrder: { type: Array, default: [] },
    tagsOrder: { type: Array, default: [] },
    tasksOrder: { type: Object, default: {} },
    tasksSort: { type: Object, default: {} }
}, {
    timestamps: true,
    minimize: false
});

export default SettingsSchema;
