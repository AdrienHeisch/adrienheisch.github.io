declare module "*.png" {
    const value:string;
    export default value;
}

declare module "*.json" {
    const content:any;
    export default content;
}

declare module "*.md" {
    const content:string;
    export default content;
}