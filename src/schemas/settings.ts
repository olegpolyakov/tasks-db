import { Schema } from 'mongoose';

import type { Settings } from '@olegpolyakov/tasks/core';

const SettingsSchema = new Schema<Settings>({
    listsOrder: { type: [String], default: [] },
    tagsOrder: { type: [String], default: [] },
    tasksOrder: { type: Object, default: {} },
    tasksSort: { type: Object, default: {} }
}, {
    timestamps: true,
    minimize: false
});

export default SettingsSchema;
