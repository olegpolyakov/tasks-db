import type { Project, ProjectSection, Task } from '@olegpoliakov/tasks-core';
import { type Model, Schema } from 'mongoose';

type ProjectVirtuals = {
    id: string;
    tasks: Task[]
};

type ProjectModel = Model<Project>;

export const ProjectSectionSchema = new Schema<ProjectSection>({
    name: { type: String, required: true },
    taskIds: { type: [String], default: [] }
}, {
    _id: false
});

const ProjectSchema = new Schema<Project, ProjectModel, {}, {}, ProjectVirtuals>({
    name: { type: String, required: true },
    icon: { type: String },
    description: { type: String },
    archived: { type: Boolean, default: false },
    taskIds: { type: [String], default: [] },
    sectionIds: { type: [String], default: [] },
    sections: {
        type: Map,
        of: ProjectSectionSchema,
        default: {}
    }
}, {
    timestamps: true
});

ProjectSchema.virtual('tasks', {
    ref: 'Task',
    localField: 'taskIds',
    foreignField: '_id'
});

export default ProjectSchema;