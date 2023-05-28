export interface CourseGroup {
    name: string,
    blocks: CourseBlock
}
export interface CourseBlock {
    name: string,
    /**
     * GH Markdown content
     */
    content: string
}